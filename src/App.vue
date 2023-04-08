<template>
    <div>
        <!-- <button @click="showMessage">自定义</button>
        <button @click="showConfirmMessage">confirm</button>
        <button @click="showPromptMessage">prompt</button>
        <Stars :num="num" :size="size" :activeNum="activeNum" @getStarNum="getStarNum"></Stars>
        <button @click="Message.success({
            message: 'this is message success'
        })">success</button>
        <div class="wrap">
            <magnifier :imgUrl="imgUrl" :link="link" :blank="blank" :imgWidth="imgWidth" :imgHeight="imgHeight"
                :magWidth="magWidth" :magHeight="magHeight" :imgAlt="imgAlt" />
        </div> -->
        <RouterView></RouterView>
    </div>
</template>

<script>
import { reactive, toRefs, ref, onMounted } from 'vue';
import Message, { types } from "./libs/myui/components/Message/message";
import MyMessageBox from './libs/myui/components/MessageBox/messageBox'
export default {
    setup() {
        // 好评组件
        const starsObj = reactive({
            num: 6,
            size: 30,
            activeNum: 6
        })
        const getStarNum = (num) => {
            console.log(num);
        }
        //
        // 放大镜
        const magnifier = reactive({
            imgUrl: 'https://img.tukuppt.com/photo-big/00/00/94/6152bc0ce6e5d805.jpg',
            imgAlt:'放大镜',
            blank: false,
            link: 'https://www.baidu.com',
            imgHeight:500,
            imgWidth:375,
            magWidth:100,
            magHeight:100
        })
        const showMessage = () => {
            MyMessageBox({
                confirmBtnText:'确定',
                title:'MessageBox',
                content:'this is content'
            }).then(res=>{
                console.log('resolve' + res);
            }).catch(res=>{
                console.log('reject' + res);
            })
        }
        const showConfirmMessage = () => {
            MyMessageBox.confirm({
                showCancelBtn:true,
                cancelBtnText:'取消',
                title:'MyMessageBox.confirm',
                content:'MyMessageBox.confirm'
            }).then(res=>{
                console.log('resolve confirm'+ res);
            }).catch(res=>{
                console.log('reject confirm'+ res);
            })
        }
        const showPromptMessage = () => {
            MyMessageBox.prompt({
                showCancelBtn:true,
                confirmBtnText:'确定',
                showCancelBtn:true,
                cancelBtnText:'取消',
                title:'prompt',
                content:'prompt........'
            }).then(res=>{
                console.log('resolve prompt' + res);
            }).catch(res=>{
                console.log('reject prompt'+ res);
            })
        }
        return {
            getStarNum,
            ...toRefs(starsObj),
            ...toRefs(magnifier),
            Message,
            types,
            showPromptMessage,
            showConfirmMessage,
            showMessage
        }
    }
}
</script>
<style>
html,body{
    position: relative;
    width: 100vw;
}
#app{
}
.wrap {
    width: 375px;
    margin: 0 auto;
}
#app{
    width: 100%;
    height: 100%;
}
</style>
