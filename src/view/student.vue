<template>
    <div>

        <el-container>
            <el-aside width="200px" >

                <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        background-color="#545c64"
                        text-color="#fff"
                        :router="true"
                        active-text-color="#ffd04b">
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>日报管理</span>
                        </template>
                        <el-menu-item-group index="/student">
                            <el-menu-item index="/student/write">填写日报</el-menu-item>
                            <el-menu-item index="/student/query">查看日报</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                </el-menu>


            </el-aside>
            <el-container>
                <el-header>
                    <el-menu class="el-menu-demo" mode="horizontal">
                        <el-menu-item index="1">处理中心</el-menu-item>
                        <el-submenu index="2">
                            <template slot="title">我的工作台</template>
                            <el-menu-item index="2-1">选项1</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>
                            <el-menu-item index="2-3">选项3</el-menu-item>
                        </el-submenu>
                        <el-menu-item index="4"><a href="" target="_blank">订单管理</a></el-menu-item>
                        <!--<div style="position:absolute ;right: 10px;top: 10px;">{{this.user.username}}</div>-->
                    </el-menu>
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>

    </div>
</template>

<script>
    export default {
        name: "student",
        data() {
            return {
                user: null
            }
        },
        methods: {
            getUser() {
                this.user = JSON.parse(localStorage.getItem('user'))

            },
            beforeMount() {
                this.getUser()

            },

        }

    }
</script>

<style scoped>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;

    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;

    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;

    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }

    a {
        color: #333;
    }

    .router-link-exact-active {
        color: #4094f6;
    }
</style>