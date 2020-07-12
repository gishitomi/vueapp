<template>
  <div>
    <todo-app />
  </div>
</template>

<style scoped>
</style>

<script>
import TodoApp from "@/components/ToDoApp.vue";

export default {
  name: "todo",
  components: {
    TodoApp,
  }
};
</script>