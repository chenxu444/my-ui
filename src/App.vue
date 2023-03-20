<template>
<stars :num=num :size=size :activeNum=activeNum @getStarNum ='getStarNum'/>
</template>

<script>
import { reactive,toRefs } from 'vue';

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
            ...toRefs(starsObj)
        }
    }
}
</script>
<style scoped>

</style>
