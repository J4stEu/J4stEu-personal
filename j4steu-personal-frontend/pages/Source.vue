<template>
  <div
    id="source"
    class="
      is-flex
      is-flex-direction-column
      is-justify-content-flex-start
      is-align-items-center
    "
    @mousemove="getMouseMove"
  >
    <section
      class="
        is-flex
        is-flex-direction-column
        is-justify-content-center
        is-align-items-center
    "
    >
      <SourceBackground :mouse-move-event="mouseMoveEvent" />
      <SourceBox />
    </section>
  </div>
</template>

<script>
import SourceBox from "~/components/Source/SourceBox.vue";
import SourceBackground from "~/components/Source/SourceBackground.vue";
export default {
  components: {
    SourceBox,
    SourceBackground
  },
  layout: "Header",
  data () {
    return {
      mouseMoveEvent: {}
    };
  },
  methods: {
    getMouseMove (e) {
      this.mouseMoveEvent = { e };
    }
  }
};
</script>

<style lang="scss" scoped>
  #source {
    width: 100vw;
    height: calc(100vh - 90px);
    margin-top: $offsetVal * 3 + px;

    @media screen and (min-width: 0px) and (max-width: 768px) {
      height: auto;
    }
  }
  section {
    @media screen and (min-width: 0px) and (max-width: 768px) {
      justify-content: flex-start !important;
    }
  }
</style>
