<template>
  <div class="navbar">
    <div class="logo">
      <img alt="Vue logo" src="../assets/logo1.png" />
    </div>
    <div class="menu-bar" @click="toggleMenu">
      <font-awesome-icon :icon="faBars" />
    </div>
    <ul :class="`nav-menu ${navMenu ? 'show' : ''}`">
      <li><router-link to="/" exact="">HOME</router-link></li>
      <li>
        <router-link
          :to="{ name: 'Category', params: { category: 'JEWELLERY' } }"
          >JEWELLERY</router-link
        >
      </li>
      <li>
        <router-link
          :to="{ name: 'Category', params: { category: 'ACCESSORIES' } }"
          >ACCESSORIES</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'Category', params: { category: 'FASHION' } }"
          >FASHION</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'Category', params: { category: 'OUTFITS' } }"
          >OUTFITS</router-link
        >
      </li>
    </ul>
    <ul class="nav-icon">
      <li>
        <a><font-awesome-icon :icon="faHeart"/></a>
        <span v-if="love">{{ love }}</span>
      </li>
      <li>
        <a><font-awesome-icon :icon="faShoppingBag"/></a>
        <span v-if="shopping">{{ shopping }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default {
  data() {
    return {
      faHeart: faHeart,
      faShoppingBag: faShoppingBag,
      faBars: faBars,
      love: 3,
      shopping: 0,
      navMenu: false
    };
  },

  components: {
    FontAwesomeIcon
  },

  methods: {
    toggleMenu: function() {
      this.navMenu = this.navMenu ? false : true;
      console.log(this.navMenu);
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.navbar {
  overflow: hidden;
  box-shadow: 0 0 5px #ccc;

  .logo {
    float: left;
    width: 200px;

    img {
      width: 100%;
    }
  }

  .menu-bar {
    float: left;
    font-size: 24px;
    display: none;
  }

  .nav-menu {
    float: left;
    list-style: none;
    margin: 0;

    li {
      display: inline-block;

      a {
        display: block;
        padding: 20px 20px;
        font-weight: bold;
        color: #111;
        text-decoration: none;

        &.router-link-active {
          color: #327ae1;
        }
      }
    }
  }

  .nav-icon {
    float: left;
    list-style: none;
    margin: 0;

    li {
      display: inline-block;
      position: relative;

      a {
        display: block;
        padding: 20px 10px;
        font-weight: bold;
        font-size: 24px;
      }

      span {
        position: absolute;
        background-color: #327ae1;
        color: #fff;
        padding: 0 7.5px;
        display: block;
        top: 12px;
        right: -2px;
        border-radius: 50%;
      }
    }
  }

  /* Mobales And Tablets */

  @media (max-width: 767px) {
    .logo {
      width: 150px;
    }

    .menu-bar {
      display: block;
    }

    .nav-menu {
      padding: 0;
      float: none;
      width: 100%;
      text-align: left;
      height: 0;
      transition: 1s all ease;

      &.show {
        height: 215px;
      }

      li {
        display: block;

        a {
          display: block;
          padding: 10px 20px;
          font-weight: bold;
        }
      }
    }

    .nav-icon {
      float: none;
      position: absolute;
      top: -12px;
      right: 50px;

      li span {
        padding: 0 5.5px;
        top: 18px;
        right: 1px;
        font-size: 12px;
      }
    }
  }

  /* Small Screen */

  @media (min-width: 768px) and (max-width: 991px) {
    .nav-menu {
      li a {
        padding: 10px 10px;
      }
    }

    .navbar .nav-icon {
      li a {
        padding: 10px 15px;
      }

      span {
        top: 2px;
        right: 2px;
      }
    }
  }

  /* Meduim Screen */

  @media (min-width: 992px) and (max-width: 1199px) {
  }

  /* Large Screen */

  @media (min-width: 2000px) {
  }
}
</style>
