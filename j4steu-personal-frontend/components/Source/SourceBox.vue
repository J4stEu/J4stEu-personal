<template>
  <div class="box">
    <article class="media">
      <div class="media-left">
        <!-- <figure class="image is-128x128">
          <img :src="require('@/assets/img/j4steu.jpeg')" alt="Image">
        </figure> -->
        <div class="previewImage" />
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>Eugene Nikonov</strong> <br><small>© 2021 J4stEu.</small><br><small>All Rights Reserved.</small><br>
          </p>
          <!-- <div class="contacs-desktop">
            <a href="https://github.com/J4stEu" target="blank">
              <b-taglist attached>
                <b-tag type="is-dark">
                  <b-icon
                    icon="github"
                  />
                </b-tag>
                <b-tag type="is-info">
                  github.com/J4stEu
                </b-tag>
              </b-taglist>
            </a>
            <a href="https://vk.com/id188091326" target="blank">
              <b-taglist attached>
                <b-tag type="is-dark">
                  <b-icon
                    icon="vk"
                  />
                </b-tag>
                <b-tag type="is-info">
                  vk.com/id188091326
                </b-tag>
              </b-taglist>
            </a>
          </div> -->
        </div>
      </div>
    </article>
    <div class="source">
      <div>
        <p>This site stack</p>
        <b-taglist>
          <b-tag type="is-dark">
            Nuxt.js
          </b-tag>
          <b-tag type="is-dark">
            Buefy
          </b-tag>
          <b-tag type="is-dark">
            Python Flask
          </b-tag>
          <b-tag type="is-dark">
            MySQL
          </b-tag>
        </b-taglist>
      </div>
      <div>
        <p>This site source</p>
        <a href="https://github.com/J4stEu/j4steu-personal" target="blank">
          <b-taglist class="is-flex-wrap-nowrap" attached>
            <b-tag type="is-dark">
              <b-icon
                icon="github"
              />
            </b-tag>
            <b-tag type="is-dark">
              J4stEu Personal
            </b-tag>
          </b-taglist>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
    .box {
        position: absolute;
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        border: 3px solid $purple;
        padding: $offsetVal + px;
        margin: $offsetVal + px;
    }
    // img {
    //   border-radius: 6px;
    // }
    // .is-128x128 {
    //   height: auto;
    // }
    .previewImage {
      width: $offsetVal * 3 + px;
      height: $offsetVal * 3 + px;
      // border: 2px solid $purple;
      border-radius: 50%;
      background: url("@/assets/img/j4steu.jpeg");
      background-size: cover;
      background-position: center;
    }
    p {
      margin-top: $offsetVal/3 + px !important;
      span {
        display: flex;
      }
    }
    .content {
      p {
        margin-top: 0 !important;
        // white-space: nowrap;
      }
    }
    .source {
      span {
        display: flex !important;
      }
    }
    .contacs-desktop, .contacs-mobile {
      span {
        display: flex;
      }
      .tags {
        margin: 0;
      }
      .tag {
        cursor: pointer;
      }
    }
    .contacs-desktop {
      display: none;
      @media screen and (min-width:0px) and (max-width:747px){
          display: none;
      }
    }
    .contacs-mobile {
      margin-top: 0.5rem;
      a {
        margin-right: 0.5rem;
      }
    }
</style>
