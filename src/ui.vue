<template>
  <div class="ui">
    {{count}}
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<style lang="scss" scoped>
.ui {
  color: #fff;
  font-size: 20px;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
