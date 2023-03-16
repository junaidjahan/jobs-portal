<template>
  <b-button
    v-bind="$attrs"
    v-on="$listeners"
    :variant="$attrs.variant ?? 'primary'"
    class="px-4 py-2"
  >
    <slot />
  </b-button>
</template>

<script>
export default {
  name: "BaseBtn",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
  font-size: 12px;
}
</style>
