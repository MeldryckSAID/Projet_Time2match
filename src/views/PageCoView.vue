<template>
  <header>
    <MenuView />
  </header>
  <main class="min-h-screen bg-Noirr text-Blancc">
    <h2 class="py-15 p-8 text-center font-quicksand text-8xl font-semibold">Time<span class="text-Orangee">2</span>match</h2>
   
  
   <div class="rounded-3xl border-4 border-Orangee mx-20 py-5">
      <form>
        <label class="flex justify-center py-5">
          <span class="block text-xl font-medium text-Blancc">Test</span>
          <input
            placeholder="Adresse mail "
            type="email"
            class="m-10 h-3/5 w-96 items-center text-Noirr rounded-lg border-x-8 border-r-Orangee border-l-Orangee"
          />
        </label>
      </form>

      <form>
        <label class="flex justify-center py-5">
          <span class="block text-xl font-medium text-Blancc">Test 2 </span>
          <input
            placeholder="test "
            type="email"
            class="m-10 h-3/5 w-96 rounded-3xl border-x-8 text-Noirr border-r-Orangee border-l-Orangee text-center"
          />
        </label>
      </form>
      <Boutton class="flex justify-center py-5">test</Boutton>
   
</div>

  </main>

  <footer>
    <FooterView></FooterView>
  </footer>
</template>

<script>
import MenuView from "../components/MenuView.vue";
import FooterView from "../components/FooterView.vue";
import Boutton from "../components/boutton.vue";

export default {
  components: {
    MenuView,
    FooterView,
    Boutton,
  },
};
</script>
