<template>
  <div class="item">
    <div class="row">
      <div class="col-md-5">
        <div class="img">
          <img :src="fullPathImg" />
        </div>
      </div>
      <div class="col-md-7">
        <h3>{{ item.name }}</h3>
        <div class="stars">
          <font-awesome-icon
            class="golden"
            :icon="faStar"
            v-for="star in ratedStars"
            :key="'a' + star"
          />
          <font-awesome-icon
            :icon="faStar"
            v-for="star in unRatedStars"
            :key="'b' + star"
          />
          (1 customer review)
        </div>
        <h3>{{ item.price }}</h3>
        <p>
          Lorem Ipsum has been the industry’s standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <h6>{{ item.stock }} in stock</h6>
        <form>
          <input type="number" value="1" />
          <button>Add To Cart</button>
        </form>
        <ul>
          <li>
            <a href=""><font-awesome-icon :icon="faHeart" /> Add To Wishlist</a>
          </li>
        </ul>
        <ul>
          <li><strong>SKU: </strong></li>
          <li>PRD11</li>
        </ul>
        <ul>
          <li><strong>Categories: </strong></li>
          <li>
            <a href="">{{ item.category }}</a>
          </li>
        </ul>
        <ul>
          <li><strong>Tags: </strong></li>
          <li><a href="">Lorem</a></li>
          ,
          <li><a href="">Quisque</a></li>
          ,
        </ul>
        <ul>
          <li><strong>Brand: </strong></li>
          <li><a href="">Retro</a></li>
        </ul>
        <ul class="social">
          <li>
            <a href="" class="facebook">
              <font-awesome-icon :icon="faFacebookF" fixedWidth />
            </a>
          </li>
          <li>
            <a href="" class="twitter">
              <font-awesome-icon :icon="faTwitter" fixedWidth />
            </a>
          </li>
          <li>
            <a href="" class="googlePlus">
              <font-awesome-icon :icon="faGooglePlusG" fixedWidth />
            </a>
          </li>
          <li>
            <a href="" class="youtube">
              <font-awesome-icon :icon="faYoutube" fixedWidth />
            </a>
          </li>
          <li>
            <a href="" class="instagram">
              <font-awesome-icon :icon="faInstagram" fixedWidth />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="tabs-container">
      <ul class="tabs">
        <li
          @click="ChangeTab('Description')"
          :class="{ active: tab == 'Description' }"
        >
          DESCRIPTION
        </li>
        <li
          @click="ChangeTab('Add-info')"
          :class="{ active: tab == 'Add-info' }"
        >
          ADDITIONAL INFORMATION
        </li>
        <li @click="ChangeTab('Reviews')" :class="{ active: tab == 'Reviews' }">
          REVIEWS(1)
        </li>
      </ul>
      <div :class="{ active: tab == 'Description', 'tab-body': tab }">
        <p>{{ item.description }}</p>
      </div>
      <div :class="{ active: tab == 'Add-info', 'tab-body': tab }">
        <div class="table-responsive">
          <table class="table border">
            <tr>
              <th>Weight</th>
              <td>10 kg</td>
            </tr>
            <tr>
              <th>Dimensions</th>
              <td>5 × 5 × 5 cm</td>
            </tr>
          </table>
        </div>
      </div>
      <div :class="{ active: tab == 'Reviews', 'tab-body': tab }">
        <div class="row">
          <div class="col-md-6">
            <h2>3.00</h2>
            <div class="stars">
              <font-awesome-icon class="golden" :icon="faStar" />
              <font-awesome-icon class="golden" :icon="faStar" />
              <font-awesome-icon class="golden" :icon="faStar" />
              <font-awesome-icon :icon="faStar" />
              <font-awesome-icon :icon="faStar" />
            </div>
            <h4>(1 customer review)</h4>
            <div class="reviews-details">
              <div class="row">
                <div class="col-3">
                  <font-awesome-icon :icon="faStar" />
                  <font-awesome-icon :icon="faStar" />
                  <font-awesome-icon :icon="faStar" />
                  <font-awesome-icon :icon="faStar" />
                  <font-awesome-icon :icon="faStar" />
                </div>
                <div class="col-8">
                  <div class="progress">
                    <div class="progress-o"></div>
                  </div>
                </div>
                <div class="col-1">
                  <strong>5</strong>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <font-awesome-icon :icon="faStar" />
                  <font-awesome-icon :icon="faStar" />
                  <font-awesome-icon :icon="faStar" />
                  <font-awesome-icon :icon="faStar" />
                </div>
                <div class="col-8">
                  <div class="progress">
                    <div class="progress-o"></div>
                  </div>
                </div>
                <div class="col-1">
                  <strong>4</strong>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <font-awesome-icon :icon="faStar" />
                  <font-awesome-icon :icon="faStar" />
                  <font-awesome-icon :icon="faStar" />
                </div>
                <div class="col-8">
                  <div class="progress">
                    <div class="progress-o" style="width: 100%"></div>
                  </div>
                </div>
                <div class="col-1">
                  <strong>3</strong>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <font-awesome-icon :icon="faStar" />
                  <font-awesome-icon :icon="faStar" />
                </div>
                <div class="col-8">
                  <div class="progress">
                    <div class="progress-o"></div>
                  </div>
                </div>
                <div class="col-1">
                  <strong>2</strong>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <font-awesome-icon :icon="faStar" />
                </div>
                <div class="col-8">
                  <div class="progress">
                    <div class="progress-o"></div>
                  </div>
                </div>
                <div class="col-1">
                  <strong>1</strong>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <h4>SUBMIT YOUR REVIEW</h4>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
            <form>
              <label for="">Your rating of this product</label>
              <div class="stars">
                <font-awesome-icon :icon="faStar" />
                <font-awesome-icon :icon="faStar" />
                <font-awesome-icon :icon="faStar" />
                <font-awesome-icon :icon="faStar" />
                <font-awesome-icon :icon="faStar" />
              </div>
              <textarea placeholder="Wright your review here..."></textarea>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <button>Submit Review</button>
            </form>
          </div>
        </div>
        <div class="reviews">
          <h3>1 REVIEW FOR THIS PRODUCT</h3>
          <div class="review">
            <div class="stars">
              <font-awesome-icon :icon="faStar" />
              <font-awesome-icon :icon="faStar" />
              <font-awesome-icon :icon="faStar" />
              <font-awesome-icon :icon="faStar" />
              <font-awesome-icon :icon="faStar" />
            </div>
            <strong>Admin</strong>-
            <span>Dec 23, 2019</span>
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="top-items">
      <h2>TOP ITEMS</h2>
      <ul class="under-line">
        <li class="line"></li>
        <li class="circle"></li>
        <li class="line"></li>
      </ul>
      <div class="row">
        <div class="col-md-4">
          <Item />
        </div>
        <div class="col-md-4">
          <Item />
        </div>
        <div class="col-md-4">
          <Item />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Item from "@/components/Item";

