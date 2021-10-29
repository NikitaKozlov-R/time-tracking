<template>
  <div class="wrapper">
    <div class="layout">
      <profile-card />
    </div>
  </div>
</template>

<script>
import ProfileCard from "@/components/profile-card.vue";

export default {
  name: 'App',
  components: {
    ProfileCard,
 }
}
</script>

<style>
.wrapper {
  height: 100vh;
  background-color: var(--color-background);
  position: relative;
}
.layout {
  height: 50vh;
  margin: 25vh auto;
  background-color: azure;
  position: absolute;
}
</style>
