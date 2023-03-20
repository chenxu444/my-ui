<template>
    <div class="ui_stars">
        <span v-for="starIndex in num" :key="starIndex"
        :class="['stars iconfont icon-grin-stars',starIndex <= active ? 'active' : '']"
        :style="{fontSize: size +'px'}"
        @click="setStartNum(starIndex)"
        ></span>

        
    </div>
</template>

<script>
import '../iconfont/iconfont.css'
import { useStars } from '../hooks'
import { ref } from 'vue'
export default {
    name:'Stars',
    props:{
        // 星星数量
        num:{
            type:Number,
            default:5
        },
        //默认激活数量
        activeNum:{
            type:Number,
            default:0
        },
        //星星大小
        size:{
            type:Number,
            default:16
        }
    },
    setup(props,ctx){
        // 组件内实现
        /* const active = ref(props.activeNum)
        const setStartNum = (starIndex) =>{
            active.value = starIndex
            ctx.emit('getStarNum',active.value)
        } */
        
        // 通过引入js实现
        const [active,setStartNum] = useStars(props.activeNum, ()=>{
            ctx.emit('getStarNum',active.value)
        })
        return{
            active,
            setStartNum
        }
    }
}
</script>

<style lang="scss" scoped>
.stars{
    font-size: 25px;
    color: #999999;
    pointer-events: painted;
    margin:0 5px;
    &.active{
    color: #FBAB06;
}
}




</style>