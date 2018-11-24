<template>
  <div class="stream-loading">
    <v-progress-circular
      indeterminate
      color="#f07838"
      class="loader mb-3"
    />
    Getting Streams
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
  max-width: 1320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.loader {
  margin: auto;
}
</style>
