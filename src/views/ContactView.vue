<template>
  <header>
    <MenuView />
  </header>
  <main class="min-h-screen bg-Noirr"></main>

  <footer>
    <FooterView></FooterView>
  </footer>
</template>

<script>
import MenuView from "../components/MenuView.vue";
import FooterView from "../components/FooterView.vue";

export default {
  components: {
    MenuView,
    FooterView,
  },
};
</script>
