<template>
  <section
    id="gallery"
    class="
      container
      is-max-desktop
    "
  >
    <h1>More</h1>
    <b-carousel
      :autoplay="false"
      indicator-custom
      :arrow="false"
      :indicator-inside="false"
      :overlay="gallery"
      @click="switchGallery(true)"
    >
      <b-carousel-item v-for="(item, i) in 7" :key="i">
        <a class="image ">
          <img :src="getImgUrl(i)">
        </a>
      </b-carousel-item>
      <span v-if="gallery" class="modal-close is-large" @click="switchGallery(false)" />
      <template #indicators="props">
        <figure class="al image" :draggable="false">
          <img :draggable="false" :src="getImgUrl(props.i)" :title="props.i + 1">
        </figure>
      </template>
    </b-carousel>
  </section>
</template>

<script>
export default {
  data () {
    return {
      gallery: false
    };
  },
  methods: {
    getImgUrl (value) {
      return require(`@/assets/img/gallery/${value + 1}.jpg`);
    },
    switchGallery (value) {
      this.gallery = value;
      if (value) {
        return document.documentElement.classList.add('is-clipped');
      } else {
        return document.documentElement.classList.remove('is-clipped');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
    #gallery {
        margin-top: $offsetVal + px;
        padding: 0 $offsetVal + px;
    }
    h1 {
        font-weight: bold;
        border-bottom: 2px solid $purple;
        display: inline;
        width: min-content;
        margin-bottom: $offsetVal / 2 + px;
    }
    .carousel {

        .carousel-items {

            .carousel-item {
                display: flex;
                justify-content: center;

                img {
                    width: 35vh;
                }
            }
        }
    }
    .is-active .al img {
        border: 1px solid #fff;
        filter: grayscale(0%);
    }
    .al img {
        border: 1px solid transparent;
        filter: grayscale(100%);
    }
</style>
