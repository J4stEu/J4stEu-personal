<template>
  <div class="box">
    <article class="media">
      <div class="media-left">
        <div class="previewImage" />
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ creator }}</strong> <br><small>{{ copyright }}</small><br><small>{{ rights }}</small><br>
          </p>
        </div>
      </div>
    </article>
    <div class="source">
      <div>
        <p>This site stack</p>
        <b-taglist>
          <b-tag v-for="stack in siteStack" :key="stack" type="is-dark">
            {{ stack }}
          </b-tag>
        </b-taglist>
      </div>
      <div>
        <p>This site source</p>
        <a :href="siteSource" target="blank">
          <b-taglist class="is-flex-wrap-nowrap" attached>
            <b-tag type="is-dark">
              <b-icon
                icon="open-in-new"
                size="is-small"
              />
            </b-tag>
            <b-tag type="is-dark">
              J4stEu Personal
            </b-tag>
          </b-taglist>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    creator: {
      type: String,
      default: "Eugene Nikonov"
    },
    copyright: {
      type: String,
      default: "© 2021 J4stEu."
    },
    rights: {
      type: String,
      default: "All Rights Reserved."
    },
    siteStack: {
      type: Array,
      default: () => ["Nuxt.js", "Buefy"]
    },
    siteSourceName: {
      type: String,
      default: "J4stEu Personal"
    },
    siteSource: {
      type: String,
      default: "https://github.com/J4stEu/j4steu-personal"
    }
  }
};
</script>

<style lang="scss" scoped>
    .box {
        position: absolute;
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        border: 3px solid $purple;
        padding: $offsetVal + px;
        margin: $offsetVal + px;

        @supports not (backdrop-filter: blur(10px)) {
          background: rgba(255, 255, 255, 0.9);
        }
    }
    .previewImage {
      width: $offsetVal * 3 + px;
      height: $offsetVal * 3 + px;
      border-radius: 50%;
      background: url("@/assets/img/j4steu.jpeg");
      background-size: cover;
      background-position: center;
    }
    p {
      margin-top: $offsetVal/3 + px !important;
      span {
        display: flex;
      }
    }
    .content {
      p {
        margin-top: 0 !important;
      }
    }
    .source {
      span {
        display: flex !important;
      }
    }
    .contacs-desktop, .contacs-mobile {
      span {
        display: flex;
      }
      .tags {
        margin: 0;
      }
      .tag {
        cursor: pointer;
      }
    }
    .contacs-desktop {
      display: none;
      @media screen and (min-width:0px) and (max-width:747px){
          display: none;
      }
    }
    .contacs-mobile {
      margin-top: 0.5rem;
      a {
        margin-right: 0.5rem;
      }
    }
</style>
