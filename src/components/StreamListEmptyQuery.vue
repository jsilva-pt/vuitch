<template>
  <div class="stream-list-empty-query">
    <v-icon size="60">search</v-icon>
    <span class="subheading grey--text">{{ $t('suggestion') }}</span>
  </div>
</template>

<script>
export default {
  name: 'StreamListEmptyQuery'
}
</script>

<style scoped>
.stream-list-empty-query {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
</style>
