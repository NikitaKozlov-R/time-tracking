<template>
  <div class="tt-profile">
    <div class="tt-profile__user">
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
export default {
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
    flex-direction: row;
    padding: 32px 24px;
    align-items: center;
    justify-content: center;
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
