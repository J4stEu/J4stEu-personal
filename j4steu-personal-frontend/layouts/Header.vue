<template>
  <div>
    <header id="header">
      <nav class="container is-max-desktop is-flex is-justify-content-space-between is-align-content-center">
        <div class="is-flex">
          <nuxt-link to="/" class="home is-flex is-align-items-center">
            <b-icon
              icon="home"
            />
            <span class="defaultAccent">J4stEu - Just Eugene</span>
            <span class="minMobileAccent">J4stEu</span>
          </nuxt-link>
          <div class="menu is-flex is-align-items-center">
            <!-- <nuxt-link to="/works" :class="{routeAccent: currentRouteName === 'Works'}">
              Works
            </nuxt-link>
            <nuxt-link to="/posts" :class="{routeAccent: currentRouteName === 'Posts'}">
              Posts
            </nuxt-link> -->
            <nuxt-link to="/source" :class="{routeAccent: currentRouteName === 'Source'}">
              Source
            </nuxt-link>
          </div>
        </div>
        <div class="is-flex is-align-items-center">
          <div class="mobileMenuContainer is-flex is-align-items-center">
            <b-dropdown aria-role="list" position="is-bottom-left" :mobile-modal="false">
              <template #trigger="{ active }">
                <div class="is-flex is-align-items-center">
                  <b-icon
                    icon="chevron-double-down"
                  />
                  <p
                    class="mobileMenu"
                    :icon-right="active ? 'menu-up' : 'menu-down'"
                  >
                    Menu
                  </p>
                </div>
              </template>
              <!-- <b-dropdown-item aria-role="listitem">
                <nuxt-link to="/works" :class="{routeMobileAccent: currentRouteName === 'Works'}">
                  Works
                </nuxt-link>
              </b-dropdown-item>
              <b-dropdown-item aria-role="listitem">
                <nuxt-link to="/posts" :class="{routeMobileAccent: currentRouteName === 'Works'}">
                  Posts
                </nuxt-link>
              </b-dropdown-item> -->
              <b-dropdown-item aria-role="listitem">
                <nuxt-link to="/source" :class="{routeMobileAccent: currentRouteName === 'Works'}">
                  Source
                </nuxt-link>
              </b-dropdown-item>
            </b-dropdown>
          </div>
          <!-- <div class="themeMode">
            NM
          </div> -->
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
  head () {
    return {
      title: "J4stEu Personal"
    };
  },
  computed: {
    currentRouteName () {
      return this.$route.name;
    }
  }
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
            @media screen and (min-width:0px) and (max-width:546px) {
              display: none !important;
            }

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

        .mobileMenuContainer {
          margin: $offsetVal + px;
          color: black;
          cursor: pointer;

          @media screen and (min-width:547px) {
            display: none !important;
          }

          a {
            color: black;
          }
        }

        span {
          white-space: nowrap;
        }
    }
    .defaultAccent {
      @media screen and (min-width:0px) and (max-width: 453px) {
        display: none !important;
      }
    }
    .minMobileAccent {
      @media screen and (min-width: 453px) {
        display: none !important;
      }
    }
    .routeAccent {
      border-bottom: 2px solid $purple !important;
    }
</style>
