<template>
  <div
    id="posts"
    class="
      is-flex
      is-flex-direction-column
      is-justify-content-flex-start
      is-align-items-center"
  >
    <Post />
  </div>
</template>

<script>
import Post from "~/components/Posts/Post.vue";
export default {
  components: {
    Post
  },
  layout: 'Header',
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
    height: calc(100% - $offsetVal * 3 + px);
    margin-top: $offsetVal * 3 + px;

    @media screen and (min-width: 0px) and (max-width: 768px) {
      height: auto;
    }
  }
</style>
