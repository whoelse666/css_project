import Vue from "vue";
import confirmDemoVue from "./confirm-demo.vue";

function confirm({title,cancelText,confirmText}) {
    return new Promise((resolve, reject) => {
        let confirmInstance = Vue.extend(confirmDemoVue);
        let confirmEl = new confirmInstance({
            el: document.createElement("div")
        })
        document.body.appendChild(confirmEl.$el)
        confirmEl.show = true
        confirmEl.resolve = resolve
        confirmEl.reject = reject
        confirmEl.title = title
        confirmEl.cancelText = cancelText
        confirmEl.confirmText = confirmText
    })
}
export default confirm