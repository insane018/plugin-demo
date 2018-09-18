<template>
  <div class="wrap">
    <i class="iconfont icon-reload"></i>
  </div>
</template>

<style lang="less" scoped>
@keyframes move {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  .icon-reload {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: move 1s linear infinite;
  }
}
</style>

