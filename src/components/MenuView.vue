<template>
  <div class="m-0 flex items-center justify-between bg-Orangee p-0 text-Noirr">
    <div class="flex flex-col hover:border-b-4 hover:border-b-white">
      <RouterLink class="block py-2 px-4" to="/">
        <Logo class="h-[100px] w-[100px]"></Logo>
      </RouterLink>
    </div>

    <div class="flex flex-col hover:border-b-4 hover:border-b-white">
      <RouterLink class="block py-2 px-4" to="/terrains">
        <LogoTerrain></LogoTerrain>
        <h5 class="font-quicksand text-base font-bold uppercase text-Noirr">Trouver <br />Un terrain</h5>
      </RouterLink>
    </div>

    <div class="flex flex-col justify-center hover:border-b-4 hover:border-b-white">
      <RouterLink class="block py-2 px-4" to="/parties">
        <LogoPartie class="text-Noirr"></LogoPartie>
        <h5 class="font-quicksand text-base font-bold uppercase text-Noirr">Trouver <br />Une Partie</h5>
      </RouterLink>
    </div>

    <div class="flex flex-col justify-center hover:border-b-4 hover:border-b-white">
      <RouterLink class="block py-2 px-4" to="/sports">
        <LogoSports class="text-Noirr"></LogoSports>
        <h5 class="font-quicksand text-base font-bold uppercase text-Noirr">Les sports <br />Recencés</h5>
      </RouterLink>
    </div>

      <div class="flex flex-col  hover:border-b-4 hover:border-b-white">
        
      <RouterLink class="block py-2 px-4" to="/partenaires">
        <Logopartenaire></Logopartenaire>
        <h5 class="font-quicksand text-base font-bold uppercase text-Noirr">Partenaires</h5>
      </RouterLink>
    </div>

    <div class="flex flex-col justify-center hover:border-b-4 hover:border-b-white">
      <RouterLink class="block py-2 px-4" to="/partenaires">
        <LogoSeco class="text-Noirr"></LogoSeco>
      </RouterLink>
    </div>

    <RouterView />
  </div>
</template>

<script>
import Logo from "./logo.vue";
import LogoTerrain from "./menu/logoterrain.vue";
import LogoPartie from "./menu/logopartie.vue";
import LogoSports from "./menu/logosports.vue";
import LogoSeco from "./menu/logoseco.vue";
import Logopartenaire from "./menu/logopartenaire.vue";

export default {
  components: { Logo, LogoTerrain, LogoPartie, LogoSeco, LogoSports, Logopartenaire },
};
</script>
