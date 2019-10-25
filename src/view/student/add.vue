<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>学生</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider></el-divider>
        <el-form :model="form" ref="form" label-width="80px">
            <el-form-item label="姓名">
                <el-input v-model="form.username" placeholder="Username" clearable>
                    <i slot="prefix" class="el-input-icon el-icon-user"></i>
                </el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-radio label="男" v-model="form.sex"></el-radio>
                <el-radio label="女" v-model="form.sex"></el-radio>
            </el-form-item>

            <el-form-item label="年龄">
                <el-input v-model="form.age" placeholder="age" clearable>
                    <i slot="prefix" class="el-input-icon el-icon-user"></i>
                </el-input>
            </el-form-item>
            <el-form-item label="班级">
                <el-select v-model="form.classer" clearable placeholder="请选择">
                    <el-option
                            v-for="item in classes"
                            :key="item.cid"
                            :label="item.cname"
                            :value="item.cname">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="num">
                <el-input v-model="form.num" placeholder="num" clearable>
                    <i slot="prefix" class="el-input-icon el-icon-user"></i>
                </el-input>
            </el-form-item>
            <el-form-item label="联系方式">
                <el-input v-model="form.tell" placeholder="tell" clearable>
                    <i slot="prefix" class="el-input-icon el-icon-user"></i>
                </el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password" placeholder="password" clearable>
                    <i slot="prefix" class="el-input-icon el-icon-user"></i>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submit('form')">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "add",
        data: function () {
            return {
                form: {
                    id: '',
                    username: '',
                    password: '',
                    sex: '',
                    age: '',
                    classer: '',
                    num: '',
                    tell: ''
                },
                classes: [
                    {cid: '1', cname: 'wuif1907-1'}, {cid: '2', cname: 'wuif1907-2'}, {cid: '3', cname: 'wuif1907-3'}
                ]
            }
        },
        methods: {
            submit(form) {
                this.$refs[form].validate((valid) => {
                    if (valid) {
                        this.form.id = Number(new Date());


                        localStorage.form=JSON.stringify(this.form);
                    }


                })

            }

        }

    }
</script>

<style scoped>
    .el-form {
        width: 500px;
    }
</style>