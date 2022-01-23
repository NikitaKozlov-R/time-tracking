<template>
  <div class="tt-slide">
    <div class="tt-slide__top-bar">
      <div class="tt-slide__tools">
        <slide-small-button action="info" />
        <slide-small-button action="share" />
        <slide-small-button action="cut" />
        <slide-small-button action="copy" />
        <slide-small-button action="delete" />
      </div>
      <div class="tt-slide__close">
        <button class="tt-slide__close-btn" @click="$emit('openMenu')">
          <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8129 8.99982L16.3415 3.48411C16.5836 3.242 16.7196 2.91364 16.7196 2.57125C16.7196 2.22886 16.5836 1.9005 16.3415 1.65839C16.0994 1.41629 15.771 1.28027 15.4286 1.28027C15.0862 1.28027 14.7579 1.41629 14.5158 1.65839L9.00006 7.18696L3.48435 1.65839C3.24224 1.41629 2.91388 1.28027 2.57149 1.28027C2.2291 1.28027 1.90074 1.41629 1.65863 1.65839C1.41653 1.9005 1.28051 2.22886 1.28051 2.57125C1.28051 2.91364 1.41653 3.242 1.65863 3.48411L7.1872 8.99982L1.65863 14.5155C1.53812 14.6351 1.44247 14.7773 1.3772 14.9339C1.31193 15.0906 1.27832 15.2587 1.27832 15.4284C1.27832 15.5981 1.31193 15.7662 1.3772 15.9228C1.44247 16.0795 1.53812 16.2217 1.65863 16.3412C1.77816 16.4618 1.92036 16.5574 2.07703 16.6227C2.23371 16.688 2.40176 16.7216 2.57149 16.7216C2.74122 16.7216 2.90927 16.688 3.06595 16.6227C3.22262 16.5574 3.36482 16.4618 3.48435 16.3412L9.00006 10.8127L14.5158 16.3412C14.6353 16.4618 14.7775 16.5574 14.9342 16.6227C15.0909 16.688 15.2589 16.7216 15.4286 16.7216C15.5984 16.7216 15.7664 16.688 15.9231 16.6227C16.0798 16.5574 16.222 16.4618 16.3415 16.3412C16.462 16.2217 16.5576 16.0795 16.6229 15.9228C16.6882 15.7662 16.7218 15.5981 16.7218 15.4284C16.7218 15.2587 16.6882 15.0906 16.6229 14.9339C16.5576 14.7773 16.462 14.6351 16.3415 14.5155L10.8129 8.99982Z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="tt-slide__list">
      <slide-menu-item action="color" />
      <slide-menu-item action="order" />
      <slide-menu-item action="pin" />
    </div>
  </div>
</template>

<script>
import SlideSmallButton from '@/components/slide-small-button.vue'
import SlideMenuItem from '@/components/slide-menu-item.vue'

export default {
  components: {
    SlideSmallButton,
    SlideMenuItem,
  },
}
</script>

<style>
.tt-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: var(--color-blue-dark);
  border-radius: 16px;
  padding: 24px;
}
.tt-slide__top-bar {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 2px groove var(--color-blue-text);
}
.tt-slide__tools {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  gap: 8px;
}
.tt-slide__close {
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tt-slide__close-btn {
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  fill: currentColor;
  color: var(--color-blue-text);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
}
.tt-slide__close-btn:hover {
  transform: scale(1.2);
  color: white;
}
.tt-slide__close-btn:focus {
  transform: rotate(-180deg);
  color: white;
}
.tt-slide__list {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
