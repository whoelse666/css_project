<template>
    <div class="confirm" v-if="show">
        <div class="mask"></div>
        <div class="content">
            <div class="title">{{ title }}</div>
            <div class="btn-box">
                <div class="btn" @click="cancel">{{cancelText}}</div>
                <div class="btn" @click="confirm">{{confirmText}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {

    },
    name: "confirm-demo",
    data() {
        return {
            show: false,
            resolve:null,
            reject:null,
            title:"",
            cancelText:"取消",
            confirmText:"确认"
        }
    },
    methods: {
        cancel() {
            this.reject("取消")
            this.show = false
        },
        confirm() {
            this.resolve("确认")
            this.show = false
        }
    }
}
</script>
<style >
.confirm {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

}

.mask {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    /* background-color: rgba(1, 0, 0, 0.102); */
}

.content {
    width: 350px;
    height: 200px;
    background-color: #FFF;
    box-shadow: 0 0 5px #bab6b6;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 6px;
    overflow: hidden;

}

.content .title {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

}

.content .btn-box {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
}

.content .btn-box .btn {
    flex: 1;
    height: 100%;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
}

.content .btn-box .btn:nth-child(1) {
    background-color: #e1e1e1;
}

.content .btn-box .btn:nth-child(2) {
    background-color: #4a99f3;
    color: #FFF;
}
</style>