<template>
  <div class="tt-card" :style="{backgroundColor: cardColorHandler}"></div>
</template>

<script>
export default {
  props: {
    activity: {
      type: String,
      required: true,
    },
    timeframes: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    colorMapper: {
      Work: 'work',
      Play: 'play',
      Study: 'study',
      Exercise: 'exercise',
      Social: 'social',
      Selfсare: 'self-care',
    },
  }),
  computed: {
    cardColorHandler() {
      const currentCardColor = 'var(--color-' + this.colorMapper[this.activity] + ')'
      // if value this.activity doesn't match with colorMapper
      if (!currentCardColor) {
        const defaultCardColor = 'var(--color-blue-dark)'
        return defaultCardColor
      }
      return currentCardColor
    },
  },
}
</script>

<style>
.tt-card {
  height: 100%;
  width: 100%;
  border-radius: 16px;
}

@media screen and (max-width: 769px) {
  .tt-card {
    min-height: 256px;
  }
}
</style>
