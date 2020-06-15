<template>
    <div :class="['add-todo', {'error-lenght': error_length}]">
        <span class="error">Name too short</span>
        <input v-model="name" class="name" placeholder="Name" type="text" @keypress.enter="saveTodo" >
        <textarea v-model="description" class="description" placeholder="Description" @keypress.enter="saveTodo" ></textarea>
        <button class="save-todo" type="button" @click="saveTodo">Add todo</button>
    </div>
</template>

<script>
    export default {
        name: 'add-todo',

        data() {
            return {
                name: '',
                description: '',
                error_length: false
            }
        },

        computed: {
          state() {
              return this.$store;
          }
        },

        methods: {
            saveTodo() {
                if (this.name.length < 2) {
                    return this.error_length = true;
                } else {
                    const id_todo =`f${(+new Date).toString(16)}`;

                    this.$store.commit('addTodo', {
                        name: this.name,
                        description: this.description,
                        completed: false,
                        id: id_todo
                    });

                    this.error_length = false;
                    this.name = this.description = '';
                }
            }
        }
    }
</script>
