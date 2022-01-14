<template>
  <div class="tt-card">
    <h2>{{ activity }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    activity: {
      type: String,
      required: true,
    },
    timeframes: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style>
.tt-card {
  height: 100%;
  width: 100%;
  background-color: var(--color-light-orange);
  border-radius: 16px;
}
</style>
