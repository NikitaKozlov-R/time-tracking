<template>
  <button class="si-item__button">
    <p class="si-item__title">{{ assetIcon.title }}</p>
    <img
      class="si-item__icon"
      :src="require('@/assets/img/' + assetIcon.icon)"
      :alt="assetIcon.title"
      :title="assetIcon.title"
    />
  </button>
</template>

<script>
export default {
  props: {
    action: {
      type: String,
      required: false,
      default: 'color',
    },
  },
  data: () => ({
    itemAssetsMapper: {
      color: {
        title: 'Choose Color',
        icon: 'icon-palette.svg',
      },
      order: {
        title: 'Reorder Card',
        icon: 'icon-order.svg',
      },
      pin: {
        title: 'Set as Primary',
        icon: 'icon-pin.svg',
      },
    },
  }),
  computed: {
    assetIcon() {
      const currentAsset = this.itemAssetsMapper[this.action]
      const fallbackAsset = {
        title: 'Some Action',
        icon: 'icon-palette.svg',
      }

      return currentAsset ? currentAsset : fallbackAsset
    },
  },
}
</script>

<style>
.si-item__button {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 8px;
  margin-left: -8px;
  margin-top: 8px;
  border-radius: 8px;
  cursor: pointer;
  color: var(--color-blue-text);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.si-item__button:hover {
  background-color: var(--color-blue-hover);
  color: white;
}
.si-item__button:focus {
  background-color: var(--color-blue-hover);
  color: white;
}
.si-item__button:hover .si-item__icon {
  opacity: 1;
}
.si-item__title {
  font-size: 1rem;
}
.si-item__icon {
  width: 24px;
  height: 24px;
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}
</style>
