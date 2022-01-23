<template>
  <div class="ss-btn__inner">
    <button class="ss-btn__button">
      <img
        class="ss-btn__icon"
        :src="require('@/assets/img/' + assetBtn.icon)"
        :alt="assetBtn.title"
        :title="assetBtn.title"
        draggable="false"
      />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    action: {
      type: String,
      required: false,
      default: 'copy',
    },
  },
  data: () => ({
    btnIconsMapper: {
      info: {
        title: 'Info Button',
        icon: 'info-icon.png',
      },
      share: {
        title: 'Share Button',
        icon: 'share-icon.png',
      },
      cut: {
        title: 'Cut Button',
        icon: 'cut-icon.png',
      },
      copy: {
        title: 'Copy Button',
        icon: 'copy-icon.png',
      },
      delete: {
        title: 'Delete Button',
        icon: 'delete-icon.png',
      },
    },
  }),
  computed: {
    assetBtn() {
      const currentAsset = this.btnIconsMapper[this.action]
      const fallbackAsset = {
        title: 'Some Button',
        icon: 'copy-icon.png',
      }

      return currentAsset ? currentAsset : fallbackAsset
    },
  },
}
</script>

<style>
.ss-btn__inner {
  display: flex;
  justify-content: center;
  align-items: center;
}
.ss-btn__button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-radius: 4px;
}
.ss-btn__button:hover {
  background-color: var(--color-blue-hover);
}
.ss-btn__icon {
  width: auto;
  height: 18px;
}
</style>
