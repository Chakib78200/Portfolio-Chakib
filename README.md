# portofolio-cef
## Project setup
npm install

### Compiles and hot-reloads for development
npm run serve

### Compiles and minifies for production
npm run build

### Lints and fixes files
npm run lint

## Installation
1. Clonez ce dépôt sur votre machine locale.
2. Assurez-vous que vous avez Node.js et npm installés sur votre machine.
3. Exécutez `npm install` pour installer toutes les dépendances.

## Utilisation
- Exécutez `npm run serve` pour démarrer le serveur de développement.
- Accédez à l'URL indiquée dans votre navigateur pour visualiser l'application.

# Présentation du Projet
Ce projet est une application web d'un Portfolio. Il utilise Vue.js pour la construction des composants et CSS pour les styles.

Chaque composant se compose des éléments suivants :
1. **Template** pour html
2. **Script** pour javascript
3. **Style** pour css

## Structure du Projet
src/
├── assets/
│   └── image
│   └── pdf
│
├── components/
│   └── MainLayout.vue
│   └── HomeComponent.vue
│   └── PresentationComponent.vue
│   └── CréationComponent.vue
│   └── CompetancesComponent.vue
│   └── ContactComponent.vue
│   └── FooterComponent.vue
│   └── Page404Component.vue 
│   └── ScrollToTop.vue
│
├── app.vue
│
├── main.js
│
├── router/
│   └── index.js
│
├── backend
│    └── .env
│    └── server.js

# Description du Code d'Initialisation de l'Application Vue.js
Ce fichier contient le code d'initialisation de l'application Vue.js. Il configure et lance l'application en utilisant les composants, les routes, le magasin (store) et d'autres configurations nécessaires.
1. **Importation des Dépendances** : Les dépendances nécessaires sont importées, y compris `createApp` de Vue.js, le composant `App.vue`, le router, les styles de Font Awesome et le store Vuex.
2. **Création de l'Application** : L'application Vue.js est créée à l'aide de `createApp`, et le composant racine `App` est passé en argument.
3. **Configuration des Plugins** : Les plugins comme le router et le store sont configurés à l'aide de la méthode `use`. Cela permet d'intégrer ces fonctionnalités à l'application.
4. **Montage de l'Application** : L'application est montée sur l'élément avec l'ID `#app` dans le DOM, rendant ainsi l'application Vue.js active et fonctionnelle sur la page web.

1. Ce fichier est le point d'entrée principal de l'application Vue.js.
2. Il importe les dépendances nécessaires et configure l'application.
3. Il monte ensuite l'application sur l'élément `#app` dans le DOM.

# Description du Composant App
Ce composant Vue.js est la structure principale de l'application. Il utilise le composant `router-view` pour afficher les différents composants en fonction des routes de l'application.

- Ce composant sert de conteneur principal pour l'ensemble de l'application Vue.js.
- Il définit les styles globaux de l'application, tels que la couleur de fond.
- Il utilise le composant `router-view` pour afficher dynamiquement les différents composants en fonction des routes de l'application.

# Description du Service d'Envoi d'Email avec Express et Nodemailer

Ce service d'envoi d'email utilise Express.js et Nodemailer pour envoyer des emails à partir d'un formulaire de contact. Il écoute les requêtes POST sur le chemin `/send-email`, récupère les données du formulaire, puis envoie un email à l'adresse spécifiée dans les variables d'environnement.

## Description du server.js
Le code met en place un serveur Express qui :
1. **Importe les Dépendances** : Les dépendances nécessaires telles que Express, Body Parser, Nodemailer, Cors et Dotenv sont importées.
2. **Configuration du Serveur Express** : Le serveur Express est configuré pour utiliser CORS et parser les données JSON avec Body Parser.
3. **Endpoint POST `/send-email`** : Un endpoint POST est configuré pour recevoir les données du formulaire de contact. Les données sont ensuite utilisées pour créer et envoyer un email à l'aide de Nodemailer.
4. **Lancement du Serveur** : Le serveur Express écoute sur le port spécifié dans la variable d'environnement `PORT` ou sur le port 3000 par défaut.

1. Installez les dépendances en exécutant `npm install`.
2. Configurez les variables d'environnement dans un fichier `.env` à la racine du projet.
3. Exécutez le service en utilisant `npm start` ou `node server.js`.
4. Envoyez des requêtes POST au endpoint `/send-email` avec les données du formulaire de contact au format JSON.

# Configuration des Variables d'Environnement
Ce fichier `readme.md` fournit des instructions sur la configuration des variables d'environnement pour votre application.

## Variables d'Environnement
- **EMAIL_ADDRESS**: L'adresse email à laquelle vous souhaitez envoyer les emails.
- **EMAIL_USER**: Le nom d'utilisateur de votre compte email.
- **EMAIL_PASS**: Le mot de passe de votre compte email.
- **PORT**: Le port sur lequel votre application sera exécutée.

