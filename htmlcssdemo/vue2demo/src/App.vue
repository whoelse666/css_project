<template>
  <div id="app">

    <!-- <button @click="show">点击</button> -->

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  methods: {
    show() {
     this.$confirm({
      title:"提示内容",
      cancelText:"拒绝",
      confirmText:"同意"
     })
     .then(()=>{
      alert("点击了确认")
     })
     .catch(()=>{
      alert("点击了取消")
     })
    }
  }
}
</script>

<style>
#app{

  display: flex;
}
button {
  width: 100px;
  height: 60px;
  cursor: pointer;
  margin: auto;
}
</style>
