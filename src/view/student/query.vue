<template>
    <div>
        <el-table :data="students">
            <el-table-column prop="id" label="ID"></el-table-column>
            <el-table-column prop="username" label="姓名"></el-table-column>
            <el-table-column prop="age" label="年龄"></el-table-column>
            <el-table-column prop="sex" label="性别"></el-table-column>
            <el-table-column prop="tell" label="联系方式"></el-table-column>
            <el-table-column prop="password" label="密码"></el-table-column>
            <el-table-column prop="classer" label="班级"></el-table-column>

            <el-table-column
                    fixed="right"
                    label="操作"
                    width="200">
                <template slot-scope="scope">
                    <!--<el-button ><router-link :to="{name:'studentedit'}">编辑</router-link> </el-button>-->

                    <router-link :to="{name:'studentedit',params:{id:scope.row.id}}" tag="el-button">编辑</router-link>

                    <el-button @click="deleteStudent(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>

        </el-table>
    </div>
</template>

<script>
    import students from '../../data/students';

    export default {
        name: "query",
        data() {
            return {
                students: []
            }
        },
        methods: {
            getStudent() {
                let a = JSON.parse(localStorage.getItem('form'));

                this.students = students;
                students.push(a)

            },
            deleteStudent(id) {
                this.students = this.students.filter(ele => ele.id != id)
            }
        },
        //生命周期函数
        beforeMount() {
            this.getStudent();
        },
        // mounted() {
        //     this.getStudent();
        // }
    }
</script>

<style scoped>

</style>