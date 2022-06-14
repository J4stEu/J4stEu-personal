<template>
  <section>
    <b-table
      :data="isEmpty ? [] : works"
      :bordered="isBordered"
      :striped="isStriped"
      :narrowed="isNarrowed"
      :hoverable="isHoverable"
      :loading="isLoading"
      :focusable="isFocusable"
      :mobile-cards="hasMobileCards"
    >
      <b-table-column v-slot="props" field="Preview" label="Preview" :td-attrs="columnTdAttrs">
        <img :src="props.row.Preview" width="30px" height="30px">
      </b-table-column>

      <b-table-column v-slot="props" field="Title" label="Title" :td-attrs="columnTdAttrs">
        {{ props.row.Title }}
      </b-table-column>

      <b-table-column v-slot="props" field="Stack" label="Technologies" :td-attrs="columnTdAttrs">
        <div class="tableTagsContainer">
          <span v-for="stack in props.row.Stack" :key="stack" class="tableTag tag">
            {{ stack }}
          </span>
        </div>
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="Info"
        label="Info"
        :td-attrs="columnTdAttrs"
      >
        <b-tooltip :label="props.row.Info" type="is-dark" style="cursor: pointer">
          <div class="iconsContainer">
            <InfoIcon />
          </div>
          <b-tooltip />
        </b-tooltip>
      </b-table-column>

      <b-table-column v-slot="props" field="Src" label="Src" :td-attrs="columnTdAttrs">
        <b-tooltip :label="props.row.Src" type="is-dark" style="cursor: pointer">
          <a :href="props.row.Src" target="_blank">
            <div class="iconsContainer">
              <ExternalResourceIcon />
            </div>
          </a>
          <b-tooltip />
        </b-tooltip>
      </b-table-column>

      <template #empty>
        <div class="has-text-centered">
          No records
        </div>
      </template>
    </b-table>
  </section>
</template>

<script>
import ExternalResourceIcon from "@/assets/icons/iconmonstr-share-11.svg";
import InfoIcon from "@/assets/icons/iconmonstr-info-lined-2.svg";
export default {
  components: {
    ExternalResourceIcon,
    InfoIcon
  },
  props: {
    works: {
      type: Array,
      default () {
        return [];
      },
      required: true
    }

  },
  data () {
    /* const data = [ */
    /* [> { id: 1, first_name: "Jesse", last_name: "Simmons", date: "2016/10/15 13:43:27", gender: "Male" }, <] */
    /* [> { id: 2, first_name: "John", last_name: "Jacobs", date: "2016/12/15 06:00:53", gender: "Male" }, <] */
    /* [> { id: 3, first_name: "Tina", last_name: "Gilbert", date: "2016/04/26 06:26:28", gender: "Female" }, <] */
    /* [> { id: 4, first_name: "Clarence", last_name: "Flores", date: "2016/04/10 10:28:46", gender: "Male" }, <] */
    /* [> { id: 5, first_name: "Anne", last_name: "Lee", date: "2016/12/06 14:38:38", gender: "Female" } <] */
    /* { */
    /* ID: 1, */
    /* Title: "Engs", */
    /* Preview: "https://raw.githubusercontent.com/J4stEu/engs/master/projectDemo/1.jpg", */
    /* Src: "https://github.com/J4stEu/engs", */
    /* Stack: ["HTML / CSS (Sass, FlexBox, Grid)", "Vue.JS (Vue CLI, Vue Router, Vuex)", "Python (Flask)"] */
    /* }, */
    /* { */
    /* ID: 2, */
    /* Title: "Blockchain Python", */
    /* Preview: "https://raw.githubusercontent.com/J4stEu/blockchainPython/master/projectDemo/4.png", */
    /* Src: "https://github.com/J4stEu/blockchainPython", */
    /* Stack: ["Python", "Flask"] */
    /* } */
    /* ]; */

    return {
      isEmpty: false,
      isBordered: false,
      isStriped: false,
      isNarrowed: true,
      isHoverable: false,
      isFocusable: false,
      isLoading: false,
      hasMobileCards: true
    };
  },
  methods: {
    dateThAttrs (column) {
      return column.label === "Date"
        ? {
            title: "This title is sponsored by \"th-attrs\" prop",
            class: "has-text-success"
          }
        : null;
    },
    columnTdAttrs (row, column) {
      if (row.id === "Total") {
        if (column.label === "ID") {
          return {
            colspan: 4,
            class: "has-text-weight-bold",
            style: {
              "text-align": "left !important"
            }
          };
        } else if (column.label === "Gender") {
          return {
            class: "has-text-weight-semibold"
          };
        } else {
          return {
            style: { display: "none" }
          };
        }
      }
      return null;
    }
  }
};
</script>

<style lang="scss" scoped>
  .tableTagsContainer {
    display: flex;
    flex-wrap: wrap;

    @media screen and (min-width:0px) and (max-width:768px) {
      justify-content: flex-end;
    }

    .tableTag {
      margin: $offsetVal / 4 + px;
    }
  }
</style>
