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
    <div v-if="isEnglish">
      <avatar
        :chips="chipsEng.Chips"
      />
      <preview
        :left-title="previewEng.LeftTitle"
        :right-title="previewEng.RightTitle"
        :creator="previewEng.Creator"
      />
      <info
        v-for="(infoItem, infoName) in infoEng.Info"
        :key="infoName"
        :title="infoItem.Title"
        :text="infoItem.Text"
      />
      <bio
        :title="bioEng.Bio.Title"
        :events="bioEng.Bio.Events"
      />
      <works
        :title="worksEng.Title"
        :works="worksEng.Works"
      />
      <gallery
        :title="galleryEng.Title"
      />
      <contacts
        :title="contactsEng.Title"
        :contacts="contactsEng.Contacts"
      />
    </div>
    <div v-else>
      <avatar
        :chips="chipsRus.Chips"
      />
      <preview
        :left-title="previewRus.LeftTitle"
        :right-title="previewRus.RightTitle"
        :creator="previewRus.Creator"
      />
      <info
        v-for="(infoItem, infoName) in infoRus.Info"
        :key="infoName"
        :title="infoItem.Title"
        :text="infoItem.Text"
      />
      <bio
        :title="bioRus.Bio.Title"
        :events="bioRus.Bio.Events"
      />
      <works
        :title="worksRus.Title"
        :works="worksRus.Works"
      />
      <gallery
        :title="galleryRus.Title"
      />
      <contacts
        :title="contactsRus.Title"
        :contacts="contactsRus.Contacts"
      />
    </div>
  </section>
</template>

<script>
import { mapState } from 'pinia';
import { useAppStore } from "@/store/useAppStore";
import avatar from "@/components/index/avatar.vue";
import preview from "@/components/index/preview.vue";
import info from "@/components/index/info.vue";
import bio from "@/components/index/bio.vue";
import works from "@/components/index/works.vue";
import gallery from "@/components/index/gallery.vue";
import contacts from "@/components/index/contacts.vue";
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
      chipsEng: require("~/data/chips_eng.json"),
      chipsRus: require("~/data/chips_rus.json"),

      previewEng: require("~/data/preview_eng.json"),
      previewRus: require("~/data/preview_rus.json"),

      infoEng: require("~/data/info_eng.json"),
      infoRus: require("~/data/info_rus.json"),

      bioEng: require("~/data/bio_eng.json"),
      bioRus: require("~/data/bio_rus.json"),

      worksEng: require("~/data/works_eng.json"),
      worksRus: require("~/data/works_rus.json"),

      galleryEng: require("~/data/gallery_eng.json"),
      galleryRus: require("~/data/gallery_rus.json"),

      contactsEng: require("~/data/contacts_eng.json"),
      contactsRus: require("~/data/contacts_rus.json")
    };
  },
  computed: {
    ...mapState(useAppStore, ["isEnglish"])
  }
};
</script>
