<template>
  <section
    id="info"
    class="
        is-flex
        is-flex-direction-column
        container
        is-max-desktop
    "
  >
    <div>
      <h1>{{ title }}</h1>
      <p>{{ text }}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
    #info {
        margin-top: $offsetVal + px;
        padding: 0px $offsetVal + px;
        color: black;

        div {
            // padding: 0px $offsetVal * 4 + px;
            text-align: justify;
        }
    }
    h1 {
        font-weight: bold;
        border-bottom: 2px solid $purple;
        display: inline;
    }
    p {
        margin-top: $offsetVal / 2 + px;
        text-indent: 1em;
    }
</style>>
