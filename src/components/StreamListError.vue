<template>
  <div class="stream-list-error">
    <v-icon size="60">report_problem</v-icon>
    <span class="subheading grey--text">
      {{ $t('error') }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'StreamListError'
}
</script>

<style>
.stream-list-error {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
</style>
