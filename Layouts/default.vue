<template>
  <div>
    <NavBar />
    <slot />
    <FootBar />
  </div>
</template>
<script setup lang="ts">
import NavBar from '~/components/NavBar.vue'
import FootBar from '~/components/FootBar.vue'
</script>
