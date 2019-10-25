<template>

    <div>
        <my-nav @insert="insertlist"></my-nav>
        <my-list :lists="todolist" scene="success" @indexdelete="indexdelete"></my-list>
    </div>
</template>

<script>
    import MyNav from '../components/my-nav';
    import MyList from '../components/my-list';

    export default {
        name: "index",
        data: function () {
            return {
                todolist: [
                    {id: 1, content: '开题报告', status: false},
                    {id: 2, content: '简历', status: false},
                    {id: 3, content: '协同开发', status: false},
                    {id: 4, content: '过程化项目', status: true}],
                content: ''
            }
        },
        methods: {
            insertlist(value) {
                let obj = {};
                obj.id = this.todolist[this.todolist.length - 1].id + 1;
                obj.content = value;
                obj.status = false;
                this.todolist.push(obj)

            },

            indexdelete(id) {
                console.log(3);
                let index = this.todolist.findIndex(ele => ele.id == id);
                console.log(index);
                this.todolist.splice(index, 1);
            },
            saveList() {
                localStorage.todolist = JSON.stringify(this.todolist)
            },
        },
        watch: {
            todolist: {
                handler: function () {
                    this.saveList();
                },
                deep: true,
            },
            content(newv, oldv) {
                console.log(newv, oldv);
            }
        },
        components: {
            MyNav, MyList
        },
    }
</script>

<style scoped>
    @import url("https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css");

    .panel {
        width: 300px;
        height: auto;
        border: 3px solid #333333;
    }
</style>