import { createApp, ref, watch } from 'vue'
import MessageComponent from './Message.vue'
import {types} from './MessageType'

const messageArr = ref([])
const Message = (options) => {
    const MessageApp = createApp(MessageComponent,options)
    showMessage(MessageApp,options.duration)
}

Object.values(types).forEach(type => {
    Message[type] = (options) => {
        options.type = type
        return Message(options)
    }
})

function showMessage(app,duration){
    let oFrag = document.createDocumentFragment()
    const vm = app.mount(oFrag)
    messageArr.value.push(vm)
    document.body.appendChild(oFrag)
    setTop(vm)
    vm.visible = true
    watch(messageArr,()=>{
        setTop(vm)
    })
    hideMessage(app,duration,vm,()=>{
        return new Promise(resolve=>{
            let timer1 = setTimeout(() => {
                app.unmount()
                messageArr.value = messageArr.value.filter(item => item !== vm)
                resolve()
                clearTimeout(timer1)
                timer1 = null
            }, 300);
        })
    })
}
function hideMessage  (app,duration,vm,callback){
    let timer2 = setTimeout(() => {
        vm.visible = false
        callback()
        clearTimeout(timer2)
        timer2 = null
    }, duration || 3000);
}

function setTop(vm){
    const {setTop,height,margin} = vm
    const currentIndex = messageArr.value.findIndex( item => item == vm)
    setTop(margin * (currentIndex+1) + height * currentIndex)

}
export default Message
export {types}

 