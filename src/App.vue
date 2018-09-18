<template>
  <div id="app">
    <vloading v-if="requesting"></vloading>
    <button @click="requestData">发送请求</button>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return{
      requesting: false
    }
  },
  methods: {
    requestData() {
      this.requesting = true;
      setTimeout(()=>{this.requesting = false}, 3000);
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  height: 100%;
  width: 100%;
}
</style>
