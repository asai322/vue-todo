export default {
    state: {
        list_todo: {}
    },

    getters: {
        listTodoSort: state => Object.values(state.list_todo).sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();

            if (nameA < nameB) return 1;
            if (nameA > nameB) return -1;
            return 0;
        })
    },

    mutations: {
        addTodo(state, data) {
            state.list_todo = {...state.list_todo, [data.id]: data};
        },

        editTodo(state, data) {
            state.list_todo[data.id] = {...data};
        },

        deleteTodo(state, data) {
            delete state.list_todo[data];
            state.list_todo = {...state.list_todo};
        }
    }
}
