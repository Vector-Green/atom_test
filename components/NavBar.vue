<template>
  <nav>
    <div class="logo">
      <img class="logo__first" loading="lazy" :src="logoSvg" />
    </div>
  </nav>
</template>
<style lang="scss" scoped>
nav {
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 13px 16px;
  box-sizing: border-box;
  .logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 26px;
    &__first {
      height: 26px;
    }
  }
}
</style>
<script setup lang="ts">
import logoSvg from '~/assets/atom-logo.svg'
</script>
