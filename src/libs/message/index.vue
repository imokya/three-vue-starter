<template>
  <div class="message" @click="onClick">
    <div class="message-box" v-if="boxVisible"></div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const boxVisible = ref(true)
const onClick = () => {
  boxVisible.value = !boxVisible.value
}
</script>
<style lang="scss" scoped>
.message {
  &-box {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 0, 0, 0.3);
  }
  width: 100%;
  height: 100%;
  background-color: papayawhip;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
