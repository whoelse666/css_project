<template>
    <div class="loading-demon">
        <div class="content">
            <div class="title">
                <el-button type="primary" @click="search">查询</el-button>
            </div>
            <div class="list" >


                <div class="item" v-empty="!isLoading"  v-load="isLoading">
                   
                </div>



            </div>
        </div>

    </div>
</template>

<script setup>
import loading from "./loading.vue";
import empty from "../empty/index.vue"
import { ref } from "vue";
let isLoading = ref(false);

let search = ()=>{
    isLoading.value = true;
    setTimeout(()=>{
        isLoading.value = false;
    },2000)
}
</script>

<style lang='scss'>
.loading-demon {
    width: 100%;
    height: 100vh;
    display: flex;

    .content {
        margin: auto;
        width: 60vw;
        height: 60vh;
        box-shadow: 0 0 5px #a29e9e;
        display: flex;
        flex-direction: column;
        border-radius: 15px;
        position: relative;
        .title{
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding-right: 20px;
            border-bottom: 1px solid #d5d1d1;
        }
        .list{
            flex: 1;
        }
        .item{
            height: calc(60vh - 50px);
            padding: 50px;
            box-sizing: border-box;
            position: relative;
        }
    }
}
</style>