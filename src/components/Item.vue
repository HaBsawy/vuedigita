<template>
  <div class="item">
    <div class="img">
      <img :src="fullPathImg" />
      <div class="stars">
        <font-awesome-icon
          class="golden"
          :icon="faStar"
          v-for="star in ratedStars"
          :key="'c' + star"
        />
        <font-awesome-icon
          :icon="faStar"
          v-for="star in unRatedStars"
          :key="'d' + star"
        />
      </div>
    </div>
    <div class="body">
      <h4>
        <router-link :to="{ name: 'ItemDetails', params: { id: item.id } }">{{
          item.name
        }}</router-link>
      </h4>
      <h5>{{ item.price }}</h5>
      <ul class="icons">
        <li>
          <a href=""><font-awesome-icon :icon="faEye" fixedWidth/></a>
        </li>
        <li>
          <a href=""><font-awesome-icon :icon="faHeart" fixedWidth/></a>
        </li>
        <li>
          <a href=""><font-awesome-icon :icon="faShoppingBag" fixedWidth/></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

export default {
  data() {
    return {
      faStar: faStar,
      faStarHalf: faStarHalf,
      faEye: faEye,
      faHeart: faHeart,
      faShoppingBag: faShoppingBag
    };
  },
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    FontAwesomeIcon
  },
  computed: {
    ratedStars() {
      let stars = [];
      for (let i = 1; i <= this.item.rate; i++) {
        stars.push(i);
      }

      return stars;
    },
    unRatedStars() {
      let stars = [];
      for (let i = 1; i <= 5 - this.item.rate; i++) {
        stars.push(i);
      }

      return stars;
    },
    fullPathImg() {
      return require("../assets/" + this.item.image + ".jpg");
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  border: 1px solid #ddd;
  margin-bottom: 30px;

  .img {
    position: relative;
    margin-bottom: 20px;

    img {
      width: 100%;
    }

    .stars {
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      color: #ddd;

      .golden {
        color: goldenrod;
      }
    }
  }

  .body {
    position: relative;
    padding-bottom: 20px;

    h4 {
      font-size: 20px;
      font-weight: bold;
    }

    h5 {
      font-size: 16px;
      margin: 10px 0;
    }

    ul {
      opacity: 0;
      position: absolute;
      background-color: #fff;
      list-style: none;
      width: 100%;
      bottom: 20px;
      left: 0;
      padding: 0;
      margin: 0;
      transition: 1s all ease;

      li {
        display: inline-block;

        a {
          display: block;
          padding: 4px 6px;
          margin: 2px 5px;
          background-color: #333;
          color: #fff;
        }
      }
    }
  }

  &:hover {
    .body ul {
      opacity: 1;
    }
  }
}
</style>
