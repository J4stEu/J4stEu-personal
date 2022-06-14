<template>
  <section
    id="source"
    class="
      is-flex
      is-flex-direction-column
      is-justify-content-center-start
      is-align-items-center
      container
      is-max-desktop
    "
    @mousemove="getMouseMove"
  >
    <div
      class="
        is-flex
        is-flex-direction-column
        is-justify-content-center
        is-align-items-center
    "
    >
      <sourceBackground :mouse-move-event="mouseMoveEvent" />
      <sourceBox
        :creator="sourceData.Source.Creator"
        :copyright="sourceData.Source.Copyright"
        :rights="sourceData.Source.Rights"
        :site-stack="sourceData.Source.SiteStack"
        :site-source-name="sourceData.Source.SiteSourceName"
        :site-source="sourceData.Source.SiteSource"
      />
    </div>
  </section>
</template>

<script>
import sourceBox from "@/components/source/sourceBox.vue";
import sourceBackground from "@/components/source/sourceBackground.vue";
export default {
  components: {
    sourceBox,
    sourceBackground
  },
  layout: "header",
  data () {
    return {
      mouseMoveEvent: {},
      sourceData: require("~/data/source.json")
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
    height: calc(100vh - #{$offsetVal * 3 + px});
    margin-top: $offsetVal * 3 + px;

    @media screen and (min-width: 0px) and (max-width: 768px) {
      height: auto;
    }
  }
  div {
    @media screen and (min-width: 0px) and (max-width: 768px) {
      justify-content: flex-start !important;
    }
  }
</style>
