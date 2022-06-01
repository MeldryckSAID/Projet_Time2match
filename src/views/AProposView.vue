<template>
<header>
  <MenuView/>
</header>
<main>
  <div class="grid place-content-center bg-Noirr p-2">
    <cardIlkay class="" />
    <cardAxel class="mt-20" />
    <cardMeldryck class="mt-20" />
  </div>
</main>
  
</template>

<script>
import cardIlkay from "../components/card/cardIlkay.vue";
import cardAxel from "../components/card/cardAxel.vue";
import cardMeldryck from "../components/card/cardMeldryck.vue";
import MenuView from "../components/MenuView.vue";

export default {
  components: {
    cardIlkay,
    cardAxel,
    cardMeldryck,
    MenuView,
  },
};
</script>
