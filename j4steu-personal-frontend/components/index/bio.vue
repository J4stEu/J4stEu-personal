<template>
  <div
    id="bio"
    class="
        container
        is-max-desktop
    "
  >
    <h1>{{ title }}</h1>
    <div>
      <p
        v-for="(event, eventName) in events"
        :key="eventName"
      >
        <strong>{{ event.year }}:</strong>
        <span>{{ event.event }}.</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    events: {
      type: Object,
      default () {
        return {
          year: "1999",
          event: "Born in Chita, Russia"
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
    #bio {
        margin: 0;
        margin-top: $offsetVal + px;
        padding: 0px $offsetVal + px;
        color: black;
    }
    h1 {
        color: black;
        font-weight: bold;
        border-bottom: 2px solid $purple;
        display: inline;
        width: min-content;
    }
    div {
      display: flex;
      flex-direction: column;

      p {
          display: flex;
          margin-top: $offsetVal / 2 + px;
          text-indent: 1em;
          text-align: justify;

          strong {
            min-width: 150px;
            padding-right: $offsetVal / 2 + px;
            white-space: nowrap;
          }

      }
      span {
        text-indent: initial;
      }
    }
</style>
