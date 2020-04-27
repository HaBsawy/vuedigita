<template>
  <div class="items">
    <div class="container">
      <h2>TOP CATEGORIES</h2>
      <ul class="under-line">
        <li class="line"></li>
        <li class="circle"></li>
        <li class="line"></li>
      </ul>
      <ul class="tabs">
        <li
          :class="{ active: tab == 'JEWELLERY', tab: tab }"
          @click="changeTab('JEWELLERY')"
        >
          JEWELLERY
        </li>
        <li
          :class="{ active: tab == 'ACCESSORIES', tab: tab }"
          @click="changeTab('ACCESSORIES')"
        >
          ACCESSORIES
        </li>
        <li
          :class="{ active: tab == 'FASHION', tab: tab }"
          @click="changeTab('FASHION')"
        >
          FASHION
        </li>
        <li
          :class="{ active: tab == 'OUTFITS', tab: tab }"
          @click="changeTab('OUTFITS')"
        >
          OUTFITS
        </li>
      </ul>
      <div :class="{ active: tab == 'JEWELLERY', 'tab-body': tab }">
        <div class="row">
          <div v-for="item in JEWELLERY" :key="'g' + item.id" class="col-md-4">
            <Item :item="item" />
          </div>
        </div>
      </div>
      <div :class="{ active: tab == 'ACCESSORIES', 'tab-body': tab }">
        <div class="row">
          <div
            v-for="item in ACCESSORIES"
            :key="'h' + item.id"
            class="col-md-4"
          >
            <Item :item="item" />
          </div>
        </div>
      </div>
      <div :class="{ active: tab == 'FASHION', 'tab-body': tab }">
        <div class="row">
          <div v-for="item in FASHION" :key="'i' + item.id" class="col-md-4">
            <Item :item="item" />
          </div>
        </div>
      </div>
      <div :class="{ active: tab == 'OUTFITS', 'tab-body': tab }">
        <div class="row">
          <div v-for="item in OUTFITS" :key="'j' + item.id" class="col-md-4">
            <Item :item="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Item from "@/components/Item";
import items from "../json/items.json";

export default {
  data() {
    return {
      tab: "JEWELLERY"
    };
  },
  components: {
    Item
  },
  methods: {
    changeTab: function(v) {
      this.tab = v;
    }
  },
  computed: {
    JEWELLERY: function() {
      let category = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].category == "JEWELLERY") {
          category.push(items[i]);
        }
      }
      return category.splice(1, 6);
    },
    ACCESSORIES: function() {
      let category = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].category == "ACCESSORIES") {
          category.push(items[i]);
        }
      }
      return category.splice(1, 6);
    },
    FASHION: function() {
      let category = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].category == "FASHION") {
          category.push(items[i]);
        }
      }
      return category.splice(1, 6);
    },
    OUTFITS: function() {
      let category = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].category == "OUTFITS") {
          category.push(items[i]);
        }
      }
      return category.splice(1, 6);
    }
  }
};
</script>

<style lang="scss" scoped>
.items {
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

  .tabs {
    list-style: none;
    margin: 0 0 20px;
    padding: 0;

    .tab {
      display: inline-block;
      cursor: pointer;
      padding: 5px 20px;
      font-size: 15px;
      font-weight: bold;
      transition: 1s all ease;

      &.active {
        color: #317ae1;
      }
    }
  }

  .tab-body {
    display: none;

    &.active {
      display: block;
    }
  }
}
</style>
