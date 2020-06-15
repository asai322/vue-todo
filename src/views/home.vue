<template>
    <div class="home">
        <h1 class="heading">ToDo</h1>
        <add-todo/>
        <list-todo/>
    </div>
</template>

<script>
    import AddTodo from '../common/components/add-todo'
    import ListTodo from '../common/components/list-todo'

    export default {
        name: 'app',
        components: { AddTodo, ListTodo }
    }
</script>
