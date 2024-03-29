<template>
  <div class="tt-card" :style="{backgroundColor: `var(--color-${cardAsset.color})`}">
    <div class="tt-card__icon-box">
      <img
        class="tt-card__icon"
        :src="require('@/assets/img/' + cardAsset.icon)"
        alt="Activity Icon"
      />
    </div>
    <transition name="mode-fade" mode="out-in" appear>
      <div v-if="isMenuHidden" class="tt-card__text-box">
        <div class="tt-card__heading">
          <h2 class="tt-card__title">{{ cardAsset.title }}</h2>
          <button class="tt-card__button" @click="openMenu()">
            <svg class="tt-card__button-svg" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                fill-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div class="tt-card__tracking">
          <h3 class="tt-card__current">{{ timeframeHours.current }}hrs</h3>
          <p class="tt-card__previous">
            Last {{ currentSubtitle }} - {{ timeframeHours.previous }}
          </p>
        </div>
      </div>
      <slide-menu v-else @openMenu="openMenu()" />
    </transition>
  </div>
</template>

<script>
import SlideMenu from '@/components/slide-menu.vue'

export default {
  components: {
    SlideMenu,
  },
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
    timeframeNamingMapper: {
      daily: 'Day',
      weekly: 'Week',
      monthly: 'Month',
    },
    isMenuHidden: true,
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
    timeframeHours() {
      const currentHours = this.timeframes[this.$route.params.timeframe]
      const fallbackHours = {
        current: 0,
        previous: 'Error',
      }

      return currentHours ? currentHours : fallbackHours
    },
    currentSubtitle() {
      return this.timeframeNamingMapper[this.$route.params.timeframe]
    },
  },
  methods: {
    openMenu() {
      this.isMenuHidden = !this.isMenuHidden
    },
  },
}
</script>

<style>
.mode-fade-enter-active,
.mode-fade-leave-active {
  transition: opacity 0.2s ease;
}

.mode-fade-enter-from,
.mode-fade-leave-to {
  opacity: 0;
}
.tt-card {
  position: relative;
  z-index: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
}
.tt-card__icon-box {
  position: relative;
  height: 56px;
  width: 100%;
  overflow: hidden;
}
.tt-card__icon {
  position: absolute;
  z-index: 1;
  right: 24px;
  top: -8px;
}
.tt-card__text-box {
  z-index: 2;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--color-blue-dark);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  border-radius: 16px;
  padding: 24px;
}
.tt-card__text-box:hover {
  background-color: var(--color-blue-hover);
}
.tt-card__heading {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tt-card__title {
  font-size: 1rem;
  color: white;
}
.tt-card__button {
  width: 32px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-blue-text);
  fill: currentColor;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.tt-card__button:hover {
  transform: scale(1.2);
  color: white;
}
.tt-card__button:focus {
  transform: scale(1.2);
  color: white;
}
.tt-card__button-svg {
  width: 21px;
  height: 5px;
}

@media screen and (max-width: 769px) {
  .tt-card__text-box {
    width: calc(100% + 2px);
    margin-left: -1px;
    margin-bottom: -1px;
  }
}

.tt-card__tracking {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.tt-card__current {
  font-size: 4rem;
  color: white;
  font-weight: 300;
}
.tt-card__previous {
  font-size: 0.8rem;
  color: var(--color-blue-text);
}

@media screen and (max-width: 769px) {
  .tt-card__tracking {
    margin-top: 16px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
  .tt-card__current {
    font-size: 1.8rem;
    line-height: 90%;
  }
}
</style>
