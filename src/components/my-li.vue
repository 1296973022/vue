<template>
    <li class="list-group-item" :class="'list-group-item-'+classnmae"><input type="checkbox" v-model="status">{{content}}
        <button @click="lidelete(id)">×</button>
    </li>
</template>

<script>
    export default {
        name: "my-li",
        props: {
            content: {
                required: true,
                type: String
            },
            status: {
                default: true,
                type: Boolean
            },
            id: {
                required: true,
                type: Number
            }
        },
        methods: {
            lidelete(id) {
                this.$emit('listdelete', id)
            }
        },
        computed: {
            classnmae() {
                return this.status ? 'success' : 'danger';
            }
        }
    }


</script>

<style scoped>
    @import url("https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css");
</style>