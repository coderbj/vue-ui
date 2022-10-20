<template>
  <b-card
    imgSrc="card01.png"
    summary="Next.js+React+Node系统实战，搞定SSR服务器渲染"
  />
  <b-card
    imgSrc="card02.png"
    summary="从实习生到总监 程序员高薪进阶指南"
    :width="367"
    :imgHeight="138"
  >
    <template #footer>
      <div class="footer">
        <div class="level">中级·528人报名</div>
        <div class="price">￥299.00</div>
      </div>
    </template>
  </b-card>
  <b-card
    imgSrc="card03.png"
    :width="367"
    :imgHeight="90"

  >
    从C/C++语法入门到工业级项目实战，通过上万行代码的项目毒打，让你成为职业的C/C++工程师，具备核心竞争力。
    <template #footer>
      <div class="footer-spring">
        <div class="level">4步骤·6门课</div>
        <div class="price">10995收藏</div>
      </div>
    </template>
  </b-card>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
  .level {
    color: #9199A1;
    margin-bottom: 8px;
  }
  .price {
    color: #F01414;
  }
}
.footer-spring {
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 12px;
}
</style>
