<template>
  <div>
    <h2>les sports sur time2match</h2>
    <p>Non, vous ne trouverez pas le kayak.</p>
  </div>

  <div>
    <div class="columns-3 ">
      <IconFootball class="h-1/5 w-1/5"/>
      <h3 class="uppercase text-3xl">le football</h3>
      <IconFootball class="h-1/5 w-1/5"/>
    </div>
  <p>Icônique sport du ballon rond, le football est le sport le plus pratiqué en FRANCE, on compte notamment plus de 2 198 703 licenciés.</p>
  <span class="underline text-Orangee">Trouver un espace de football</span>
  </div>

  <div>
    <div class="columns-3">
      <IconBasketball class="h-1/5 w-1/5"/>
      <h3 class="uppercase text-3xl">le basketball</h3>
      <IconBasketball class="h-1/5 w-1/5"/>
    </div>
  <p>Le basketball est le 4ème sport le plus pratiqué en FRANCE, on compte notamment 683 000 licenciés.</p>
  <span class="underline text-Orangee">Trouver un espace de basketball</span>
  </div>

  <div>
    <div class="columns-3">
      <IconVolleyball class="h-1/5 w-1/5"/>
      <h3 class="uppercase text-3xl">le volleyball</h3>
      <IconVolleyball class="h-1/5 w-1/5"/>
    </div>
  <p>Plus souvent pratiqué en loisir sur les côtes, le volleyball compte néanmoins 111 378 licenciés.</p>
  <span class="underline text-Orangee">Trouver un espace de volleyball</span>
  </div>

  <p>Vous ne trouvez pas votre sport favori ? Proposez-le nous ! Nous contacter</p>

</template>

<script>

import IconFootball from '../components/icones-sports.vue/icon-football.vue';
import IconBasketball from '../components/icones-sports.vue/icon-basketball.vue';
import IconVolleyball from '../components/icones-sports.vue/icon-volleyball.vue';

export default {
  name:'SportsView',
  components: {
     IconFootball,
     IconBasketball,
     IconVolleyball,
  },
  data(){
    return {

    }
  },
};

</script>