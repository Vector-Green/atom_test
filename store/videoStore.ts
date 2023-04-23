import { defineStore } from 'pinia'

export interface VideoItem {
  name: string
  imageSrc: string
  videoSrc: string
  isAccessible: boolean
}

export const useVideoStore = defineStore({
  id: 'video-store',
  state: () => {
    return {
      videosList: <VideoItem[]>[],
      currentVideoIndex: <number | undefined>undefined
    }
  },
  actions: {
    fetchVideos() {
      /**
       * TODO:setBackendData
       */
      this.videosList = [
        {
          name: 'someNameText0',
          imageSrc:
            'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg',
          videoSrc: 'https://www.youtube.com/embed/DHRLMNrukbU',
          isAccessible: true
        },
        {
          name: 'someNameText1',
          imageSrc:
            'https://img.freepik.com/free-photo/beautiful-shot-sunrise-country-road-netherlands_181624-29198.jpg',
          videoSrc: 'https://www.youtube.com/embed/0y9WmVR0rW4',
          isAccessible: false
        },
        {
          name: 'someNameText2',
          imageSrc:
            'https://img.freepik.com/free-photo/beautiful-shot-grassy-hills-covered-trees-near-mountains-dolomites-italy_181624-24400.jpg',
          videoSrc: 'https://www.youtube.com/embed/llcXO0Ju1SA',
          isAccessible: false
        },
        {
          name: 'someNameText3',
          imageSrc:
            'https://img.freepik.com/free-photo/beautiful-landscape-bamboo-grove-forest-arashiyama-kyoto_74190-2264.jpg',
          videoSrc: 'https://www.youtube.com/embed/F5ZKI-g-_qo',
          isAccessible: false
        },
        {
          name: 'someNameText4',
          imageSrc:
            'https://img.freepik.com/free-photo/abatract-sweet-color-cosmos-flowers-bokeh-texture-soft-blur-background-with-pastel-vintage-retro-style_1423-275.jpg',
          videoSrc: 'https://www.youtube.com/embed/NRufVTyELC4',
          isAccessible: false
        }
      ]
      this.currentVideoIndex = 0
    },
    setVideo(index: number | undefined) {
      if (typeof index === 'number') {
        this.setAccess(index, true)
        this.currentVideoIndex = index
      }
    },

    setAccess(index: number, access: boolean) {
      if (this.videosList[index]) this.videosList[index].isAccessible = access
    }
  },
  getters: {
    videos: (state) => state.videosList,
    currentVideo: (state) => state.currentVideoIndex
  }
})
