<template>
  <v-app>
    <v-toolbar app>
      <v-btn
        v-if="showBackButton"
        icon
        @click="$router.go(-1)"
      >
        <v-icon>arrow_back</v-icon>
      </v-btn>

      <v-toolbar-title class="headline">
        <img
          alt="Vue logo"
          src="./assets/twitch.png"
          class="logo"
        />
      </v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content class="content">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  computed: {
    showBackButton () {
      return this.$route.name === 'stream-details'
    }
  }
}
</script>

<style>
.logo {
  height: 30px;
}
.headline {
  display: flex;
  align-content: center;
}
.content {
  width: 1056px;
  margin: auto;
}

.limit input {
  text-align: right;
}
</style>
