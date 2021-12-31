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
    <Bio
      :title="bio.Bio.Title"
      :events="bio.Bio.Events"
    />
    <Gallery />
    <Contacts />
  </div>
</template>

<script>
import Avatar from "~/components/Index/Avatar.vue";
import Preview from "~/components/Index/Preview.vue";
import Info from "~/components/Index/Info.vue";
import Bio from "~/components/Index/Bio.vue";
import Gallery from "~/components/Index/Gallery.vue";
import Contacts from "~/components/Index/Contacts.vue";
export default {
  components: {
    Avatar,
    Preview,
    Info,
    Bio,
    Gallery,
    Contacts
  },
  layout: 'Header',
  data () {
    return {
      info: require("~/data/info.json"),
      bio: require("~/data/bio.json")
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

</style>
