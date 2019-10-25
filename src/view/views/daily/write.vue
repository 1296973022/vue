<template>
    <div>
        <el-form :model="daily" ref="myform">
            <el-form-item label="座右铭" prop="motto">
                <el-input v-model="daily.motto" placeholder="座右铭" minlength="10" maxlength="50"
                          show-word-limit></el-input>
            </el-form-item>
            <el-form-item label="完成情况">
                <el-input v-model="daily.finish" placeholder="完成情况"></el-input>
            </el-form-item>
            <el-form-item label="完成内容">
                <el-input type="textarea" v-model="daily.content" placeholder="请输入内容" minlength="10"></el-input>
            </el-form-item>
            <el-form-item label="心得体会">
                <el-input v-model="daily.feeling" placeholder="请输入内容"></el-input>
            </el-form-item>
            <el-form-item label="遇到的问题">
                <el-input v-model="daily.problem" placeholder="请输入内容"></el-input>
            </el-form-item>
            <el-form-item label="建议">
                <el-input v-model="daily.suggest" placeholder="请输入内容"></el-input>
            </el-form-item>
            <el-form-item label="其他">
                <el-input v-model="daily.other" placeholder="请输入内容"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitDaily">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "write",
        data() {
            return {
                daily: {
                    names: '',
                    classes: 'wuif1907-2',
                    motto: '',
                    content: '',
                    finish: '',
                    problem: '',
                    suggest: '',
                    other: '',
                    feeling: ''

                }
            }
        },
        methods: {
            submitDaily() {
                this.daily.names = JSON.parse(localStorage.getItem('user')).username;

                fetch('http://www.daily-end.com/index/index/index', {
                    method: 'POST',
                    body: JSON.stringify(this.daily),
                    headers: new Headers({
                        'Content-Type': 'application/json'

                    })
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.code==200) {
                        this.message.success(data.msg);
                        this.$refs.myform.resetFields();
                    }
            else{
                            this.message.success(data.msg);
                }
            })
            }
        }
    }
</script>

<style scoped>

</style>