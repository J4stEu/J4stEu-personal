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
        v-if="isEnglish"
        :creator="sourceEng.Source.Creator"
        :copyright="sourceEng.Source.Copyright"
        :rights="sourceEng.Source.Rights"
        :site-stack-title="sourceEng.Source.SiteStackTitle"
        :site-stack="sourceEng.Source.SiteStack"
        :site-source-title="sourceEng.Source.SiteSourceTitle"
        :site-source-name="sourceEng.Source.SiteSourceName"
        :site-source="sourceEng.Source.SiteSource"
      />
      <sourceBox
        v-else
        :creator="sourceRus.Source.Creator"
        :copyright="sourceRus.Source.Copyright"
        :rights="sourceRus.Source.Rights"
        :site-stack-title="sourceRus.Source.SiteStackTitle"
        :site-stack="sourceRus.Source.SiteStack"
        :site-source-title="sourceRus.Source.SiteSourceTitle"
        :site-source-name="sourceRus.Source.SiteSourceName"
        :site-source="sourceRus.Source.SiteSource"
      />
    </div>
  </section>
</template>

<script>
import { mapState } from 'pinia';
import { useAppStore } from "@/store/useAppStore";
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
      sourceEng: require("~/data/source_eng.json"),
      sourceRus: require("~/data/source_rus.json")
    };
  },
  computed: {
    ...mapState(useAppStore, ["isEnglish"])
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
