<template>
    <div class="box">
        <!-- 幽默的大锤，移动端导航栏 -->
        <div class="menus" :class="{ active }">
            <div class="bar" @click="active = !active">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
            <ul class="content">
                <li :style="`--tm:${i * 0.1}s`" v-for="(item, i) in arr">
                    {{ item }}
                </li>
            </ul>
        </div>

    </div>
</template>
<script setup>
import { ref } from "vue";
let arr = ["首页", "分类", "购物车", "聊天", "我的", "关于"]
let active = ref(false)
</script>
<style lang='scss'>
.box {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
    background-color: #D24D57;
}

.menus {
    height: 600px;
    position: absolute;
    right: 0;

    .bar {
        width: 30px;
        height: 50px;
        margin: 20px;
        position: relative;

        .line {
            width: 100%;
            height: 5px;
            background: linear-gradient(-90deg, #29bdd9 0%, #276ace 100%);
            margin: 5px 0;
            border-radius: 4px;
            transition: all .3s;
        }

        z-index: 2;
    }

    .content {
        width: 300px;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        padding-top: 50px;
        background: rgba(28, 40, 51, 0.9);
        z-index: 1;
        transform: translate(105%);
        transition: all .2s;

        li {
            height: 60px;
            padding-left: 25px;
            color: #FFF;
            transform: translate(100%);
        }
    }
}

.active {
    .bar {
        .line {
            &:nth-child(1) {
                transform: rotate(45deg) translateY(14px);
            }

            &:nth-child(2) {
                transform: translate(100%);
                opacity: 0;
            }

            &:nth-child(3) {
                transform: rotate(-45deg) translateY(-14px);
            }
        }
    }

    .content {
        transform: translate(0);

        li {
            animation: move .5s forwards;
            animation-delay: var(--tm);
        }
    }

    @keyframes move {
        to {
            transform: translate(0);
        }
    }
}
</style>