<template>
  <div class="b-card" :style="width ? {width:width+'px'} : {}">
    <div class="b-card-img" :style="imgHeight? {height:imgHeight +'px'}:{}">
      <img :src="imgSrc" alt="img">
    </div>
    <div v-if="summary" class="b-card-summary">
      {{ summary }}
    </div>
    <div v-else class="b-card-summary">
      <slot></slot>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'b-card'
})
defineProps({
  width: { // 卡片宽度
    type: Number,
    default: 0,
  },
  imgSrc: { // 卡片图片资源地址
    required:true,
    type: String,
    default: '',
  },
  imgHeight: { // 卡片图片高度
    type: Number,
    default: 0,
  },
  summary: { // 卡片概要
    type: String,
    default: '',
  }

})

</script>

<style scoped lang="scss">

</style>
