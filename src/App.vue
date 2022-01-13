<template>
  <div class="tt-wrapper">
    <profile-card />
    <div class="tt-layout">
      <work-card />
      <play-card />
      <study-card />
      <exercise-card />
      <social-card />
      <self-care-card />
    </div>
  </div>
</template>

<script>
import ProfileCard from '@/components/profile-card.vue'
import WorkCard from '@/components/work-card.vue'
import PlayCard from '@/components/play-card.vue'
import StudyCard from '@/components/study-card.vue'

export default {
  name: 'App',
  components: {
    ProfileCard,
    WorkCard,
    PlayCard,
    StudyCard,
  },
}
</script>

<style>
.tt-wrapper {
  height: 100vh;
  background-color: var(--color-background);
  padding: 24vh 8vw;
  display: grid;
  grid-template-columns: 0.5fr 1.5fr;
  grid-template-rows: 1fr;
  gap: 0px 16px;
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
  gap: 16px 16px;
  grid-template-areas:
    '. . .'
    '. . .';
  justify-items: center;
  align-items: start;
}
</style>
