<template>
  <div class="latest-news">
    <div class="container">
      <h2>LATEST NEWS</h2>
      <ul class="under-line">
        <li class="line"></li>
        <li class="circle"></li>
        <li class="line"></li>
      </ul>
      <div class="row">
        <div class="col-md-4">
          <News />
        </div>
        <div class="col-md-4">
          <News />
        </div>
        <div class="col-md-4">
          <News />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import News from "@/components/News";

export default {
  components: {
    News
  }
};
</script>

<style lang="scss" scoped>
.latest-news {
  padding: 50px 0;

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
