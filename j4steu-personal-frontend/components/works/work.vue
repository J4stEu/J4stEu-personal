<template>
  <div class="work">
    <b-taglist>
      <b-tooltip :label="src" type="is-dark">
        <a :href="src" target="blank">
          <b-taglist class="is-flex-wrap-nowrap" attached>
            <b-tag type="is-dark">
              <b-icon
                icon="github"
              />
            </b-tag>
            <b-tag type="is-dark">
              {{ title }}
            </b-tag>
          </b-taglist>
        </a>
      </b-tooltip>
    </b-taglist>
    <div
      class="workPreview"
      :style="{
        background: `url(${preview})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat'
      }"
    />
    <h1>{{ title }}</h1>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: ""
    },
    preview: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    stack: {
      type: Array,
      default () {
        return [];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .work {
    width: 250px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .workPreview {
    width: 100%;
    height: 150px;
    border-radius: 6px;
  }
  .tags {
    margin: 0;
  }
  h1 {
    text-align: center;
    margin-top: $offsetVal / 3 + px;
  }
  p {
    font-size: 0.8em;
    text-align: center;
    margin-top: $offsetVal / 3 + px;
  }
</style>
