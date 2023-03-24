<template>
<div>
    <button @click="Message.success({
        message:'this is message success'
    })">success</button>
    <button @click="Message({
        message:'this is message warning'
    })">warning</button>
    <button @click="Message({
        type:types.MESSAGE,
        message:'this is message FAIL'
    })">fail</button>
    <button @click="Message({
        type:types.ERROR,
        message:'this is message ERROR'
    })">error</button>
</div>
</template>

<script>
import { reactive,toRefs,ref,onMounted } from 'vue';
import Message,{types}  from "./libs/myui/hooks/message";
export default{
    setup(){
        // 好评组件
        const starsObj = reactive({
            num:6,
            size:30,
            activeNum:6
        })
        const getStarNum = (num) => {
            console.log(num);
        }
        return{
            getStarNum, 
            ...toRefs(starsObj),
            Message,
            types
        }
    }
}
</script>
<style scoped>
html,body{
    margin: 0 !important;
    padding: 0 !important;
}
</style>
