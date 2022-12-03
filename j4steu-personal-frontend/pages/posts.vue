<template>
  <section
    id="posts"
    class="
      is-flex
      is-flex-direction-column
      is-justify-content-flex-start
      is-align-items-center"
  >
    <post />
  </section>
</template>

<script>
import post from "~/components/posts/post.vue";
export default {
  components: {
    post
  },
  layout: 'header',
  computed: {
    currentRouteName () {
      return this.$route.name;
    }
  }
};
</script>

<style lang="scss" scoped>
  #posts {
    width: 100vw;
    height: calc(100% - #{$offsetVal * 3 + px});
    margin-top: $offsetVal * 3 + px;

    @media screen and (min-width: 0px) and (max-width: 768px) {
      height: auto;
    }
  }
</style>
