<template>
  <div>
    <header id="header">
      <nav class="container is-max-desktop is-flex is-justify-content-space-between is-align-content-center">
        <div class="is-flex">
          <nuxt-link to="/" class="home is-flex is-align-items-center">
            <b-icon
              icon="home"
            />
            <span>J4stEu - Just Eugene</span>
          </nuxt-link>
          <div class="menu is-flex is-align-items-center">
            <nuxt-link to="/works">
              Works
            </nuxt-link>
            <nuxt-link to="/posts">
              Posts
            </nuxt-link>
            <nuxt-link to="/source">
              Source
            </nuxt-link>
          </div>
        </div>
        <div class="themeMode is-flex is-align-items-center">
          NM
        </div>
      </nav>
    </header>
    <!-- <Avatar /> -->
    <Nuxt />
  </div>
</template>

<script>
// import Avatar from "~/components/Avatar.vue";
export default {
  // components: {
  //   Avatar
  // }
};
</script>

<style lang="scss" scoped>
    #header {
        z-index: 1;
        position: fixed;
        top: 0;
        width: 100%;
        height: $offsetVal * 2 + px;
        // background: rgba(237, 216, 52, 0.2);
        background: rgba(34, 32, 76, 0.2);
        backdrop-filter: blur(10px);

        nav {
            height: 100%;
        }

        .home, .themeMode {
            margin: $offsetVal + px;
            color: black;
            font-weight: bold;
        }

        .menu {
            a {
                margin: $offsetVal / 2 + px;
                color: black;
                border-bottom: 2px solid rgba(0, 0, 0, 0);

                &:first-child {
                    margin-left: 0;
                }

                &:hover {
                  border-bottom: 2px solid $purple;
                }

                button {
                    border-color: $brown;
                    color: $brown;
                }
            }
        }
    }
</style>
