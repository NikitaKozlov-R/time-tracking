<template>
  <div class="tt-card" :style="{backgroundColor: `var(--color-${cardAsset.color})`}"></div>
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
      work: {
        title: 'Work',
        color: 'work',
        icon: 'icon-work.svg',
      },
      play: {
        title: 'Play',
        color: 'play',
        icon: 'icon-play.svg',
      },
      study: {
        title: 'Study',
        color: 'study',
        icon: 'icon-study.svg',
      },
      exercise: {
        title: 'Exercise',
        color: 'exercise',
        icon: 'icon-exercise.svg',
      },
      social: {
        title: 'Social',
        color: 'social',
        icon: 'icon-social.svg',
      },
      selfсare: {
        title: 'Self Care',
        color: 'self-care',
        icon: 'icon-self-care.svg',
      },
    },
  }),
  computed: {
    cardAsset() {
      const currentAsset = this.assetsMapper[this.activity]
      const fallbackAsset = {
        title: 'Some Activity',
        color: 'blue-dark',
        icon: 'icon-work.svg',
      }

      return currentAsset ? currentAsset : fallbackAsset
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
