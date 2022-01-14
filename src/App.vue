<template>
  <div class="tt-wrapper">
    <profile-card :name="userData.name" :avatar="userData.avatar" />
    <div class="tt-layout">
      <tracking-card
        v-for="activity in trackingData"
        :key="activity.title"
        :activity="activity.title"
        :timeframes="activity.timeframes"
      />
    </div>
  </div>
</template>

<script>
import ProfileCard from '@/components/profile-card.vue'
import TrackingCard from '@/components/tracking-card.vue'
import trackingData from '@/assets/data.js'

export default {
  name: 'App',
  components: {
    ProfileCard,
    TrackingCard,
  },
  data: () => ({
    trackingData,
    userData: {
      name: 'Jeremy Robson',
      avatar: 'img/image-jeremy.png',
    },
  }),
}
</script>

<style>
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
</style>
