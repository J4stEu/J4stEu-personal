<template>
  <div id="main">
    <Avatar />
    <Preview />
    <Info
      v-for="(infoItem, infoName) in info.Info"
      :key="infoName"
      :title="infoItem.Title"
      :text="infoItem.Text"
    />
  </div>
</template>

<script>
import Avatar from "~/components/Index/Avatar.vue";
import Preview from "~/components/Index/Preview.vue";
import Info from "~/components/Index/Info.vue";
export default {
  components: {
    Avatar,
    Preview,
    Info
  },
  layout: 'Header',
  data () {
    return {
      info: require("~/data/info.json")
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
  .pageRoute {
    position: absolute;
    z-index: 1;
  }
</style>
