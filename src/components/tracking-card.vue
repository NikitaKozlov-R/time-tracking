<template>
  <div class="tt-card" :style="{backgroundColor: `var(--color-${cardColorHandler})`}"></div>
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
      const currentCardColor = this.assetsMapper[this.activity].color
      // if value this.activity doesn't match with assetsMapper
      if (!currentCardColor) {
        const defaultCardColor = 'var(--color-blue-dark)'
        return defaultCardColor
      }
      return currentCardColor
    },
    cardIconHandler() {
      const currentCardIcon = this.assetsMapper[this.activity].icon
      // if value this.activity.icon doesn't match with assetsMapper
      if (!currentCardIcon) {
        const defaultCardIcon = 'icon-play.svg'
        return defaultCardIcon
      }
      return currentCardIcon
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
