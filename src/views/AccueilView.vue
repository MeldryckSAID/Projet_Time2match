<template >
<div class="bg-Noirr">

  

  <div >
    <div class="flex  justify-between -z-50">
       <barre_blanche />

       <user class="  m-5 mt-7" />
     </div>  

     <div class="flex flex-col">

            <h1 class="text-8xl text-center"> Time<span class="text-Orangee">2</span>Match</h1>

            <div class="section_barre flex justify-center mt-14"> 
                  <div class="search-box">
                     <input type="text" name="" class="search-txt" placeholder="Rechercher une adresse, un village, une ville..." />
                     <a class="search-btn"  href="#">
                      <img class="lope" src="/public/icn/loupe.svg" alt="schearch">
                     </a>
                   </div> 
              </div>


            <chevron class=" flex justify-center mt-14" />

     </div>




     



    <div class="flex justify-end">
      <barre_orange />
    </div>    
    
    <div class="box2"> 

            <h3>Time2Match, c’est quoi ? </h3>
            <p>
                L’objectif est simple, pouvoir retrouver ses <br> amis pour jouer dans des terrains de <br> sport libre accès.
            </p>
    </div>


   
    
     <div class="grid grid-cols-6 border-2 border-red-700">

        <div class="col-start-1 col-end-3 row-start-1 row-end-3  border-2 border-green-700">
            <p>Si tu veux mettre des buts, <br> 264 espaces de football libre accès <br> sont à
                ta
                disposition ! <br>
                <span class="text-Orangee">Tu peux les consulter ici. </span>
            </p>
        </div>

        <div class=" col-start-5 col-end-7  row-start-1 row-end-3   border-2 border-pink-500">
            <p class="p_logo2">Si tu préfères mettre des smashes <br> à tes adversaires, 84 espaces de
                volleyball <br>
                sont la pour toi ! <br>
                <span class="text-Orangee"> Tu peux les consulter ici.</span>
            </p>
        </div>

        <logo_patte class="col-start-3 col-end-6 row-start-2 row-end-4  z-50 border-2 border-blue-200"/>

        <div class=" col-start-1 col-end-3 row-start-4 row-end-6 border-2 border-orange-100 "> 
            <p class="p_logo3">Si ton truc c’est de mettre des paniers, <br> 198 espaces de basketball n’attendent que toi ! <br>
            <span class="text-Orangee">Tu peux les consulter ici. </span>
            </p>
        </div>

        <div class=" col-start-5 col-end-7 row-start-4 row-end-6 border-2 border-indigo-700">
            <p class="p_logo4">
                Crée un compte et trouve <br> une partie sportive en moins de 5 minutes ! <br>
                <span class="text-Orangee"> Rejoins nous ici.</span>
            </p> 
        </div>
</div>
   
  </div>

  


  
  

  
 

  

  
  

</div>


</template>

<script> 
import barre_blanche from '../components/barre/barre_blanche.vue';
import barre_orange from '../components/barre/barre_orange.vue';
import user from '../components/user/user.vue';
import chevron from '../components/barre/chevron.vue';
import logo_patte from '../components/barre/logo_patte.vue';





export default {
  components: { barre_blanche, barre_orange, user, chevron, logo_patte },
 
  data(){
    return {

    }
  },
  
};

</script>