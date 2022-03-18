<template>
  <section
    id="works"
    class="
      is-flex
      is-flex-direction-column
      is-justify-content-flex-start
      is-align-items-center
      container
      is-max-desktop"
  >
    <div
      class="work-container"
    >
      <work
        v-for="(workItem, workName) in works.Works"
        :key="workName"
        :src="workItem.Src"
        :preview="workItem.Previw"
        :title="workItem.Title"
        :text="workItem.About"
        :stack="workItem.Stack"
      />
    </div>
    <!-- Nothing here yet... -->
  </section>
</template>

<script>
import work from "~/components/works/work.vue";
export default {
  components: {
    work
  },
  layout: 'header',
  data () {
    return {
      works: require("~/data/works.json")
    };
  },
  computed: {
    currentRouteName () {
      return this.$route.name;
    }
  }
};
</script>

<style lang="scss" scoped>
  #works {
    width: 100vw;
    height: calc(100% - #{$offsetVal * 3 + px});
    margin-top: $offsetVal * 3 + px;

    @media screen and (min-width: 0px) and (max-width: 768px) {
      height: auto;
    }
  }
  // .work-wrapper {
  //   width: f;
  // }
  .work-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: $offsetVal + px;
    padding: 0 $offsetVal + px;
    justify-items: center;
    align-items: center;
  }
</style>
