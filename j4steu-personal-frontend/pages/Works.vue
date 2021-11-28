<template>
  <div class="pageRoute">
    {{ currentRouteName }}
  </div>
</template>

<script>
export default {
  layout: 'Header',
  computed: {
    currentRouteName () {
      return this.$route.name;
    }
  }
};
</script>

<style lang="scss" scoped>
  .pageRoute {
    position: absolute;
    z-index: 1;
  }
</style>