# Description du Composant MainLayout
Ce composant Vue.js est un layout principal qui contient un composant `HomeComponent` et une vue de routeur (`<router-view />`). Il est utilisé pour structurer la mise en page principale de l'application.

- Affichage du composant `HomeComponent`.
- Utilisation de `<router-view />` pour afficher les composants correspondant aux routes définies dans l'application.

# Description du Composant HomeComponent
Ce composant Vue.js représente l'en-tête de votre site web. Il contient un logo cliquable qui permet de faire défiler la page vers le haut, ainsi qu'une barre de navigation avec des liens vers différentes sections du site.

- Un logo cliquable pour faire défiler la page vers le haut.
- Une barre de navigation avec des liens vers différentes sections du site.
- Mise en page responsive pour une meilleure expérience sur les appareils mobiles et les tablettes.
- Animation des liens de navigation au survol pour une meilleure visibilité.

## Description du Composant PresentationComonent
Ce composant Vue.js représente la section de présentation d'une page web. Il affiche des images, du texte de présentation, des informations sur l'entreprise, les services offerts et un lien vers un CV téléchargeable.

- Affichage d'images et de texte de présentation.
- Animation du texte de présentation avec des couleurs changeantes.
- Affichage d'informations sur l'entreprise et ses valeurs.
- Affichage des services offerts par l'entreprise.
- Lien vers un CV téléchargeable.
- Bouton de retour en haut de page pour une meilleure expérience utilisateur.
- **Scroll to Top**: Lorsque vous cliquez sur une image ayant la classe `.scroll-to-top`, la page fait défiler doucement jusqu'en haut.
- **Animation de Texte de Présentation**: L'animation du texte de présentation est déclenchée lorsque le composant est monté. Elle 
   défile le texte de gauche à droite avec des couleurs différentes pour chaque lettre.

# Description du Composant CreationComponent
Ce composant Vue.js représente une section de création qui affiche différentes créations avec leurs détails. Chaque création est affichée sous forme de carte avec un titre, une image, et une description. Lorsque vous cliquez sur une création, un modal s'ouvre avec plus de détails sur cette création.

- Affichage des créations avec leurs détails.
- Ouverture d'un modal avec plus de détails sur une création lorsque vous cliquez dessus.
- Animation de transition pour l'ouverture et la fermeture des modals.
- Mise en page responsive pour une meilleure expérience sur les appareils mobiles et les tablettes.

# Description du Composant ContactComponent
Ce composant Vue.js représente la section de contact de votre site web. Il permet aux utilisateurs de vous contacter via les réseaux sociaux ou par e-mail.

- Un formulaire de contact permettant aux utilisateurs d'envoyer des messages directement depuis votre site.
- Des liens vers les réseaux sociaux pour une interaction supplémentaire.
- Mise en page responsive pour une expérience utilisateur optimale sur différents appareils.

# Description du Composant CompetencesComponent
Ce composant Vue.js affiche les compétences d'un utilisateur sous forme de barres de progression circulaires animées. Chaque compétence est représentée par un cercle de couleur avec un pourcentage et une icône correspondante.

- Affichage des compétences avec des barres de progression circulaires animées.
- Animation des compétences lorsque l'utilisateur fait défiler la page.
- Utilisation d'icônes pour représenter chaque compétence.
- Mise en page responsive pour une expérience utilisateur optimale sur différents appareils.

# Description du Composant FooterComponent
Ce composant Vue.js représente le pied de page d'une application web. Il affiche des liens vers les réseaux sociaux, des liens de navigation, des informations de contact et des informations sur la dernière mise à jour de la page.

- Affichage des icônes des réseaux sociaux avec des liens vers les profils correspondants.
- Affichage des liens de navigation pour accéder aux différentes sections de l'application.
- Affichage des informations de contact avec une adresse e-mail et un numéro de téléphone.
- Affichage de la date et de l'heure de la dernière mise à jour de la page.
- Effet de clignotement sur l'icône de contact pour attirer l'attention de l'utilisateur.

# Description du Composant Page404Component
Ce composant Vue.js représente une page d'erreur 404, affichée lorsque l'utilisateur accède à une URL invalide ou à une page introuvable dans l'application.

- Affichage du code HTML avec le message d'erreur 404 et une image illustrative.
- Stylisation du texte et de l'image pour une présentation cohérente.

# Description du Composant ScrollToTop
Ce composant Vue.js permet d'afficher un bouton de retour en haut de page, qui s'affiche lorsque l'utilisateur fait défiler la page vers le bas.

- Affichage d'un bouton de retour en haut de page lorsque l'utilisateur fait défiler la page vers le bas.
- Comportement fluide du bouton de retour en haut de page pour un retour rapide en haut de la page.
- Personnalisation possible de l'apparence du bouton de retour en haut de page en modifiant les styles CSS.

## Auteurs
- [Chakib Goussaira](https://github.com/Chakib78200/Portofolio-cef.git) - Description de la contribution

