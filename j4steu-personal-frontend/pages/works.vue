<template>
  <section
    id="works"
    class="
      is-flex
      is-flex-direction-column
      is-justify-content-flex-start
      is-align-items-center"
  >
    <!-- <div
      class="container
        is-max-desktop"
    >
      <div
        class="
        columns
        "
      >
        <Work
          v-for="(workItem, workName) in works.Works"
          :key="workName"
          :src="workItem.Src"
          :preview="workItem.Previw"
          :title="workItem.Title"
          :text="workItem.About"
          :stack="workItem.Stack"
        />
      </div>
    </div> -->
    Nothing here yet...
  </section>
</template>

<script>
// import Work from "~/components/Works/Work.vue";
export default {
  // components: {
  //   Work
  // },
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
</style>
