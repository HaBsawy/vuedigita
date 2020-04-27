<template>
  <div class="item-details">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <ItemAside />
        </div>
        <div class="col-md-8">
          <ItemInfo :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItemAside from "@/components/item-details/ItemAside";
import ItemInfo from "@/components/item-details/ItemInfo";
import items from "../json/items.json";

export default {
  name: "ItemDetails",
  components: {
    ItemAside,
    ItemInfo
  },
  computed: {
    item: function() {
      for (let i = 0; i < items.length; i++) {
        if (items[i].id == this.$route.params.id) {
          return items[i];
        }
      }
      return undefined;
    }
  }
};
</script>
