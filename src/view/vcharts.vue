<template>
    <div>
        <el-row>
            <!--<el-col :span="6">-->
                <!--<div class="grid-content bg-purple">-->
                    <!--<ve-line :data="linesData" :settings="lineSettings"></ve-line>-->
                <!--</div>-->
            <!--</el-col>-->
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <ve-line :data="linesData1" ></ve-line>
                </div>
            </el-col>

        </el-row>
    </div>
</template>

<script>
    export default {
        name: "vcharts",
        data() {
            this.lineSettings = {
                labelMap:{
                    // metrics: ['下单用户']
                    'number':'每日提交量'
                }

            }
            return {
                linesData: {
                    columns: ['data', 'number'],
                    rows: [{data: '2019-12-21', number: '41'},
                        {data: '2019-12-22', number: '41'},
                        { data: '2019-12-23',number: '42'},
                        {data: '2019-12-24', number: '48'},
                        {data: '2019-12-25', number: '31'},
                        { data: '2019-12-26', number: '25' },
                        {data: '2019-12-27', number: '41'},]
                },
                linesData1:{
                    columns:['data','status','skill'],
                    rows:[
                        {data:'7.22',status:100,skill:0},
                        {data:'8.22',status:90,skill:20},
                        {data:'9.22',status:50,skill:50},
                        {data:'10.22',status:80,skill:70},
                        {data:'11.22',status:100,skill:80},
                        {data:'12.22',status:70,skill:90},

                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>