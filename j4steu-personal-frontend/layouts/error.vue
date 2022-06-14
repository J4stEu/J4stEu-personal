<template>
  <section
    id="notFound"
    class="
        is-flex
        is-justify-content-center
        container
        is-max-desktop
    "
  >
    <p
      class="
            is-flex
            is-justify-content-center
        "
    >
      <b-icon
        icon="close-circle"
      />
      404 - There is nothing here
    </p>
  </section>
</template>

<script>
export default {
  layout: "Header"
};
</script>

<style lang="scss" scoped>
    #notFound {
        width: 100vw;
        height: calc(100% - #{$offsetVal * 3 + px});
        margin-top: $offsetVal * 3 + px;
        overflow: hidden;

        @media screen and (min-width: 0px) and (max-width: 768px) {
            height: auto;
        }
    }
    p {
        font-weight: bold;
        color: black;
    }
    span {
        padding: 0 $offsetVal / 2 + px;
    }
</style>
