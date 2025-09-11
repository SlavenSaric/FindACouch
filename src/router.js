import { createRouter, createWebHistory } from "vue-router";

import CouchesDetail from "./pages/couches/CouchesDetail.vue";
import CouchesList from "./pages/couches/CouchesList.vue";
import CouchResistration from "./pages/couches/CouchResistration.vue";
import ContactCouch from "./pages/requests/ContactCouch.vue";
import RequestRecieved from "./pages/requests/RequestRecieved.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/couches'},
        {path: '/couches', component: CouchesList},
        {path: '/couches/:id', component: CouchesDetail, children: [
            {path: 'contact', component: ContactCouch}
        ]},
        {path: '/register', component: CouchResistration},
        {path: '/requests', component: RequestRecieved},
        {path: '/:notFound(.*)', component: NotFound},
    ]
})

export default router