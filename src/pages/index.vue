<template>
    <div>
        <!-- <df-header></df-header> -->
        <button @click="showLoading">toggle</button>
    </div>
</template>

<script setup>
import { getCurrentInstance } from 'vue';
const showLoading = () => {
    appContext.config.globalProperties.$PageLoading({
        type:'show',
    })
}
const {appContext} = getCurrentInstance()

</script>

<style lang="scss" scoped>

</style>