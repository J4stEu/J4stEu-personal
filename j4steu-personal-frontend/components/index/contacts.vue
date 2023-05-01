<template>
  <div
    id="contacts"
    class="
        container
        is-max-desktop
    "
  >
    <h1>{{ title }}</h1>
    <div class="is-flex is-flex-direction-column">
      <a
        v-for="(contactItem, contactName) in contacts"
        :key="contactName"
        :href="contactItem.Src"
        target="blank"
      >
        <b-taglist class="is-flex-wrap-nowrap" attached>
          <b-tag type="is-dark">
            <div class="iconChipsContainer">
              <VKIcon v-if=" contactItem.Icon === 'vk' " />
              <GithubIcon v-if=" contactItem.Icon === 'github' " />
              <FileIcon v-if=" contactItem.Icon === 'file' " />
              <EmailIcon v-if=" contactItem.Icon === 'email' " />
            </div>
          </b-tag>
          <b-tag type="is-dark">
            {{ contactItem.Title }}
          </b-tag>
        </b-taglist>
      </a>
    </div>
  </div>
</template>

<script>
import VKIcon from "@/assets/icons/iconmonstr-vk-3.svg";
import GithubIcon from "@/assets/icons/iconmonstr-github-1.svg";
import FileIcon from "@/assets/icons/iconmonstr-file-34.svg";
import EmailIcon from "@/assets/icons/iconmonstr-email-4.svg";
export default {
  components: {
    VKIcon,
    GithubIcon,
    FileIcon,
    EmailIcon
  },
  props: {
    title: {
      type: String,
      default: "Works"
    },
    contacts: {
      type: Object,
      default () {
        return {
          C1: {
            Title: "@ J4stEu",
            Src: "https://github.com/J4stEu",
            Icon: "github"
          }
        };
      }
    }
  },
  data () {
    return {
      icons: {
        github: GithubIcon,
        mail: EmailIcon,
        vk: VKIcon,
        file: FileIcon
      }
    };
  }
};
</script>

<style lang="scss" scoped>
    #contacts {
        margin-top: $offsetVal + px;
        margin: #{$offsetVal + px} 0 0 0;
        padding: 0px $offsetVal + px;
        color: black;
    }
    h1 {
        color: black;
        font-weight: bold;
        border-bottom: 2px solid $purple;
        display: inline;
        white-space:nowrap;
        width: min-content;
    }
    div {
        margin: #{$offsetVal / 2 + px} #{$offsetVal / 2 + px};

        a {
          margin-bottom: $offsetVal / 3 + px;
          width: fit-content;

          &:last-child {
            margin-bottom: 0;
          }
        }

        span {
            display: flex !important;
        }
        .tags {
            margin: 0;
        }
        .tag {
            cursor: pointer;
        }
    }
</style>>
