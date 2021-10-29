<template>
  <div class="wrapper">
    <profile-card />
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
}
</style>
