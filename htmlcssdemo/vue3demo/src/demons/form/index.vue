<template>
    <div class="cotain">
        <div class="form-box">

            <section class="title">
                <div>注册</div>
                <div>请如实填写信息</div>
            </section>
            <div class="input-box">
                <transition-group name="up">
                    <input v-if="steps == 1" placeholder="请输入邮箱" type="text">
                    <input v-if="steps == 2" placeholder="请输入昵称" type="text">
                    <input v-if="steps == 3" placeholder="请输入密码" type="password">
                    <input v-if="steps == 4" placeholder="请再次输入密码" type="password">
                    <p v-if="steps == 5">提交成功</p>
                </transition-group>


                <button @click="steps++">下一步</button>
            </div>

        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
const steps = ref(1)
</script>
<style lang='scss'>
.cotain {
    height: 100vh;
    overflow: hidden;
    background-color: aquamarine;
}

.form-box {
    margin: 100px auto;
    width: 500px;
    height: 200px;
    background-color: #FFF;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);

    .title {
        height: 100px;
        font-size: 23px;
        font-weight: 900;
        padding: 20px;
        box-sizing: border-box;

        div {
            &:nth-child(2) {
                font-size: 15px;
                color: #9facb6;
            }

        }
    }

    .input-box {
        width: 100%;
        height: 100px;
        overflow: hidden;
        position: relative;

        input {
            border: none;
            outline: none;
            background-color: #F3F3F3;
            height: 100%;
            width: 80%;
            padding: 0 30px;
            box-sizing: border-box;
            font-size: 20px;
            position: absolute;
            left: 0;
        }

        button {
            outline: none;
            border: none;
            height: 100%;
            width: 20%;
            background-color: #8f8fdb;
            color: #FFF;
            font-size: 18px;
            font-weight: 900;
            cursor: pointer;
            position: absolute;
            right: 0;
        }
        p{
            position: absolute;
            left: 0;
            width: 80%;
            height: 100%;
            background-color: rgb(9,277,9);
            text-align: center;
            color: #FFF;
            font-size: 23px;
            font-weight: 900;
            line-height: 100px;
        }
    }

    .up-enter-from {
        transform: translateY(100px);
    }

    .up-leave-to {
        transform: translateY(-100px);
    }

    .up-enter-active,
    .up-leave-active {
        transition: all .5s;
    }

    .up-from,
    .up-to {
        transform: translateY(0);
    }


}</style>