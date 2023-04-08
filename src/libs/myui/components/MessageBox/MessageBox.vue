<template>
    <Transition name="messageBox-fade">
        <div class="ui-message-box" v-show="visible" @click="cancelBtnClick">
            <div class="ui-message-box-wrap" @click.stop>
                <div class="message-box-title">
                    <h1>{{title}}</h1>
                    <span class="icon-close" @click="cancelBtnClick">x</span>
                </div>
                <div class="message-box-content">
                    <content-view :field="field"></content-view>
                </div>
                <div class="message-box-group">
                    <button class="btn btn-primary" @click="confirmBtnClick">{{ confirmBtnText }}</button>
                    <button class="btn btn-default" @click="cancelBtnClick" v-if="showCancelBtn">{{ cancelBtnText }}</button>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { reactive,toRefs,h } from 'vue';
import { fields } from './messageBox'
const props = defineProps({
    title:{
        type:String,
        default:'Message',
    },
    content:{
        type:String,
        default:'Message Content',
    },
    showCancelBtn:{
        type:Boolean,
        default:false,
    },
    confirmBtnText:{
        type:String,
        default:'Ok',
    },
    cancelBtnText:{
        type:String,
        default:'Cancel',
    },
    field:{
        type:String,
        default:'confirm',
        validator:(value)=>{
            return fields.includes(value)
        }
    }
})
const state = reactive({
    visible:false,
    promptValue:'',
    type:'confirm'
})
const { visible,promptValue } = toRefs(state)
const setVisible = (isVisible) => {
    state.visible = isVisible
}
const confirmBtnClick = ()=>{
    state.type = 'confirm'
    setVisible(false)
}
const cancelBtnClick = ()=>{
    state.type = 'cancel'
    setVisible(false)
}
const ContentView = ({field}) => {
    switch(field){
        case !field||'confirm':
            return h('p',null,props.content)
        case 'prompt':
            return h('input',{
                value:state.promptValue,
                oninput:e=>state.promptValue = e.target.value,
                class:'message-input'
            })
        default:
            return ''
    }
}
defineExpose({
    setVisible,
    state
})
</script>

<style lang="scss" scoped>
.messageBox-fade-enter-from,
.messageBox-fade-leave-to{
    opacity: 0;
}
.messageBox-fade-enter-active{
    transition: opacity .2s ease-in;
}
.messageBox-fade-leave-active{
    transition: opacity .2s ease-out;
}
.ui-message-box{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: .5);
    .ui-message-box-wrap{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 420px;
        height: 150px;
        background-color: #fff;
        border-radius: 3px;
        h1,p{
            margin: 0;
            font-weight: normal;
        }
        .message-box-title{
            padding: 15px 15px 10px;
            h1{
                display: inline-block;
                font-size: 18px;
            }
            .icon-close{
                float: right;
                font-size: 20px;
                color: #999;
            }
        }
        .message-box-content{
            padding: 10px 15px;
            p{
                font-size: 14px;
            }
        }
        .message-box-group{
            position: absolute;
            left: 0;
            bottom: 0;
            padding: 5px 15px 15px;
            width: 100%;
            box-sizing: border-box;
            button{
                float: right;
            }
        }
    }
    .btn{
        border: none;
        outline: none;
        height: 32px;
        border-radius: 3px;
        padding: 8px 15px;
        &.btn-primary{
            background-color: #4093ff;
            color: #fff;
            margin-left: 10px;
        }
        &.btn-default{
            background-color: #fff;
            border: 1px solid #ddd;
        }
    }
    .message-input{
        border: none;
        outline: none;
        width: 100%;
        border: 1px solid #ddd;
        box-sizing: border-box;
        height: 32px;
        line-height: 32px;
    }
}
</style>