<template>
  <div
    id="avatar"
    class="
        container
        is-max-desktop
        columns
      "
  >
    <div
      class="
        avatarImage
        column
        is-flex
        is-flex-direction-column
        is-justify-content-center
        is-align-items-center
    "
    >
      <JUIllustration />
    </div>
    <div
      class="
        thoughts
        column
        "
    >
      <div
        v-for="(chip, chipName) in chips"
        :key="chipName"
      >
        <b-tag type="is-info">
          {{ chipName }}
        </b-tag>
        <b-taglist>
          <b-taglist v-for="(value, valueName) in chip" :key="valueName" attached>
            <b-tooltip v-if="value.name" :label="value.subnames" type="is-dark" style="cursor: pointer">
              <b-tag type="is-dark">
                {{ value.name }}
                <InfoIcon />
              </b-tag>
            </b-tooltip>
            <b-tag v-else type="is-dark">
              {{ value }}
            </b-tag>
          </b-taglist>
        </b-taglist>
      </div>
    </div>
  </div>
</template>

<script>
import JUIllustration from "@/assets/img/j4steu-illustration.svg";
import InfoIcon from "@/assets/icons/iconmonstr-info-lined.svg";
export default {
  components: {
    JUIllustration,
    InfoIcon
  },
  props: {
    chips: {
      type: Object,
      default () {
        return {};
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  #avatar {
    position: relative;
    margin: auto;
    margin-top: $offsetVal * 3 + px;
    padding: 0 30px;
  }
  .avatarImage, .thoughts {
    padding: 0 $offsetVal + px;
  }
  .avatarImage {
    svg {
        position: relative;
        width: 40%;
        animation: avatarMotion 5s linear infinite;
    }
    @keyframes avatarMotion {
        from {bottom: 0}
        50% {bottom: $offsetVal/2 + px}
        to {bottom: 0}
    }
  }
  .thoughts {
    svg {
        transform: translateY(2.5px);
    }
  }
  .is-info {
    margin-top: 0.4rem;
    background: $purple !important;
  }
  .tags {
    padding-right: 0.4rem;
    margin-top: 0.4rem;
    margin-bottom: 0rem;
  }
</style>
