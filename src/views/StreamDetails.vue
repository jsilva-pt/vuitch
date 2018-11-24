<template>
  <div>
    <!-- <iframe
      :src="src"
      height="300"
      width="400"
      frameborder="0"
      scrolling="no"
      :allowfullscreen="true">
    </iframe> -->

    <div id="twitch-embed"></div>

  </div>
</template>
<script>
export default {
  name: 'stream-details',
  data () {
    return {
      src: `https://player.twitch.tv/?channel=${this.$route.params.name}`
    }
  },
  mounted () {
    var embed = new Twitch.Embed("twitch-embed", {
      width: 854,
      height: 480,
      channel: this.$route.params.name,
      layout: "video",
      autoplay: true
    });

    embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
      var player = embed.getPlayer();
      player.play();
    });
  }
}
</script>

<style scoped>

</style>
