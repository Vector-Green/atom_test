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
      videosList: <VideoItem[]>[]
    }
  },
  actions: {
    fetchVideos() {
      this.videosList = [
        { name: 'someNameText', imageSrc: 'someUrl', videoSrc: 'someVideoSrc' },
        { name: 'someNameText', imageSrc: 'someUrl', videoSrc: 'someVideoSrc' },
        { name: 'someNameText', imageSrc: 'someUrl', videoSrc: 'someVideoSrc' }
      ]
    }
  },
  getters: {
    videos: (state) => state.videosList
  }
})
