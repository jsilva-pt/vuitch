<template>
  <v-app>
    <v-toolbar app>
      <v-btn icon @click="$router.go(-1)">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title class="headline">
        <img alt="Vue logo" src="./assets/twitch.png" style="height: 40px;">
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content class="content">
      <router-view/>
    </v-content>
  </v-app>
</template>

<style>
.headline {
  display: flex;
  align-content: center;
}
.content {
  width: 1056px;
  margin: auto;
}
</style>
