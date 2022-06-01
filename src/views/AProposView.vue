<template>
  <div class="bg-Noirr grid place-content-center p-2">
    <cardIlkay class="" />
    <cardAxel class="mt-20" />
    <cardMeldryck class="mt-20" />
  </div>
</template>

<script> 

import cardIlkay from "../components/card/cardIlkay.vue";
import cardAxel from "../components/card/cardAxel.vue";
import cardMeldryck from "../components/card/cardMeldryck.vue";

export default {

  components: {
    cardIlkay,
    cardAxel,
    cardMeldryck,
  },
};

</script>