<template>
  <div class="wrapper">
    <div class="layout">
      <profile-card />
    </div>
  </div>
</template>

<script>
import ProfileCard from '@/components/profile-card.vue'

export default {
  name: 'App',
  components: {
    ProfileCard,
  },
}
</script>

<style>
.wrapper {
  height: 100vh;
  /* background-color: var(--color-background); */
  background-color: antiquewhite;
  padding: 24vh 8vw;
}
.layout {
  height: 100%;
}
</style>
