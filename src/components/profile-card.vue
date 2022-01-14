<template>
  <div class="tt-profile">
    <div class="tt-profile__user">
      <div class="tt-profile__avatar">
        <img class="tt-profile__image" :src="require('@/assets/' + avatar)" alt="User avatar" />
      </div>
      <div class="tt-profile__heading">
        <p class="tt-profile__title">Report for</p>
        <p class="tt-profile__name">{{ name }}</p>
      </div>
    </div>
    <div class="tt-rofile__timeline">
      <button class="tt-profile__button">Daily</button>
      <button class="tt-profile__button active">Weekly</button>
      <button class="tt-profile__button">Monthly</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: false,
      default: 'img/image-jeremy.png',
    },
  },
}
</script>

<style>
.tt-profile {
  height: 100%;
  width: 100%;
  background-color: var(--color-blue-dark);
  border-radius: 16px;
  padding: 24px;
}
</style>
