<template>
  <div class="empty-query">
    <v-icon size="60">search</v-icon>
    What stream do you want to see?
  </div>
</template>

<script>
export default {
  name: 'StreamListEmptyQuery'
}
</script>

<style scoped>
.empty-query {
  margin: auto;
  max-width: 1320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
</style>
