<template>
    <div>
        <!--<button class="btn"></button>-->
        <!--<button class="btn btn-default"></button>-->
        <!--<button class="btn btn-promary"></button>-->
        <!--<button class="btn btn-info"></button>-->
        <my-btn type="info" title="成功" :num="num" @zs="updatanumber"></my-btn>
        <my-btn type="promary" title="失败" :num="num" @zs="updatanumber"></my-btn>
        <my-btn :num=20 @zs="updatanumber"></my-btn>
    </div>
</template>

<script>
    import MyBtn from '../components/my-btn'

    export default {

        name: "write",
        data:function(){
            return {num:10}
        },
        methods:{
            updatanumber(){
                this.num++
            }
        },
        components: {
            MyBtn
        }

    }
</script>

<style scoped>

</style>