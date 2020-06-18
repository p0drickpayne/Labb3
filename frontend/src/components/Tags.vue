<template>
  <vue-tags-input
    v-model="$store.state.tag"
    :tags="$store.state.tags"
    @tags-changed="newTags => $store.state.tags = newTags"
  />
</template>

<script>
export default {};
</script>

<style>
</style>