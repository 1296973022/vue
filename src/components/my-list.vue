<template>
    <div>
        <ul class="panel" :class="'panel-'+scene">
            <slot></slot>
            <my-li v-for="item in lists " :key="item.id" :content="item.content" :id="item.id" :status="item.status"
                   @listdelete="listdelete"></my-li>
        </ul>
    </div>
</template>

<script>
    import MyLi from '../components/my-li';

    export default {
        name: "my-list",
        props: {
            lists: {
                required: true,
                type: Array,
                // default: function () {
                //     return [];
                // }
            },
            scene: {
                type: String,
                default: 'info'
            }
        },
        methods: {
            listdelete(id) {
                console.log(2);
                this.$emit('indexdelete', id)
            }
        },
        components: {
            MyLi
        }
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