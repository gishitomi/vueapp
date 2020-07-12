<template>
  <div id="app">
    <v-card max-width="80%" class="mx-auto" outlined>
      <div class="addli">
        <div class="input-size">
          <v-text-field label="タスク" color="rgb(22, 153, 22)" v-model="newItem" dense></v-text-field>
          <div class="details">
            <v-text-field label="メモ" color="rgb(22, 153, 22)" v-model="newDetail"></v-text-field>
            <div class="options">
              <v-radio-group v-model="newPriority" row>
                <span style="margin-right: 10px;">優先度:</span>
                <v-radio label="低" color="green" value="0"></v-radio>
                <v-radio label="中" color="orange" value="1"></v-radio>
                <v-radio label="高" color="red" value="2"></v-radio>
              </v-radio-group>
            </div>
          </div>
        </div>
        <div class="btns">
          <v-btn v-on:click="addTodo" dark color="rgb(22, 153, 22)" x-large fab>
            <i class="fas fa-paper-plane fa-lg" style="color: white;"></i>
          </v-btn>
        </div>
      </div>
    </v-card>
    <!-- {{$data}} -->
    <div id="todo-app">
      <v-card max-width="1000" outlined class="lists">
        <h5>ToDo</h5>
        <div v-for="(todo,i) in todos" v-bind:key="i">
          <div class="todo-list" v-bind:class="{done: todo.isDone}">
            <p id="num" style="margin-bottom:0;">{{todo.id}}.</p>
            <v-checkbox v-model="todo.isDone" color="green"></v-checkbox>
            <div class="message">
              <p class="main-message" style="margin-bottom:0;">{{todo.item}}</p>
              <p class="detail-message" style="margin-bottom:0;">{{todo.detail}}</p>
            </div>
            <v-btn x-small depressed color="red" fab v-on:click.stop="dialog = true">
              <i class="fas fa-trash-alt fa-lg" style="color: white;"></i>
            </v-btn>
            <v-dialog v-model="dialog" max-width="290">
              <v-card>
                <v-card-title class="headline">この項目を削除</v-card-title>

                <v-card-text>
                  この操作は取り消せません。
                  <br />よろしいですか？
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1" text @click="dialog = false">キャンセル</v-btn>

                  <v-btn
                    color="green darken-1"
                    text
                    @click="dialog = false; dialogDelete = true; deleteBtn(i); "
                  >OK</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="290">
              <v-card>
                <v-card-title class="headline">完全に削除</v-card-title>
                <v-card-text>完全に削除しました。</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1" text @click="dialogDelete = false;">OK</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <div
              id="circle"
              v-bind:class="{
                    red: todo.priority == 2,
                    orange: todo.priority == 1,
                    green: todo.priority == 0,
                    }"
            ></div>
          </div>
        </div>
      </v-card>
      <v-card outlined max-width="1000" class="lists">
        <h5>Done</h5>
        <div v-for="(done, i) in dones" v-bind:key="i" v-show="done.isDone" class="todo-list">
          <p id="num" style="margin-bottom:0;">{{done.id}}.</p>
          <v-checkbox v-model="done.isDone" color="green"></v-checkbox>
          <div class="message">
            <p class="done-text main-message" style="margin-bottom:0;">{{done.item}}</p>
            <p class="detail-message" style="margin-bottom:0;">{{done.detail}}</p>
          </div>
          <div
            id="circle"
            class="done-text"
            v-bind:class="{
                    red: done.priority == 2,
                    orange: done.priority == 1,
                    green: done.priority == 0,
                    }"
          ></div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<style scoped>
#app {
  margin-top: 20px;
}
.input-size {
  width: 50%;
  position: relative;
}

.btns {
  position: absolute;
  bottom: 10%;
  right: 15%;
}

.addli {
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
}

#todo-app {
  display: flex;
  flex-wrap: wrap;
}
.options {
  display: flex;
}

#num {
  font-size: 20px;
  width: 20px;
  font-weight: bold;
}

.lists {
  margin: 0 auto;
  margin-top: 40px;
  height: 440px;
  width: 550px;
  overflow: auto;
}

.lists h5 {
  font-size: 20px;
  font-family: serif;
  text-align: center;
  margin-bottom: 15px;
}

.todo-list {
  display: flex;
  align-items: center;
  padding-left: 20px;
  height: 50px;
}

.main-message {
  margin: 0;
  width: 150px;
  margin-left: 10px;
  font-size: 20px;
}

.done {
  display: none;
}

.done-text {
  opacity: 0.4;
  text-decoration: line-through;
}

.detail-message {
  font-size: 13px;
  opacity: 0.8;
  width: 60px;
  display: flex;
  align-items: center;
}

.message {
  display: flex;
}

#circle {
  width: 25px;
  height: 25px;
  border-radius: 100%;
  margin-left: 20px;
}
</style>

<script>
export default {
  name: "todo-app",
  data: () => ({
    inputId: 1,
    newItem: "",
    newDetail: "",
    newPriority: null,
    todos: [],
    dones: [],
    dialog: false,
    dialogDelete: false,
  }),
  methods: {
    addTodo() {
      if (this.newItem === "") return;
      const todo = {
        id: this.inputId,
        item: this.newItem,
        detail: this.newDetail,
        isDone: false,
        priority: this.newPriority
      };
      this.todos.push(todo);
      this.dones.push(todo);
      this.newItem = "";
      this.newDetail = "";
      this.inputId++;
      this.newPriority = null;
    },
    deleteBtn(i) {
      this.todos.splice(i, 1);
      this.dones.splice(i, 1);
    }
  }
};
</script>
