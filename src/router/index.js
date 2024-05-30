import { createRouter, createWebHashHistory } from 'vue-router';
import MainLayout from '@/components/MainLayout.vue';
import PresentationComponent from '@/components/PresentationComponent';
import CreationComponent from '@/components/CreationComponent';
import CompetencesComponent from '@/components/CompetencesComponent';
import ContactComponent from '@/components/ContactComponent';
import FooterComponent from '@/components/FooterComponent';
import ScrollToTop from '@/components/ScrollToTop';
import Page404Component from '@/components/Page404Component';

const routes = [
    {
        path: '/',
        component: MainLayout,
        children: [
            { path: '', component: PresentationComponent },
            { path: 'presentation', component: PresentationComponent },
            { path: 'creations', component: CreationComponent },
            { path: 'competences', component: CompetencesComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'footer', component: FooterComponent },
            { path: 'ScrollToTop', component: ScrollToTop },
        ]
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: Page404Component } // Route 404
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
