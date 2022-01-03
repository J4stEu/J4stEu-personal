<template>
  <div class="work column is-flex is-align-content-flex-start">
    <h1>{{ title }}</h1>
    <div class="workPreview" :style="`background-image: url(${preview})`">
      <!-- <img :src="preview" alt="post preview"> -->
    </div>
    <!-- <b-taglist>
      <b-tag
        v-for="stackItem in stack"
        :key="stackItem"
        type="is-dark"
      >
        {{ stackItem }}
      </b-tag>

      <p>{{ text }}</p>
    </b-taglist> -->
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
    min-width: 300px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
  }
  .workPreview {
    border-radius: 6px;
  }
  // .title {

  // }
  h1 {
    text-align: center;
    border-bottom: 2px solid $purple;
    width: max-content;
    margin-bottom: $offsetVal / 2 + px;
  }
  // img {
  //   width: 100%;
  //   border-radius: 6px;
  // }
  .tags {
    margin: 0;
  }
  p {
    font-size: 0.8em;
    // text-indent: 1em;
    text-align: center;
  }
</style>
