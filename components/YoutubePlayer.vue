<template>
  <div ref="playerElement"></div>
</template>
<style lang="scss" scoped>
embed {
  width: 100%;
  height: 100%;
}
</style>
<script setup lang="ts">
import YouTubePlayer from 'youtube-player'

const props = defineProps({
  videoId: String
})
const playerElement = ref()
const emit = defineEmits(['paused', 'playing', 'ended'])

onMounted(() => {
  const player = YouTubePlayer(playerElement.value, {
    host: 'http://www.youtube.com'
  })
  player.on('stateChange', (e: { data: number }) => {
    if (e.data === window.YT.PlayerState.ENDED) {
      emit('ended')
    } else if (e.data === YT.PlayerState.PAUSED) {
      emit('paused')
    } else if (e.data === YT.PlayerState.PLAYING) {
      emit('playing')
    }
  })
  watch(
    () => props.videoId,
    (newVal) => {
      if (newVal) {
        player.loadVideoById({ videoId: newVal })
      }
    }
  )
})
</script>
