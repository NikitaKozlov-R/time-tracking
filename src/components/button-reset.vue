<template>
  <div class="button__wrapper">
    <button class="button__self" @click="resetTimeframe()">
      <p class="button__title">{{ title }}</p>
      <div class="button__icon">
        <slot></slot>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: null,
    },
  },
  methods: {
    resetTimeframe() {
      this.$router.push('/time-tracking/')
    },
  },
}
</script>

<style>
.button__wrapper {
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 8px 0;
}
.button__self {
  width: calc(100% + 8px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: var(--color-blue-text);
  padding: 4px 8px;
  margin-left: -8px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  gap: 4px;
}
.button__self:hover {
  color: white;
  background-color: var(--color-blue-hover);
}
.button__self:focus {
  color: white;
  background-color: var(--color-blue-hover);
}
.button__self:hover .button__icon {
  opacity: 1;
}
.button__title {
  font-size: 0.8rem;
}
.button__icon {
  width: 0.8rem;
  height: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  fill: currentColor;
  stroke: currentColor;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  opacity: 0;
}
@media screen and (max-width: 769px) {
  .button__wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 0;
  }
  .button__self {
    width: auto;
    justify-content: left;
  }
  .button__icon {
    opacity: 1;
  }
}
</style>
