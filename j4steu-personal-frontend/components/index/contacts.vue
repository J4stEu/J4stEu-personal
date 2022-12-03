<template>
  <div
    id="contacts"
    class="
        container
        is-max-desktop
    "
  >
    <h1>Find me here</h1>
    <div class="is-flex is-flex-direction-column">
      <a
        v-for="(contactItem, contactName) in contacts.Contacts"
        :key="contactName"
        :href="contactItem.Src"
        target="blank"
      >
        <b-taglist class="is-flex-wrap-nowrap" attached>
          <b-tag type="is-dark">
            <b-icon
              :icon="contactItem.Icon"
            />
          </b-tag>
          <b-tag type="is-dark">
            {{ contactItem.Title }}
          </b-tag>
        </b-taglist>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contacts: require("~/data/contacts.json")
    };
  }
};
</script>

<style lang="scss" scoped>
    #contacts {
        margin-top: $offsetVal + px;
        margin: #{$offsetVal + px} 0 0 0;
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
        margin: #{$offsetVal / 2 + px} #{$offsetVal / 2 + px};

        a {
          margin-bottom: $offsetVal / 3 + px;
          width: fit-content;

          &:last-child {
            margin-bottom: 0;
          }
        }

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
