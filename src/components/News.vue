<template>
  <div class="news">
    <div class="img">
      <img src="../assets/news.jpg" />
    </div>
    <div class="news-body">
      <ul class="new-info">
        <li>
          <font-awesome-icon :icon="faUser" />
          <span>Admin</span>
        </li>
        <li>
          <font-awesome-icon :icon="faCalendar" />
          <span>Dec 23, 2019</span>
        </li>
      </ul>
      <h3 class="title">Answers To Your Questions</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ipsum?
        At et provident aut quibusdam, dolorem exercitationem doloribus eligendi
        alias!
      </p>
    </div>
    <hr />
    <div class="news-footer">
      <div class="comments">
        <font-awesome-icon :icon="faComment" />
        9
      </div>
      <a href="">Read More</a>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";

export default {
  data() {
    return {
      faUser: faUser,
      faCalendar: faCalendar,
      faComment: faComment
    };
  },

  components: {
    FontAwesomeIcon
  }
};
</script>

<style lang="scss" scoped>
.news {
  border: 1px solid #ddd;
  margin-bottom: 30px;

  .img {
    margin-bottom: 20px;

    img {
      width: 100%;
    }
  }

  .news-body {
    .new-info {
      list-style: none;
      text-align: left;
      margin: 0;
      padding: 0;

      li {
        display: inline-block;
        margin: 0 0 10px 20px;
        color: #666;

        span {
          margin-left: 5px;
        }
      }
    }

    .title {
      padding: 5px 20px;
      font-size: 18px;
      font-weight: bold;
      text-align: left;
    }

    p {
      padding: 5px 20px;
      text-align: left;
      color: #666;
    }
  }

  hr {
    margin: 0 20px;
  }

  .news-footer {
    position: relative;

    .comments {
      position: absolute;
      background-color: #f6f6f6;
      border-radius: 5px;
      padding: 5px 10px;
      top: -27px;
      right: 18px;
      color: #666;
    }

    a {
      display: block;
      margin: 10px 0;
      padding: 0 20px;
      text-align: left;
    }
  }
}
</style>