export default {
  data() {
    return {
      tab: "Description",
      faStar: faStar,
      faHeart: faHeart,
      faFacebookF: faFacebookF,
      faTwitter: faTwitter,
      faGooglePlusG: faGooglePlusG,
      faYoutube: faYoutube,
      faInstagram: faInstagram
    };
  },

  methods: {
    ChangeTab: function(v) {
      this.tab = v;
    }
  },
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    FontAwesomeIcon,
    Item
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
      return require("../../assets/" + this.item.image + ".jpg");
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  text-align: left;

  .img {
    border: 1px solid #ddd;

    img {
      width: 100%;
    }
  }

  h3 {
    font-size: 24px;
    font-weight: bold;
    margin: 0 0 10px;
  }

  .stars {
    margin: 0 0 10px;
    color: #ccc;

    .golden {
      color: goldenrod;
    }

    span {
      margin-left: 5px;
      color: #2c3e50;
    }
  }

  p {
    color: #777;
  }

  h6 {
    font-size: 14px;
    color: #77a464;
    margin: 10px 0;
  }

  form {
    padding: 20px;
    background-color: #fafafa;

    input {
      width: 80px;
      padding: 5px 10px;
      border: 1px solid #aaa;
    }

    button {
      background-color: #111;
      color: #fff;
      padding: 5px 10px;
      border: 1px solid #111;
      margin-left: 10px;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 10px 0;

    li {
      display: inline-block;
      font-size: 14px;

      strong {
        margin-right: 10px;
      }

      a {
        color: #777;
        transition: 1s all ease;

        &:hover {
          text-decoration: none;
          color: blue;
        }
      }
    }
  }

  .social {
    li a {
      display: block;
      width: 30px;
      height: 30px;
      color: #fff;
      margin-right: 10px;
      text-align: center;
      line-height: 30px;
      border-radius: 3px;
    }
  }

  .tabs-container {
    border: 1px solid #ddd;
    margin: 30px 0;

    .tabs {
      padding: 0;
      border-bottom: 1px solid #ddd;
      margin: 0;

      li {
        padding: 15px 0;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        margin: 0 25px;

        &.active {
          color: #317ae1;
          border-bottom: 2px solid #317ae1;
        }
      }
    }

    .tab-body {
      display: none;
      padding: 0 25px;

      &.active {
        display: block;
      }

      p {
        padding: 10px 0;
      }

      table {
        margin: 10px 0;
        max-width: 100%;
      }

      h2 {
        font-size: 40px;
        font-weight: bold;
        color: #317ae1;
        margin: 10px 0 0;
      }

      h4 {
        font-size: 16px;
        margin: 20px 0 0;
      }

      .reviews-details {
        margin-top: 30px;
        font-size: 7px;

        .progress {
          .progress-o {
            background-color: #317ae1;
          }
        }

        strong {
          font-size: 14px;
        }
      }

      p {
        font-size: 14px;
      }

      form {
        background-color: transparent;
        padding: 0;

        label {
          font-size: 14px;
        }

        textarea {
          width: 100%;
          height: 120px;
          padding: 5px 10px;
          border: 1px solid #ddd;
          font-size: 14px;
        }

        input {
          width: 45%;
          padding: 5px 10px;
          border: 1px solid #ddd;
          font-size: 14px;

          &:first-of-type {
            margin-right: 10%;
          }
        }

        button {
          margin: 10px 0;
          font-size: 14px;
        }
      }

      h3 {
        font-size: 16px;
        font-weight: bold;
        margin: 20px 0 0;
      }

      .review {
        border: 1px solid #ddd;
        padding: 20px;
        margin: 20px 0;
        .stars {
          display: inline-block;
          margin-right: 10px;
        }

        strong,
        span {
          font-size: 14px;
          margin-right: 5px;
        }

        p {
          padding: 0;
        }
      }
    }
  }

  .facebook {
    background-color: #3b5999;
  }

  .twitter {
    background-color: #00aced;
  }

  .googlePlus {
    background-color: #dc473b;
  }

  .youtube {
    background-color: #d12121;
  }

  .instagram {
    background-color: #e4405f;
  }
}

.top-items {
  padding: 50px 0;
  text-align: center !important;

  h2 {
    font-size: 28px;
    font-weight: bold;
    margin: 0;
  }
  .under-line {
    list-style: none;
    margin: 0 0 20px;
    padding: 0;

    li {
      display: inline-block;

      &.line {
        width: 30px;
        height: 2px;
        background-color: #111;
      }

      &.circle {
        width: 4px;
        height: 4px;
        background-color: #111;
        margin: 0 15px;
        border-radius: 50%;
      }
    }
  }
}
</style>
