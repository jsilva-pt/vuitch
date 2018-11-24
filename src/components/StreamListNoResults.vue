<template>
  <div class="empty-query">
    <v-icon size="60">search</v-icon>
    No results
  </div>
</template>

<script>
export default {
  name: 'StreamListNoResults'
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
