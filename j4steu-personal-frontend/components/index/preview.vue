<template>
  <section
    id="preview"
    class="
      container
      is-max-desktop
    "
  >
    <div class="columns topPreview">
      <h1
        class="
          column
          is-flex
        "
      >
        {{ leftTitle }}
      </h1>
      <h1
        class="
          column
        "
      >
        {{ rightTitle }}
      </h1>
    </div>
    <div class="columns bottomPreview">
      <div class="column is-flex is-justify-content-center">
        <div class="is-flex is-flex-direction-column is-justify-content-center">
          <h1>{{ creator }}</h1>
          <p>Digital Artificer (Developer / Designer)</p>
        </div>
      </div>
      <div class="column is-flex is-justify-content-center">
        <div class="previewImage" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    leftTitle: {
      type: String,
      default: ""
    },
    rightTitle: {
      type: String,
      default: ""
    },
    creator: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
    section {
      div {
        margin: 0;
      }
    }
    .topPreview {
      padding: 0 $offsetVal + px;
      margin: 0;
      margin-top: $offsetVal + px;

      h1 {
        padding: $offsetVal / 2 + px;
        background: rgba(34, 32, 76, 0.2);
        font-weight: bold;
        color: black;
        display: flex !important;
        text-align: center;
        align-items: center;
        justify-content: center;

        &:first-child{
          border-radius: 6px 0 0 6px;

          @media screen and (min-width:0px) and (max-width:768px) {
            border-radius: 6px 6px 0 0;
          }
        }
        &:last-child{
          border-radius: 0 6px 6px 0;
          background: $purple;
          color: white;

          @media screen and (min-width:0px) and (max-width:768px) {
            border-radius: 0 0 6px 6px;
          }
        }
      }
    }
    .bottomPreview {
      color: black;
      margin-top: $offsetVal + px;
      @media screen and (min-width:0px) and (max-width:768px) {
        margin-top: 0;
        display: flex;
        flex-direction: column-reverse;
      }

      div {
        padding: 0;

        &:last-child {

          @media screen and (min-width:0px) and (max-width:768px) {
            margin-top: $offsetVal / 2 + px;
          }

          h1, p {
            @media screen and (min-width:0px) and (max-width:768px) {
              text-align: center;
            }
          }
        }
      }

      h1 {
        font-size: 2em;
        font-weight: bold;
      }
    }
    .previewImage {
      width: $offsetVal * 4 + px;
      height: $offsetVal * 4 + px;
      border: 2px solid $purple;
      border-radius: 50%;
      background: url("@/assets/img/j4steu.jpeg");
      background-size: cover;
      background-position: center;
    }
</style>>
