<template>
  <div>
    <header id="header">
      <nav class="container is-max-desktop is-flex is-justify-content-space-between is-align-content-center">
        <div class="is-flex">
          <nuxt-link to="/" class="home is-flex is-align-items-center">
            <div class="iconContainer">
              <HomeIcon />
            </div>
            <span class="defaultAccent">J4stEu - Just Eugene</span>
            <span class="minMobileAccent">J4stEu</span>
          </nuxt-link>
          <div class="menu is-flex is-align-items-center">
            <!-- <nuxt-link to="/posts" :class="{routeAccent: currentRouteName === 'posts'}"> -->
            <!--   Posts -->
            <!-- </nuxt-link> -->
            <nuxt-link to="/source" :class="{routeAccent: currentRouteName === 'source'}">
              Source
            </nuxt-link>
          </div>
          <div class="language is-flex is-align-items-center" @click="changeLanguage()">
            eng/rus
          </div>
        </div>
        <div class="is-flex is-align-items-center">
          <div class="mobileMenuContainer is-flex is-align-items-center">
            <b-dropdown aria-role="list" position="is-bottom-left" :mobile-modal="false">
              <template #trigger="{ active }">
                <div class="is-flex is-align-items-center">
                  <div class="dropDownMenuIcon iconContainer">
                    <DropDownMenuIcon />
                  </div>
                  <p
                    class="mobileMenu"
                    :icon-right="active ? 'menu-up' : 'menu-down'"
                  >
                    Menu
                  </p>
                </div>
              </template>
              <!-- <client-only> -->
              <!--   <nuxt-link to="/posts"> -->
              <!--     <b-dropdown-item aria-role="listitem"> -->
              <!--       <p :class="{mobileRouteAccent: currentRouteName === 'posts'}"> -->
              <!--         Posts -->
              <!--       </p> -->
              <!--     </b-dropdown-item> -->
              <!--   </nuxt-link> -->
              <!-- </client-only> -->
              <client-only>
                <nuxt-link to="/source">
                  <b-dropdown-item aria-role="listitem">
                    <p :class="{mobileRouteAccent: currentRouteName === 'source'}">
                      Source
                    </p>
                  </b-dropdown-item>
                </nuxt-link>
              </client-only>
            </b-dropdown>
          </div>
        </div>
      </nav>
    </header>
    <Nuxt />
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import { useAppStore } from "@/store/useAppStore";
import HomeIcon from "@/assets/icons/iconmonstr-home-6.svg";
import DropDownMenuIcon from "@/assets/icons/iconmonstr-arrow-31.svg";
export default {
  components: {
    HomeIcon,
    DropDownMenuIcon
  },
  methods: {
    ...mapActions(useAppStore, ["changeLanguage"])
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
        background: rgba(34, 32, 76, 0.2);
        backdrop-filter: blur(10px);

        @supports not (backdrop-filter: blur(10px)) {
          background: rgba(34, 32, 76, 0.3);
        }

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

        .language {
            @media screen and (min-width:0px) and (max-width:546px) {
                margin: 0;
            }

            margin: $offsetVal / 2 + px;
            cursor: pointer;
            color: $purple;
            font-weight: bold;
        }

        .mobileMenuContainer {
          margin: $offsetVal + px;
          color: black;
          cursor: pointer;

          @media screen and (min-width:547px) {
            display: none !important;
          }

          .dropDownMenuIcon {
            svg {
                transform: rotate(90deg);
            }
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
    .mobileRouteAccent {
      color: $purple !important;
    }
</style>
