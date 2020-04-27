<template>
  <div class="item">
    <div class="row">
      <div class="col-sm-4">
        <div class="img">
          <img src="../../assets/item.jpg" />
        </div>
      </div>
      <div class="col-sm-8">
        <h5>Velit feugiat quam</h5>
        <div class="stars">
          <font-awesome-icon class="golden" :icon="faStar" />
          <font-awesome-icon class="golden" :icon="faStar" />
          <font-awesome-icon class="golden" :icon="faStar" />
          <font-awesome-icon class="golden" :icon="faStar" />
          <font-awesome-icon :icon="faStar" />
        </div>
        <h6>70.00$ - <span>80.00$</span></h6>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default {
  data() {
    return {
      faStar: faStar
    };
  },

  components: {
    FontAwesomeIcon
  }
};
</script>

<style lang="scss" scoped>
.item {
  text-align: left;
  padding: 20px;
  .img {
    border: 1px solid #ddd;

    img {
      width: 100%;
    }
  }

  h5 {
    font-size: 14px;
    font-weight: bold;
    margin: 0;
  }

  .stars {
    color: #ccc;

    .golden {
      color: goldenrod;
    }
  }

  h6 {
    font-size: 14px;

    span {
      text-decoration: line-through;
    }
  }
}
</style>
