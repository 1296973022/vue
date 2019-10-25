<template>
    <div>
        <div>学生查看日报</div>
        <el-form :model="form" :inline="true">

            <el-form-item label="内容">
                <el-input v-model=" form.content" aria-placeholder="搜索内容"></el-input>
            </el-form-item>

            <el-date-picker label="搜索时间"
                            v-model="form.ctime"
                            align="right"
                            type="date"
                            format="yyy-MM-dd"
                            value-format="yyy-MM-dd"
                            placeholder="选择日期"
                            :picker-options="pickerOptions">
            </el-date-picker>
            <el-form-item>
                <el-button type="primary" @click="getDaily">搜索</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="dailyArr">

            <el-table-column prop="content" label="内容"></el-table-column>
            <el-table-column prop="finish" label="完成度"></el-table-column>
            <el-table-column prop="motto" label="座右铭"></el-table-column>
            <el-table-column prop="suggest" label="建议"></el-table-column>
            <el-table-column prop="problem" label="问题"></el-table-column>
            <el-table-column prop="content" label="心得体会"></el-table-column>
            <el-table-column prop="other" label="其他"></el-table-column>
            <el-table-column prop="ctime" label="时间"></el-table-column>
        </el-table>
        <!--<el-pagination layout="prev,pager,next,jumper" total="total" ></el-pagination>-->
        <my-page :total="total" :page-size="limit" @changepage="getDaily"></my-page>
    </div>

</template>
<script>
    import {SUCCESS, FAIL, HOSTNSME} from '../../../config/bass';
    import MyPage from '../../../components/my-page'

    export default {
        name: "query",
        data() {
            return {
                dailyArr: [],
                total: 0,
                user: null,
                limit: 2,
                form: {
                    content: '',
                    ctime: ''
                }

            }
        },
        computed: {
            objTransformQS() {
                let str = '';
                for (let i in this.form) {
                    let val = this.form[i];
                    if (val != '') {
                        str += '&' + i + '=' + val
                    }
                }
                return str;
            }
        },
        methods: {
            // changepage(i){
            //     console.log(i,2);
            // },
            getDaily(i = 1) {
                let user = this.user.username;
                let qs = '?names=' + user + '&page=' + i + '&limit=' + this.limit + this.objTransformQS;
                fetch(HOSTNSME + 'index/index/query' + qs)
                    .then(res => res.json())
                    .then(data => {
                        if (data.code == SUCCESS) {
                            this.dailyArr = data.data;
                            this.total = data.count;
                        } else if (data.code == FAIL) {
                            this.message.success(data.msg);

                        }

                    })
            },
            getUser() {
                this.user = JSON.parse(localStorage.user);
            }
        },
        beforeMount() {
            this.getUser();
            this.getDaily();
        },
        components: {
            MyPage
        }
    }
</script>

<style scoped>
    .pages {
        width: 100%;
        height: 30px;
        display: flex;
    }

    .pages > li {
        width: 30px;
        height: 28px;
        text-align: center;
        line-height: 28px;
        border-radius: 3px;
        background: #333;
        margin-left: 10px;
        cursor: pointer;
    }
</style>