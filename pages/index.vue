<template>
  <div class="page">
    <div class="header">
      {{ t('How to make') }}
      <img loading="lazy" class="header__logo" :src="getLocaleHeaderImage()" alt="episode logo" />
      {{ t('per day by setting adds on FceBook+Instagram') }}
    </div>
    <div class="title" v-if="currentVideoObj">
      <span class="title__number">
        {{ t('Episode') }}:
        {{ store.currentVideo }}
      </span>
      <span class="title__text">
        {{ currentVideoObj?.name }}
      </span>
    </div>
    <div class="video">
      <youtube
        :videoId="currentVideoObj?.videoSrc"
        @ended="videoEnded = true"
        class="video__player"
      />
      <div class="video__buttons">
        <button
          :disabled="!item.isAccessible"
          v-for="(item, index) in store.videosList"
          :key="item.name"
          @click="store.setVideo(index)"
        >
          <div class="holder">
            <img
              loading="lazy"
              class="holder__logo"
              v-bind:src="item.imageSrc"
              alt="episode logo"
            />
            <img
              loading="lazy"
              class="holder__access"
              :src="item.isAccessible ? playSvg : lockSvg"
              alt="controller"
            />
          </div>
          <div class="text">{{ item.name }}</div>
        </button>
      </div>
    </div>
    <div class="footer">
      <div class="footer__description">
        <div class="perceptible">{{ t('In this lesson you will learn:') }}</div>
        <ul class="text">
          <li>
            {{
              t('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, veritatis!')
            }}
          </li>
          <li>
            {{
              t('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, veritatis!')
            }}
          </li>
          <li>
            {{
              t('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, veritatis!')
            }}
          </li>
          <li>
            {{
              t('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, veritatis!')
            }}
          </li>
          <li>
            {{
              t('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, veritatis!')
            }}
          </li>
        </ul>
      </div>
      <img loading="lazy" class="footer__line" :src="verticalLine" />
      <div class="hint">
        <div class="hint__text">
          {{ t('Did you watched it)? Lets get access to the next one') }}
        </div>
        <button
          :disabled="!isNextAccessible"
          class="hint__button"
          @click="
            () => {
              videoEnded = false
              store.setVideo(nextArrItem(store.currentVideo, store.videosList?.length))
            }
          "
        >
          {{ t('Next episode') }}
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Shadows+Into+Light+Two&family=Ysabeau:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.page {
  max-width: 1080px;
  margin: auto auto;

  .header {
    display: inline-block;
    text-align: center;
    width: 100%;
    padding: 20px;
    font-size: 26px;
    font-weight: 700;
    font-family: 'Ysabeau', sans-serif;
    box-sizing: border-box;
    &__logo {
      height: 30px;
      transform: translateY(25%);
    }
  }
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-family: 'Ysabeau', sans-serif;
    font-size: 20px;
    margin-bottom: 5px;
    span {
      margin: 0 2px;
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }

    &__number {
      color: orange;
    }
    &__text {
      color: black;
    }
  }
  .video {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: repeat(auto-fit, max-content);
    grid-gap: 20px;

    align-items: center;
    justify-items: center;

    padding: 20px;
    grid-gap: 20px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-gap: 5px;
      padding: 5px;
      &__player {
        width: 100%;
        aspect-ratio: 16 / 9;
      }
      &__buttons {
        padding: 10px 0;
      }
    }
    &__player {
      width: 100%;
      height: 100%;
    }
    &__buttons {
      display: flex;
      flex-direction: column;
      width: 100%;
      button {
        width: 100%;
        height: 70px;
        padding: 0;
        margin: 10px 0;

        outline: none;
        border: 0;
        background: rgba(0, 0, 0, 0.3);
        color: white;

        display: flex;
        flex-direction: row;
        cursor: pointer;

        &:hover {
          background: rgba(0, 0, 0, 0.5);
        }
        &:disabled {
          cursor: unset;
          background: rgba(0, 0, 0, 0.2);
          filter: grayscale(1);
        }

        &:first-child {
          margin-top: 0;
        }
        &:last-child {
          margin-bottom: 0;
        }

        .holder {
          height: 100%;
          aspect-ratio: 1;
          position: relative;
          img {
            position: absolute;
            left: 0;
            height: 100%;
            width: 100%;
          }
        }
        .text {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
  .footer {
    display: grid;

    grid-template-columns: 2fr max-content 1fr;
    grid-template-rows: repeat(auto-fit, max-content);
    align-items: center;
    justify-items: center;
    grid-gap: 20px;
    padding: 20px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-gap: 5px;
      padding: 5px;
      &__line {
        display: none;
      }
    }

    &__description {
      display: flex;
      flex-direction: column;
      justify-self: start;
      .perceptible {
        font-family: 'Shadows Into Light Two', cursive;
        font-size: 26px;
        color: orange;
      }
      ul {
        list-style-type: decimal;
        list-style-position: inside;
        padding-left: 0;
      }
    }

    &__line {
      height: 100%;
    }
    .hint {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 20px;
      &__text {
        margin-bottom: 20px;
        text-align: center;

        font-family: 'Lato', sans-serif;
        font-size: 18px;
        font-weight: 600;
      }
      &__button {
        outline: none;
        border: 0;
        cursor: pointer;

        padding: 10px;
        width: 100%;
        background: orange;
        color: white;

        font-family: 'Ysabeau', sans-serif;
        font-size: 18px;
        &:hover {
          background: orangered;
        }
        &:disabled {
          background: gray;
          cursor: unset;
        }
      }
    }
  }
}
</style>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import youtube from '~/components/YoutubePlayer.vue'

import lockSvg from '~/assets/lock.svg'
import playSvg from '~/assets/play.svg'

import verticalLine from '~/assets/verticalLine.png'
import from100uk from '~/assets/from100uk.png'

import { useVideoStore } from '~/store/videoStore'

const videoEnded = ref(false)

const isNextAccessible = computed(() => {
  if (typeof store.currentVideo === 'number' && store.videosList?.length) {
    if (store.videosList[store.currentVideo + 1]?.isAccessible) {
      return true
    } else if (videoEnded.value) {
      return true
    }
  }
  return false
})
const store = useVideoStore()
const { t, locale } = useI18n()

const currentVideoObj = computed(() => {
  if (typeof store.currentVideo === 'number' && store.videosList?.length) {
    return store.videosList[store.currentVideo]
  }
})
function getLocaleHeaderImage() {
  switch (locale.value) {
    case 'uk': {
      return from100uk
    }
  }
}
function nextArrItem(current: number | undefined, length: number | undefined): number | undefined {
  if (typeof current === 'number' && length) {
    let nextItem = (current + 1) % length
    return nextItem
  }
}

onMounted(async () => {
  locale.value = 'uk'
  store.fetchVideos()
})

defineOptions({
  layout: 'default'
})
</script>
<i18n>
{
  "en": {
    "How to make": "",
    "per day by setting adds on FceBook+Instagram": "per day by setting adds on FceBook+Instagram",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, veritatis!": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, veritatis!",
    "In this lesson you will learn:": "In this lesson you will learn:",
    "Did you watched it)? Lets get access to the next one": "Did you watched it)? Lets get access to the next one",
    "Next episode": "Next episode",
    "Episode": "Episode"
  },
  "uk": {
    "How to make": "Як заробляти",
    "per day by setting adds on FceBook+Instagram": "на день на налаштуванні рекламних компаній FaceBook+Instagram",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, veritatis!": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, veritatis!",
    "In this lesson you will learn:":"На цьому уроці ви навчитеся",
    "Did you watched it)? Lets get access to the next one": "Ви переглянули? Давайте до наступного",
    "Next episode": "Наступний епізод",
    "Episode": "Епізод"
  },
}
</i18n>
