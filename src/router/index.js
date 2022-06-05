import { createRouter, createWebHistory } from "vue-router";
import AccueilView from "../views/AccueilView.vue";
import TerrainsView from "../views/TerrainsView.vue";
import PartiesView from "../views/PartiesView.vue";
import SportsView from "../views/SportsView.vue";
import PartenairesView from "../views/PartenairesView.vue";
import AProposView from "../views/AProposView.vue";
import MentionLegalesView from "../views/MentionLegalesView.vue";
import PageCoView from "../views/PageCoView.vue";
import ContactView from "../views/ContactView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "AccueilView", component: AccueilView },
    { path: "/terrains", name: "TerrainsView", component: TerrainsView },
    { path: "/parties", name: "PartiesView", component: PartiesView },
    { path: "/sports", name: "SportsView", component: SportsView },
    { path: "/partenaires", name: "PartenairesView", component: PartenairesView },
    { path: "/Apropos", name: "aProposView", component: AProposView },
    { path: "/mentionlegales", name: "MentionsLegalesView", component: MentionLegalesView },
    { path: "/pageco", name: "PageCoView", component: PageCoView },
    { path: "/contact", name: "ContactView", component: ContactView },
  ],
});

export default router;
