<template>
    <div class="todo-list">
        <todo v-for="todo in listTodoSort"  :description-prop="todo.description" :name-prop="todo.name"
              :completed-prop="todo.completed" :todo_id="todo.id" :key="todo.id"/>
    </div>
</template>

<script>
    import Todo from './todo';

    export default {
        name: 'list-todo',

        components: { Todo },

        computed: {
            listTodoSort() {
                return this.$store.getters.listTodoSort;
            }
        }
    }
</script>
