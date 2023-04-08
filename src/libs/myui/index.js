import Stars from './components/Stars/Stars.vue'
import Message from './components/Message/Message.vue'
import Magnifier from './components/Magnifier/Magnifier.vue'
import Calender from './components/Calender/Calender.vue'
import GoodMorning from './components/GoodMorning/GoodMorning.vue'
import Loading from './components/Loading/Loading.vue'
import DfHeader from './components/DfHeader/DfHeader.vue'


let MyUi = {}
MyUi.install = function(Vue) {
    Vue.component(Stars.name,Stars)
    Vue.component(Message.name,Message)
    Vue.component(Magnifier.name,Magnifier)
    Vue.component(Calender.name,Calender)
    Vue.component(GoodMorning.name,GoodMorning)
    Vue.component('Loading',Loading)
    Vue.component('DfHeader',DfHeader)
    
}
export default MyUi