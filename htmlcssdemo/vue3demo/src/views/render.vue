<template>
    <div class="render">


        <div class="content" ref="content">
            <span>状态:</span>
        </div>


    </div>
</template>
<script setup>
import { render, h, ref } from "vue";

let content = ref("");//父节点
let status = ref("");//状态

// 模拟请求
function getData() {
    setTimeout(() => {
        // 状态修改
        status.value = 'success';
        // 状态类型
        let statusStr = new Map([["error", "失败"], ["success", "成功"], ["wait", "等待"], ["timeout", "超时"]]);

        let El = h("span", { class: status.value, innerText: statusStr.get(status.value) });
        render(El, content.value)

    }, 1000)
}
getData()


</script>
<style lang='scss'>
.render {
    width: 100;
    height: 100vh;
    overflow: hidden;
    background-color: #0d1017;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
}

span {
    color: #FFf;
    font-size: 18px;
    margin: 0 5px;
}

.error {
    color: red;
}

.success {
    color: greenyellow
}

.timeout {
    color: wheat;
}

.wait {
    color: #779cf3;
}
</style>