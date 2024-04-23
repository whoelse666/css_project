<template>
    <div class="canvas-box">

        <canvas ref="can" id="canvas"></canvas>
    </div>
</template>
<script setup>
import { nextTick, ref } from 'vue';
const can = ref("");

let ctx = null;
nextTick(() => {
    can.value.width = window.innerWidth;
    can.value.height = window.innerHeight;
    ctx = can.value.getContext("2d")
    ctx.fillStyle = "red"
    ctx.fillRect(0, 0, can.width, can.height)
    animate()
})
const m = {
    x: can.width / 2,
    y: can.height / 2
}
const arry = []

function init() {
    for (let i = 0; i < 40; i++) {
        arry.push(new item(can.width, can.height))
    }
}
init()
function item(x, y) {
    // 位置
    this.x = x;
    this.y = y;

    this.angle = Math.PI * 2 * Math.random();
    this.radius = Math.random() * 180;
    this.color = `hsl(${Math.random() * 360},50%,50%)`
    // 绘画
    this.draw = function () {
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.moveTo(this.x, this.y);
        this.angle += 0.08
        this.x = m.x + Math.cos(this.angle) * this.radius;
        this.y = m.y + Math.sin(this.angle) * this.radius;
        ctx.lineTo(this.x, this.y);
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.closePath()
    }
}


function animate() {
    requestAnimationFrame(animate)
    ctx.fillStyle = "rgba(0,0,0,0.05)"
    console.log(ctx)
    ctx.fillRect(0, 0, can.value.width, can.value.height)
    arry.forEach(item => {
        item.draw()
    })
}


window.onmousemove = function (e) {
    m.x = e.clientX;
    m.y = e.clientY
}

</script>
<style lang='scss'>
#canvas{
    background-color: #000;
}
</style>