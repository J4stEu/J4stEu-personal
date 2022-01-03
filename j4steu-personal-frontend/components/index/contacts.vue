<template>
  <section
    id="contacts"
    class="
        is-flex
        is-flex-direction-column
        container
        is-max-desktop
    "
  >
    <h1>Find me here</h1>
    <div class="is-flex is-flex-direction-column">
      <a href="https://github.com/J4stEu" target="blank">
        <b-taglist class="is-flex-wrap-nowrap" attached>
          <b-tag type="is-dark">
            <b-icon
              icon="github"
            />
          </b-tag>
          <b-tag type="is-dark">
            @ J4stEu
          </b-tag>
        </b-taglist>
      </a>
      <a href="https://vk.com/id188091326" target="blank">
        <b-taglist class="is-flex-wrap-nowrap" attached>
          <b-tag type="is-dark">
            <b-icon
              icon="vk"
            />
          </b-tag>
          <b-tag type="is-dark">
            @ Eugene Nikonov
          </b-tag>
        </b-taglist>
      </a>
      <a href="https://drive.google.com/file/d/1_A3sA3u7tvVKj1Gg_rGzPyV9Uqupn81i/view?usp=sharing" target="blank">
        <b-taglist class="is-flex-wrap-nowrap" attached>
          <b-tag type="is-dark">
            <b-icon
              icon="file-pdf"
            />
          </b-tag>
          <b-tag type="is-dark">
            Find me in PDF
          </b-tag>
        </b-taglist>
      </a>
    </div>
  </section>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
    #contacts {
        margin-top: $offsetVal + px;
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
        margin-top: $offsetVal / 2 + px;
        margin-left: 1em;

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
