<template>
  <div class="tt-card" :style="{backgroundColor: `var(--color-${cardAsset.color})`}">
    <img
      class="tt-card__icon"
      :src="require('@/assets/img/' + cardAsset.icon)"
      alt="Activity Icon"
    />
    <div class="tt-card__data">
      <div class="tt-card__heading">
        <h2 class="tt-card__title">{{ cardAsset.title }}</h2>
        <button class="tt-card__button">
          <svg class="tt-card__button-svg" width="21" height="5" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
              fill="#BBC0FF"
              fill-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div class="tt-card__tracking">
        <h3 class="tt-card__current">{{ timeframes.weekly.current }}</h3>
        <p class="tt-card__previous">Last Week - {{ timeframes.weekly.previous }}</p>
      </div>
    </div>
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
  overflow: hidden;
}

@media screen and (max-width: 769px) {
}
</style>
