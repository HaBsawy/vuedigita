<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-2 col-md-4">
          <h3>CATEGORIES</h3>
          <ul>
            <li>
              <a>Outfits</a>
            </li>
            <li>
              <a>Sunglasses</a>
            </li>
            <li>
              <a>Watches</a>
            </li>
            <li>
              <a>Bags</a>
            </li>
            <li>
              <a>Belts</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-4">
          <h3>INFORMATION</h3>
          <ul>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
            <li>
              <a>Sitemap</a>
            </li>
            <li>
              <a>FAQs Page</a>
            </li>
            <li>
              <a>Comming Soon</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-4">
          <h3>MY ACCOUNT</h3>
          <ul>
            <li>
              <a>Orders</a>
            </li>
            <li>
              <a>Downloads</a>
            </li>
            <li>
              <a>Addresses</a>
            </li>
            <li>
              <a>Account Details</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6">
          <h3>STORE INFORMATION</h3>
          <div class="row">
            <div class="col-2">
              <font-awesome-icon :icon="faMapMarkerAlt" fixedWidth />
            </div>
            <div class="col-10">
              B-14 Collins Street West Victoria 2386
            </div>
          </div>
          <div class="row">
            <div class="col-2">
              <font-awesome-icon :icon="faMobile" fixedWidth />
            </div>
            <div class="col-10">
              0123456789
            </div>
          </div>
          <div class="row">
            <div class="col-2">
              <font-awesome-icon :icon="faEnvelope" fixedWidth />
            </div>
            <div class="col-10">
              Contact@yourcompany.com
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <h3>FOLLOW US</h3>
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
          <h3>NEWSLETTER</h3>
          <form>
            <input type="email" placeholder="Email" />
            <button>
              <font-awesome-icon :icon="faInbox" fixedWidth />
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="container">
        Copyright © 2018 demo All Rights Reserved.
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default {
  data() {
    return {
      faMapMarkerAlt: faMapMarkerAlt,
      faMobile: faMobile,
      faEnvelope: faEnvelope,
      faInbox: faInbox,
      faFacebookF: faFacebookF,
      faTwitter: faTwitter,
      faGooglePlusG: faGooglePlusG,
      faYoutube: faYoutube,
      faInstagram: faInstagram
    };
  },

  components: {
    FontAwesomeIcon
  }
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #111;
  padding-top: 50px;
  color: #eee;
  text-align: left;

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    color: #bbb;
    margin-bottom: 30px;

    &.social {
      li {
        display: inline-block;

        a {
          display: block;
          width: 30px;
          height: 30px;
          color: #fff;
          margin-right: 10px;
          text-align: center;
          line-height: 30px;
          border-radius: 50%;
        }
      }
    }
  }

  .row:last-of-type {
    margin-bottom: 30px;
  }

  form {
    input {
      width: calc(100% - 50px);
      padding: 5px 20px;
      border: none;
      border-radius: 20px 0 0 20px;
    }

    button {
      width: 50px;
      padding: 5px 0;
      border: none;
      border-radius: 0 20px 20px 0;
      background-color: #317ae1;
      color: #fff;
    }
  }

  .copyright {
    padding: 10px 0;
    background-color: #1a1a1a;
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
</style>
