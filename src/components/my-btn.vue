<template>
    <button :class="['btn', 'btn-'+type]" @click="counclick" >{{title}}{{num}}</button>
</template>

<script>
    export default {
        name: "my-btn",
        // props:['type','title'],
        props: {
            type: {
                default: 'primary'
            },
            title: {
                default: '这是一个默认按钮'
            }, num: {
                required:true,
                type:Number
            }
        },
        data: function () {
            return {
                count: 1,
                msg: 'my-btn'
            }
        },
        methods: {
            counclick() {
                this.$emit('zs');
            }
        },
        computed: {
            // uppermsg(){
            //
            // }
        }
    };

</script>

<style scoped>
    @import url("https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css");

</style>