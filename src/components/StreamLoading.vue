<template>
  <div class="stream-loading">
    <v-progress-circular
      indeterminate
      color="primary"
      class="loader mb-3"
    />
    <span class="subheading grey--text">
      {{ msg }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'StreamLoading',
  props: {
    msg: {
      type: String,
      required: true
    }
  }
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
