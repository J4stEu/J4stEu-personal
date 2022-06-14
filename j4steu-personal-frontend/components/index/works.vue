<template>
  <section
    id="works"
    class="
      container
      is-max-desktop
    "
  >
    <h1 class="sectionTitle">
      Works
    </h1>
    <div class="columns sectionPreview">
      <div class="column is-flex is-justify-content-center">
        <div class="is-flex is-flex-direction-column is-justify-content-center">
          <h1>J4stEu</h1>
          <a href="https://github.com/J4stEu" target="_blank">j4steu.github.io</a>
        </div>
      </div>
      <div class="column is-flex is-justify-content-center">
        <div>
          <GithubIcon />
        </div>
      </div>
    </div>
    <div class="sectionTable">
      <WorksTable :works="works" />
    </div>
  </section>
</template>

<script>
import GithubIcon from "@/assets/icons/iconmonstr-github-1-2.svg";
import WorksTable from "@/components/index/worksTable.vue";
export default {
  components: {
    GithubIcon,
    WorksTable
  },
  props: {
    works: {
      type: Array,
      default () {
        return [];
      },
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
  #works {
    margin: 0;
    margin-top: $offsetVal + px;
    padding: 0px $offsetVal + px;
    color: black;
  }

  section {

    div {
      margin: 0
    }
  }

  .sectionTitle {
    color: black;
    font-weight: bold;
    border-bottom: 2px solid $purple;
    display: inline;
    width: min-content;
  }

  .sectionPreview {
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

          h1, a {
            @media screen and (min-width:0px) and (max-width:768px) {
              text-align: center;
            }
          }

          a {
            color: $purple;
          }
        }
      }

      h1 {
        font-size: 2em;
        font-weight: bold;
      }
    }
 </style>
