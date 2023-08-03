
import loading from "../demons/loading/loading.vue";
import empty from "../demons/empty/index.vue"
import { h, render, createApp } from "vue"

export default {
    install(app) {
        app.directive("load", load())
        app.directive("empty", setEmpty())
    }
}
// empty指令
function setEmpty(){
    let instance = createApp(empty).mount(document.createElement("div"));
    return{
        created(el){
            console.log(instance)
        },
        updated(el,{value}){
            if(value){
                el.append(instance.$el)
            }else {
                if(el.contains(instance.$el)){
                    el.removeChild(instance.$el)
                }
            }
        }
    }
}
// 加载指令
function load() {
    let vNode = h(loading);
    return {
        updated(el, { value }) {
            if (value) {
                render(vNode, el);
                el.append(vNode.el)
            } else {
                el.removeChild(vNode.el)
            }
        }
    }
}



