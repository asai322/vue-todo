<template>
    <div :class="['todo', {'edit-mode': editMode}, {'completed': completed}]">
        <input v-model="completed" class="check" @change="save" type="checkbox">
        <div class="info">
            <input v-model="name" class="name" type="text" :readonly="!editMode" @keypress.enter="saveTodo" >
            <textarea v-model="description" class="description" :readonly="!editMode" @keypress.enter="saveTodo" ></textarea>
        </div>
        <div class="form-group">
            <button class="delete-todo" type="button" @click="deleteTodo">Delete todo</button>
            <button v-if="!editMode" class="edit-todo" type="button" @click="editTodo">Edit todo</button>
            <button v-else class="edit-todo" type="button" @click="saveTodo">Save</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'todo',

        data() {
            return {
                name: '',
                description: '',
                editMode: false,
                completed: false
            }
        },

        props: {
            nameProp: {
                type: String,
                default: '',
                required: true
            },

            descriptionProp: {
                type: String,
                default: '',
                required: false
            },

            completedProp: {
                type: Boolean,
                default: false,
                required: true
            },

            todo_id: {
                type: String,
                default: null,
                required: true
            }
        },

        created() {
            this.name = this.nameProp;
            this.description = this.descriptionProp;
            this.completed = this.completedProp;
        },

        methods: {
            deleteTodo() {
                this.$store.commit('deleteTodo', this.todo_id);
            },

            editTodo() {
                this.editMode = true;
            },

            saveTodo() {
                this.editMode = false;
                this.save();
            },

            save() {
                this.$store.commit('editTodo', {
                    name: this.name,
                    description: this.description,
                    completed: this.completed,
                    id: this.todo_id
                });
            }
        }
    }
</script>