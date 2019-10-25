<template>
    <div class="nav">
        <input type="text" v-model="content">
        <button @click="submit">增加</button>
    </div>
</template>

<script>
    export default {
        name: "my-nav",
        data() {
            return {
                content: '',
            }
        },
        methods: {
            submit() {
                this.$emit('insert', this.content)
            }
        },
    }
</script>

<style scoped>

</style>