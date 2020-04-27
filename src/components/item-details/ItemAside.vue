<template>
  <div class="aside">
    <div class="categories">
      <h3>PRODUCT CATEGORIES</h3>
      <hr />
      <ul>
        <li><a href="">Accessories</a></li>
        <li><a href="">Electronic</a></li>
        <li><a href="">Fashion</a></li>
        <li><a href="">Shoes</a></li>
        <li><a href="">Uncategorized</a></li>
      </ul>
    </div>
    <div class="offer">
      <h3>SALE PRODUCTS</h3>
      <hr />
      <SaleItemAside />
      <SaleItemAside />
      <SaleItemAside />
      <SaleItemAside />
    </div>
  </div>
</template>

<script>
import SaleItemAside from "@/components/item-details/SaleItemAside.vue";
export default {
  components: {
    SaleItemAside
  }
};
</script>

<style lang="scss" scoped>
.aside {
  .categories,
  .offer {
    border: 1px solid #ddd;
    margin-bottom: 30px;

    h3 {
      padding: 15px 20px;
      font-size: 16px;
      margin: 0;
      text-align: left;
    }

    hr {
      margin: 0 20px;
    }

    ul {
      list-style: none;
      padding: 15px 20px;
      text-align: left;
      margin: 0;

      li a {
        display: block;
        padding: 3px 0;
        color: #888;
        transition: 1s all ease;

        &:hover {
          color: #317ae1;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
