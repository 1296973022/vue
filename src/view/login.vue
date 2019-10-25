<template id="container">
    <div class="box">
        <!--管理员，教师，学生-->
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
            <el-form-item label="用户名" prop="username">
                <el-input v-model.trim="ruleForm.username" ref="ruleForm" placeholder="请输入用户名" clearable
                          prefix-icon="el-icon-user"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="ruleForm.password" ref="ruleForm" placeholder="请输入密码" show-password clearable
                          prefix-icon="el-icon-lock"></el-input>
            </el-form-item>
            <el-form-item label="角色" prop="role">
                <el-select v-model="ruleForm.role" ref="ruleForm" placeholder="请选择登陆角色">
                    <el-option v-for="v in roles" :label="v.name" :value="v.name" :key="v.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm">登陆</el-button>
                `
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import admin from '../data/admin';
    import students from '../data/students';
    import teacher from '../data/teacher';

    export default {
        name: "login",
        data: function () {
            return {
                ruleForm: {
                    username: '',
                    password: '',
                    role: ''
                },

                roles: [{id: 1, name: '学生'}, {id: 2, name: '老师'}, {id: 3, name: '管理员'}],
                rules: {
                    username: [
                        {required: true, message: '请输入账号', trigger: 'blur'},
                        {min: 2, max: 10, message: '请输入2~10个字符', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '密码格式不正确', trigger: 'blur'}
                    ],
                    role: [
                        {type: 'string', required: true, message: '请选择角色', trigger: 'change'}
                    ],

                },
            }
        },
        methods: {
            submitForm() {
                //1.箭头函数，2.this存一个临时变量，3.函数定义时bind绑定this
                this.$refs.ruleForm.validate((valid) => {
                    if (valid) {
                        let role = this.ruleForm.role;
                        let model = null;
                        if (role == '管理员') {
                            model = admin;
                        } else if (role == '学生') {
                            model = students
                        } else if (role == '老师') {
                            model = teacher
                        }
                        let flag = model.some(ele => ele.username == this.ruleForm.username && ele.password == this.ruleForm.password)
                        if (flag) {
                            localStorage.user = JSON.stringify(this.ruleForm);
                            if (role == '学生') {
                                this.$router.push({name: 'student'});
                            } else {
                                this.$router.push({name: 'admin'});
                            }
                        } else {
                            this.$message.warning('用户名密码不匹配');
                        }
                    }
                })


                // this.$refs.validate((valid) => {
                //     if (valid) {

                //         }
                //     } else {
                //         console.log('error submit!!');
                //         return false;
                //     }
                // });
            },

        }
    }


</script>
<style>
    html, body {
        width: 100%;
        height: 100%
    }


</style>
<style scoped>
    #container {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: #ffffff url("../assets/backg02.jpg") center/cover;

    }

    .box {
        width: 300px;
        margin: auto;
        height: auto;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 10px 20px;
        border-radius: 5px;
        box-shadow: 5px 4px 10px rosybrown;
    }
</style>