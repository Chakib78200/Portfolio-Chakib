<template>
    <div>

        <div id="debut-page-contact">
            <section id="contact">
                <div class="title">
                    <h2 class="animer-lettre">Contactez-moi via les réseaux sociaux ou par e-mail.</h2>
                </div>
                <div class="contenu">
                    <a href="https://github.com/Chakib78200/Portfolio-Chakib.git"><img
                            src="../assets/image/GitHub-logo.png" alt="GitHub" class="github-left"></a>
                    <form id="contact-form" @submit.prevent="sendEmail">
                        <label for="first-name">Prénom</label>
                        <input v-model="form.firstName" type="text" name="first-name" required>
                        <label for="last-name">Nom</label>
                        <input v-model="form.lastName" type="text" name="last-name" required>
                        <label for="objet">Objet</label>
                        <input v-model="form.subject" type="text" name="subject" required>
                        <label for="message">Message</label>
                        <textarea v-model="form.message" name="message" rows="6" cols="10" maxlength="500"
                            required></textarea>
                        <button type="submit">Envoyer</button>
                    </form>
                    <a
                        href="https://www.linkedin.com/feed/?trk=sem-ga_campid.21228777300_asid.161774284317_crid.698137525090_kw.linkedin_d.c_tid.kwd-"><img
                            src="../assets/image/Linkedin-logo.png" alt="Linkedin" class="linkedin-right"></a>
                </div>
            </section>
        </div>
        <FooterComponent />
        <ScrollToTop />
    </div>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue'
import ScrollToTop from '@/components/ScrollToTop.vue';
export default {
    name: 'ContactComponent',
    components: {
        FooterComponent,
        ScrollToTop,
    },
    data() {
        //initialisés à des chaînes de caractères vides ('') du formulaire.
        return {
            form: {
                firstName: '',
                lastName: '',
                subject: '',
                message: ''
            }
        };
    },
    methods: {
        // Méthode pour faire défiler jusqu'à la section de contact
        scrollToContact() {
            const anchor = document.getElementById('debut-page-contact');
            if (anchor) {
                anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        },

        //méthode asynchrone pour envoyer l'email en utilisant une requête HTTP POST
        async sendEmail() {
            try {
                //Fetch pour envoyer une requête HTTP au serveur
                const response = await fetch('http://localhost:3000/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json' //spécifiant que le corps de la requête est en JSON.
                    },
                    body: JSON.stringify(this.form) //Convertit l'objet form en une chaîne JSON
                });
                if (response.ok) { //Vérifie si la réponse du serveur est réussie
                    alert('Email envoyé avec succès!');
                    this.form = { // Réinitialise les champs du formulaire à des chaînes de caractères vides après l'envoi réussi de l'email.
                        firstName: '',
                        lastName: '',
                        subject: '',
                        message: ''
                    };
                } else {
                    alert("Erreur lors de l'envoi de l'email."); //Si la réponse du serveur n'est pas réussie, affiche un message d'erreur.
                }
            } catch (error) { // Attrape toute erreur survenue pendant l'envoi de la requête ou la réception de la réponse.
                alert("Erreur lors de l'envoi de l'email."); //Affiche un message d'erreur si une exception est levée.
            }
        }
    },
    mounted() {
        // Appel de la méthode scrollToContact lorsque le composant est monté
        this.scrollToContact();
    }
};

</script>

<style scoped>
section {
    max-width: 1200px;
    margin: 0 auto 15px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
    background: #333;
}

form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    max-width: 500px;
    background: #9a95e773;
    border-radius: 10px;
    padding: 30px;
    margin: 10px;
    box-sizing: border-box;
}

.animer-lettre {
    text-transform: uppercase;
    background-image: linear-gradient(-225deg, #ef91ed 0%, #f1eef4 29%, #ff1361 67%, #fff800 100%);
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 2s linear infinite;
    display: inline-block;
    font-size: 30px;
}

@keyframes textclip {
    to {
        background-position: 200% center;
    }
}

.contenu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    margin-right: 20px;
}

.github-left,
.linkedin-right {
    width: 100%;
    max-width: 150px;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0px 9px 30px 0px 0px 9px 30px 0px rgb(242, 242, 245);
    transition: all 0.2s ease;
}

.github-left:hover,
.linkedin-right:hover {
    transform: translateY(-10px);
    border-radius: 50%;
}

form,
input,
textarea {
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    border: none;
    outline: none;
    transition: 0.2s;
    margin-right: 0px;
    margin-left: 0px;
    resize: vertical;
    resize: none;
}

label {
    color: #fff;
    margin-right: 0px;
    margin-left: 0px;
    width: 100%;
}

button {
    width: 100%;
    max-width: 192px;
    height: 60px;
    border-radius: 10px;
    border: none;
    background-color: #b11f1f;
    color: #fff;
    font-weight: bold;
    font-size: 1.2em;
    cursor: pointer;
    margin: 15px auto 0;
    outline: none;
    display: block;
}

button:hover {
    transform: translateY(-8px);
    background: rgb(130, 130, 224);
}

@media (max-width: 768px) {
    section {
        flex-direction: column;
        padding: 10px;
        margin: 20px;
    }

    .github-left,
    .linkedin-right {
        width: 100px;
        height: 100px;
    }

    .contenu {
        flex-direction: column;
        align-items: center;
        margin: 10px;
    }

}

@media (max-width: 480px) {
    section {
        flex-direction: column;
        padding: 10px;
        margin: 20px;
    }

    .contenu {
        flex-direction: column;
        align-items: center;
        margin: 10px;
    }

    .github-left,
    .linkedin-right {
        width: 100px;
        height: 100px;
    }

    .animer-lettre {
        font-size: 18px;
    }
}
</style>
