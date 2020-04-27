<template>
  <div class="features">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="circle">
            <font-awesome-icon :icon="faShuttleVan" />
          </div>
          <h3>DISCOUNTS EVERYDAY</h3>
          <p>Get Discount In Selected Items</p>
        </div>
        <div class="col-md-4">
          <div class="circle">
            <font-awesome-icon :icon="faPiggyBank" />
          </div>
          <h3>MONEY BACK GUARANTEE</h3>
          <p>Get 100% Money Within 30 Days</p>
        </div>
        <div class="col-md-4">
          <div class="circle">
            <font-awesome-icon :icon="faUserCog" />
          </div>
          <h3>FREE SHIPPING WORLDWIDE</h3>
          <p>Order Above 500$ Only</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faShuttleVan } from "@fortawesome/free-solid-svg-icons";
import { faPiggyBank } from "@fortawesome/free-solid-svg-icons";
import { faUserCog } from "@fortawesome/free-solid-svg-icons";

export default {
  data() {
    return {
      faShuttleVan: faShuttleVan,
      faPiggyBank: faPiggyBank,
      faUserCog: faUserCog
    };
  },

  components: {
    FontAwesomeIcon
  }
};
</script>

<style lang="scss" scoped>
.features {
  padding: 50px 0 10px;

  .circle {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    box-shadow: 0 0 5px #bbb;
    margin: 0 auto 20px;
    line-height: 120px;
    font-size: 50px;
    color: #777;
    transition: 1s all ease;
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
    color: #777;
    transition: 1s all ease;
  }

  p {
    color: #777;
    margin-bottom: 40px;
  }

  .col-md-4:hover {
    .circle {
      color: #111;
    }

    h3 {
      color: #111;
    }
  }

  @media (max-width: 767px) {
    h3 {
      font-size: 18px;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    h3 {
      font-size: 14px;
    }
  }
}
</style>
