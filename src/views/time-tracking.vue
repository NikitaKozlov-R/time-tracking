<template>
  <div class="tt-wrapper">
    <profile-card :name="userData[0].name" :avatar="userData[0].avatar" />
    <transition name="mode-fade" mode="out-in" appear>
      <div v-if="$route.params.timeframe" class="tt-layout">
        <tracking-card
          v-for="activity in timeframesData"
          :key="activity.title"
          :activity="activity.title"
          :timeframes="activity.timeframes"
        />
      </div>
      <div v-else class="tt-baner">
        <lottie-player
          class="tt-baner__player"
          src="https://assets7.lottiefiles.com/packages/lf20_5er3kigb.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
        <h1 class="tt-baner__heading">
          Please select
          <br />
          a time period
        </h1>
      </div>
    </transition>
  </div>
</template>

<script>
import ProfileCard from '@/components/profile-card.vue'
import TrackingCard from '@/components/tracking-card.vue'
import timeframesData from '@/assets/dataMappers/timeframes.js'
import userData from '@/assets/dataMappers/users.js'

export default {
  name: 'App',
  components: {
    ProfileCard,
    TrackingCard,
  },
  data: () => ({
    timeframesData,
    userData,
  }),
}
</script>

<style>
.mode-fade-enter-active,
.mode-fade-leave-active {
  transition: opacity 0.4s ease;
}

.mode-fade-enter-from,
.mode-fade-leave-to {
  opacity: 0;
}
.tt-wrapper {
  height: 100vh;
  background-color: var(--color-background);
  padding: 16vh 8vw;
  display: grid;
  grid-template-columns: 0.5fr 1.5fr;
  grid-template-rows: 1fr;
  gap: 0px 24px;
  grid-auto-flow: row dense;
  justify-items: center;
  align-items: start;
  grid-template-areas: '. .';
}
.tt-layout {
  height: 100%;
  width: 100%;
  display: grid;
  grid-auto-flow: row dense;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 24px 24px;
  grid-template-areas:
    '. . .'
    '. . .';
  justify-items: center;
  align-items: start;
}
.tt-baner {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-blue-dark);
  border-radius: 16px;
  padding: 16px;
}
.tt-baner__heading {
  font-size: 2.4rem;
  color: var(--color-blue-text);
  margin-left: 16px;
}
.tt-baner__player {
  width: 112px;
  height: 112px;
}

@media screen and (max-width: 769px) {
  .tt-wrapper {
    height: auto;
    min-height: 100vh;
    padding: 64px 16px;
    display: flex;
    flex-direction: column;
    gap: 16px 0;
  }
  .tt-layout {
    display: flex;
    flex-direction: column;
    gap: 16px 0;
  }
  .tt-baner__heading {
    font-size: 1.4rem;
    margin-left: 8px;
  }
  .tt-baner__player {
    width: 64px;
    height: 64px;
  }
}
</style>
