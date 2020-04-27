<template>
  <div class="home">
    <AppHeader />
    <AppFeatures />
    <TopCategories />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFeatures from "@/components/AppFeatures";
import TopCategories from "@/components/TopCategories";
export default {
  name: "Home",
  components: {
    AppHeader,
    AppFeatures,
    TopCategories
  }
};
</script>
