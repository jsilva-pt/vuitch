<template>
  <div class="no-results">
    <v-icon size="60">list</v-icon>
    <span class="subheading grey--text">{{ $t('no_results') }}</span>
  </div>
</template>

<script>
export default {
  name: 'StreamListNoResults'
}
</script>

<style scoped>
.no-results {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
</style>
