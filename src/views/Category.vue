<template>
  <div class="category">
    <div class="container">
      <div class="row">
        <div
          v-for="item in selectedItems"
          :key="'f' + item.id"
          class="col-md-4"
        >
          <Item :item="item" />
        </div>
      </div>
      <div class="paginate">
        <ul>
          <li v-if="page !== allPage"><a @click="paginate('next')">Next</a></li>
          <li v-for="page in pages" :key="'e' + page">
            <a @click="paginate(page)">{{ page }}</a>
          </li>
          <li v-if="page !== 1"><a @click="paginate('prev')">Previous</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Item from "@/components/Item";
import items from "../json/items.json";
export default {
  name: "Category",
  data() {
    return {
      items: items,
      page: 1,
      perPage: 9
    };
  },
  methods: {
    paginate: function(v) {
      if (v == "next") {
        this.page++;
      } else if (v == "prev") {
        this.page--;
      } else {
        this.page = v;
      }
    }
  },
  computed: {
    category: function() {
      let category = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].category == this.$route.params.category) {
          category.push(items[i]);
        }
      }
      return category;
    },
    selectedItems: function() {
      let lowLimit = (this.page - 1) * this.perPage,
        highLimit = this.page * this.perPage;

      return this.category.slice(lowLimit, highLimit);
    },
    allPage: function() {
      return Math.ceil(this.category.length / this.perPage);
    },
    pages: function() {
      let pages = [],
        array = [-2, -1, 0, 1, 2];
      for (let i = 0; i < array.length; i++) {
        let page = this.page + array[i];
        if (page > 0 && page <= this.allPage) {
          pages.push(page);
        }
      }
      return pages;
    }
  },
  components: {
    Item
  },
  watch: {
    page() {
      this.selectedItems;
    }
  }
};
</script>

<style lang="scss" scoped>
.paginate {
  ul {
    list-style: none;

    li {
      display: inline-block;

      a {
        background-color: #317ae1;
        color: #fff;
        padding: 5px 10px;
        margin: 0 5px;
        cursor: pointer;
        border-radius: 3px;
      }
    }
  }
}
</style>
