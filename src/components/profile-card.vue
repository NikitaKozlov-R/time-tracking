<template>
  <div class="tt-profile">
    <div class="tt-profile__user">
      <div class="tt-profile__inner">
        <div class="tt-profile__avatar">
          <img
            class="tt-profile__image"
            draggable="false"
            :src="require('@/assets/' + avatar)"
            alt="User avatar"
          />
        </div>
        <div class="tt-profile__heading">
          <p class="tt-profile__title">Report for</p>
          <p class="tt-profile__name">{{ name }}</p>
        </div>
      </div>
      <button-reset v-if="$route.params.timeframe" title="Reset Time Period">
        <svg viewBox="0 0 22 21" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.40971 0.554197C6.60448 0.749033 6.7139 1.01325 6.7139 1.28875C6.7139 1.56425 6.60448 1.82847 6.40971 2.0233L4.54683 3.88618H12.6882C14.3321 3.88618 15.9391 4.37366 17.306 5.28697C18.6729 6.20028 19.7382 7.4984 20.3673 9.01718C20.9964 10.536 21.161 12.2072 20.8403 13.8195C20.5196 15.4318 19.728 16.9129 18.5655 18.0753C17.4031 19.2377 15.9221 20.0293 14.3098 20.35C12.6974 20.6707 11.0262 20.5061 9.50744 19.877C7.98866 19.2479 6.69054 18.1826 5.77723 16.8157C4.86392 15.4489 4.37644 13.8419 4.37644 12.198C4.37644 11.9224 4.4859 11.6581 4.68075 11.4633C4.87559 11.2685 5.13986 11.159 5.41541 11.159C5.69096 11.159 5.95523 11.2685 6.15007 11.4633C6.34492 11.6581 6.45438 11.9224 6.45438 12.198C6.45438 13.4309 6.81999 14.6361 7.50497 15.6613C8.18996 16.6864 9.16355 17.4854 10.3026 17.9573C11.4417 18.4291 12.6951 18.5525 13.9044 18.312C15.1136 18.0715 16.2244 17.4778 17.0962 16.6059C17.968 15.7341 18.5617 14.6234 18.8023 13.4141C19.0428 12.2049 18.9194 10.9515 18.4475 9.81238C17.9757 8.67329 17.1767 7.6997 16.1516 7.01472C15.1264 6.32973 13.9212 5.96413 12.6882 5.96413H4.54683L6.40971 7.827C6.59896 8.02296 6.70369 8.2854 6.70132 8.55782C6.69895 8.83023 6.58968 9.09082 6.39705 9.28345C6.20442 9.47609 5.94383 9.58536 5.67141 9.58772C5.399 9.59009 5.13655 9.48537 4.9406 9.29611L1.3042 5.65971C1.10942 5.46487 1 5.20065 1 4.92515C1 4.64966 1.10942 4.38544 1.3042 4.1906L4.9406 0.554197C5.13544 0.35942 5.39966 0.25 5.67515 0.25C5.95065 0.25 6.21487 0.35942 6.40971 0.554197Z"
            stroke-width="0.4"
          />
        </svg>
      </button-reset>
    </div>
    <div class="tt-rofile__timeframes">
      <router-link class="tt-profile__button" to="/time-tracking/daily" active-class="active">
        Daily
        <img class="tt-profile__button--icon" src="@/assets/img/arrow-right.png" alt="Arrow icon" />
      </router-link>
      <router-link class="tt-profile__button" to="/time-tracking/weekly" active-class="active">
        Weekly
        <img class="tt-profile__button--icon" src="@/assets/img/arrow-right.png" alt="Arrow icon" />
      </router-link>
      <router-link class="tt-profile__button" to="/time-tracking/monthly" active-class="active">
        Monthly
        <img class="tt-profile__button--icon" src="@/assets/img/arrow-right.png" alt="Arrow icon" />
      </router-link>
    </div>
  </div>
</template>

<script>
import ButtonReset from '@/components/button-reset.vue'

export default {
  components: {
    ButtonReset,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: false,
      default: 'img/image-elen.jpg',
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
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1.4fr 0.6fr;
  gap: 0px 0px;
  grid-template-areas:
    '.'
    '.';
  justify-items: center;
  align-items: start;
}
.tt-profile__user {
  width: 100%;
  height: 100%;
  background-color: var(--color-primary);
  padding: 48px 24px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.tt-profile__avatar {
  background-color: white;
  height: 84px;
  width: 84px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
}
.tt-profile__image {
  width: 80px;
  height: 80px;
  border-radius: 100%;
}

@media screen and (max-width: 769px) {
  .tt-profile {
    display: flex;
    flex-direction: column;
  }
  .tt-profile__user {
    display: flex;
    flex-direction: column;
    padding: 32px 24px;
    align-items: center;
    justify-content: center;
  }
  .tt-profile__inner {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }
  .tt-profile__avatar {
    margin-right: 16px;
    width: 94px;
    height: 68px;
  }
  .tt-profile__image {
    width: 64px;
    height: 64px;
  }
}

.tt-profile__heading {
  width: 100%;
  margin-top: 32px;
}
.tt-profile__title {
  font-size: 0.8rem;
  color: var(--color-blue-text);
}
.tt-profile__name {
  color: white;
  font-size: 2.4rem;
}
.tt-profile__submenu {
  width: 100%;
}

@media screen and (max-width: 769px) {
  .tt-profile__heading {
    margin-top: 0px;
  }
  .tt-profile__name {
    font-size: 1.4rem;
  }
}

.tt-rofile__timeframes {
  width: 100%;
  height: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.tt-profile__button {
  font-size: 1rem;
  color: var(--color-blue-text);
  cursor: pointer;
  border-radius: 8px;
  padding: 4px 8px;
  margin-left: -8px;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.tt-profile__button.active {
  color: white;
}
.tt-profile__button:hover {
  background-color: var(--color-blue-hover);
  color: white;
}
.tt-profile__button:focus {
  background-color: var(--color-blue-hover);
  color: white;
}
.tt-profile__button--icon {
  max-height: 100%;
  height: 12px;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  opacity: 0;
}
.tt-profile__button:hover .tt-profile__button--icon {
  opacity: 1;
}
@media screen and (max-width: 769px) {
  .tt-rofile__timeframes {
    padding: 16px;
    flex-direction: row;
    justify-content: space-between;
  }
  .tt-profile__button {
    width: 96px;
    justify-content: center;
  }
  .tt-profile__button--icon {
    display: none;
  }
}
</style>
