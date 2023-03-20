import Stars from './components/Stars'


let MyUi = {}
MyUi.install = function(Vue) {
    Vue.component(Stars.name,Stars)
}
export default MyUi