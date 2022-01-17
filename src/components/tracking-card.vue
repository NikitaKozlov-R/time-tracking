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
    assetsMapper: {
      Work: {
        color: 'work',
        icon: 'icon-work.svg',
      },
      Play: {
        color: 'play',
        icon: 'icon-play.svg',
      },
      Study: {
        color: 'study',
        icon: 'icon-study.svg',
      },
      Exercise: {
        color: 'exercise',
        icon: 'icon-exercise.svg',
      },
      Social: {
        color: 'social',
        icon: 'icon-social.svg',
      },
      Selfсare: {
        color: 'self-care',
        icon: 'icon-self-care.svg',
      },
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
