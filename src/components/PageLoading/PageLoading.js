
import { createApp } from 'vue'
import PageLoading from  './PageLoading.vue'
let typeArr = ['show','hide']
const Loading = (options) => {
    const LoadingApp = createApp(PageLoading)
    operateLoading(LoadingApp,options)
    
}
const operateLoading = (app,options) => {
    if(options.type == 'show'){
        const Frag = new DocumentFragment()
        const vm = app.mount(Frag)
        document.body.appendChild(Frag)
    }else{
        app.unmount()
    }
    
}
typeArr.forEach(type=>{
    Loading[type] = (options) =>{
        console.log(type);
        options.type = type
        return Loading(options)
    }
})
export default Loading
