<template>
    <Transition name="message-fade">
        <div :class="styleClass" :style="{top:initTop+'px'}" v-show="visible">{{ message }}</div>
    </Transition>
</template>

<script>
import {types} from './MessageType'
import { computed,ref,toRefs,reactive } from 'vue'
export default {
    name: 'Message',
    props:{
        type:{
            type:String,
            default:types.MESSAGE,
            validator(val){
                return Object.values(types).includes(val) //仅支持默认4种个格式
            }
        },
        message:{
            type:String,
            default:types.MESSAGE
        },
       
    },
    setup(props,{expose}) {
        const styleClass = computed({
            get:() => ['cx-message',props.type]
        })
        const setTop = (top) => {
            initTop.value = top
            return initTop
        }
        let visible = ref(false)
        let initTop = ref(0)
        expose({
            margin:20,
            setTop,
            height:40,
            visible

        })
        return{
            visible,
            initTop,
            styleClass,
        }
    }
}


</script>

<style lang="scss" scoped>
.cx-message{
    position: fixed;
    left: 50%;
    width: 380px;
    top: 20px;
    margin-left: -190px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    text-align: center;
    z-index: 999;
    border-radius: 5px;
    transition: top .3s ease-out;
    &.warning{
        background-color: #fdf6ec;
        color: #b88230;
    }
    &.message{
        background-color: #f4f4f5;
        color: #73767a;
    }
    &.success{
        background-color: #f0f9eb;
        color: #529b2e;
    }
    &.error{
        background-color: #fef0f0;
        color: #c45656;
    }
}
.message-fade-enter-active{
    transition: all .3s ease-in;
}
.message-fade-leave-active{
    transition: all .3s ease-out;
}
.message-fade-enter-from,
.message-fade-leave-to{
    transform: translateY(-30px);
    opacity: 0;
}
</style>