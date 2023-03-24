import Stars from './components/Stars'
import Message from './components/Message'


let MyUi = {}
MyUi.install = function(Vue) {
    Vue.component(Stars.name,Stars)
    Vue.component(Message.name,Message)
}
export default MyUi