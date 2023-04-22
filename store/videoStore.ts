import { defineStore } from 'pinia'

export interface VideoItem {
  name: string
  imageSrc: string
  videoSrc: string
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
      this.videosList = [
        { name: 'someNameText', imageSrc: 'someUrl', videoSrc: 'someVideoSrc' },
        { name: 'someNameText', imageSrc: 'someUrl', videoSrc: 'someVideoSrc' },
        { name: 'someNameText', imageSrc: 'someUrl', videoSrc: 'someVideoSrc' }
      ]
    },
    setVideo(index: number) {
      this.currentVideoIndex = index
    }
  },
  getters: {
    videos: (state) => state.videosList
  }
})
