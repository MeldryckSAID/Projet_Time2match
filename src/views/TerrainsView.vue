<template>
  <header>
    <MenuView />
  </header>
  <main class="min-h-screen bg-Noirr text-Blancc">
<div class="flex justify-end -z-10 py-5">
<Barre_droite></Barre_droite>
</div>
    
<div class="flex justify-start -z-10 py-10">
 <Barre_gauche></Barre_gauche>
</div>
     



      
    
    
  </main>

  <footer>
    <FooterView></FooterView>
  </footer>
</template>

<script>
import MenuView from "../components/MenuView.vue";
import FooterView from "../components/FooterView.vue";

import Barre_droite from "../components/barre/barre_droite.vue";
import Barre_gauche from "../components/barre/barre_gauche.vue";


export default {

  components: {
    MenuView,
    FooterView,
    Barre_droite,
    Barre_gauche,
 
},
  
};
</script>
