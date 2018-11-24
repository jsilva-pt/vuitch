<template>
  <div class="stream-loading">
    <v-progress-circular
      indeterminate
      color="#f07838"
      class="loader mb-3"
    />
    <span class="subheading grey--text">{{ $t('loading') }}</span>
  </div>
</template>

<script>
export default {
  name: 'StreamLoading'
}
</script>

<style>
.stream-loading {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.loader {
  margin: auto;
}
</style>
