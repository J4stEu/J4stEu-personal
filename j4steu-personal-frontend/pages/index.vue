<template>
  <section
    id="main"
    class="
        is-flex
        is-flex-direction-column
        container
        is-max-desktop
    "
  >
    <avatar />
    <preview />
    <info
      v-for="(infoItem, infoName) in info.Info"
      :key="infoName"
      :title="infoItem.Title"
      :text="infoItem.Text"
    />
    <bio
      :title="bio.Bio.Title"
      :events="bio.Bio.Events"
    />
    <works
      :works="works.Works"
    />
    <gallery />
    <contacts />
  </section>
</template>

<script>
import avatar from "~/components/index/avatar.vue";
import preview from "~/components/index/preview.vue";
import info from "~/components/index/info.vue";
import bio from "~/components/index/bio.vue";
import works from "~/components/index/works.vue";
import gallery from "~/components/index/gallery.vue";
import contacts from "~/components/index/contacts.vue";
export default {
  components: {
    avatar,
    preview,
    info,
    bio,
    works,
    gallery,
    contacts
  },
  layout: "header",
  data () {
    return {
      info: require("~/data/info.json"),
      bio: require("~/data/bio.json"),
      works: require("~/data/works.json")
    };
  }
};
</script>
