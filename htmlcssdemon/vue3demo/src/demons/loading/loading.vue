<template>
    <div class="loading">
        <div class="loading-item"></div>
    </div>
</template>
<script setup></script>
<style lang='scss'>
.loading{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    // background-color: rgba(15, 15, 15, 0.4);
    position: absolute;
    top: 0;
    left: 0;
}
.loading-item{
    width: 50px;
    height: 50px;
    border: 5px solid #d4d2d2;
    border-top-color: red;
    animation: rotate linear 1s infinite;
    border-radius: 50%;
}
@keyframes rotate{
    to{
        transform: rotate(360deg);
    }
}
</style>