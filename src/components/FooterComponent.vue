<template>
    <div>
        <footer>
            <div class="box-footer">
                <div class="icone-social">
                    <div class="icone-github">
                        <a href="https://github.com/Chakib78200/Portfolio-Chakib.git"><img
                                src="../assets/image/icone/icone-github.png" alt="GitHub" class="github-left"></a>
                    </div>
                    <div class="icone-linkedin">
                        <a
                            href="https://www.linkedin.com/feed/?trk=sem-ga_campid.21228777300_asid.161774284317_crid.698137525090_kw.linkedin_d.c_tid.kwd-148086543_n.g_mt.e_geo.9056240"><img
                                src="../assets/image/icone/icone-linkedin.png" alt="Linkedin"></a>
                    </div>
                </div>
                <div class="lien">
                    <ul>
                        <li class="footer-links"><router-link
                                to="/presentation#debut-page-presentation">Présentation</router-link></li>
                        <li class="footer-links"><router-link
                                to="/creations#debut-page-creation">Créations</router-link></li>
                        <li class="footer-links"><router-link to="/contact#debut-page-contact">Contact</router-link>
                        </li>
                    </ul>
                </div>
                <div>
                    <router-link to="/contact"><img src="../assets/image/Contactez-moi.png" alt="Contactez-moi"
                            class="contact"></router-link>
                </div>
                <div class="Tel-email-Img">
                    <img src="../assets/image/Email.png" alt="Image Email et Tél" class="img-email-tel">
                </div>
            </div>
            <div class="info">
                <p classe="name">gchakib@free.fr</p>
                <p class="tel">06 08 72 21 88</p>
            </div>
            <div class="corporate">
                <p>@ Corporate 2024 Chakib Goussaira. Tous droits réservés.</P>
            </div>
            <div class="date">
                <p> Dernière mise à jour : <span id="last-updated"></span></p>
            </div>
        </footer>
        <ScrollToTop />
    </div>
</template>

<script>
import ScrollToTop from '@/components/ScrollToTop.vue'
export default {
    name: "FooterComponent",
    compenents: {
        ScrollToTop,
    },
    mounted() {
        // Obtenir la date et l'heure de la dernière modification du document
        const lastUpdated = document.lastModified;
        // Sélectionner l'élément avec l'ID 'last-updated' et mettre à jour son contenu texte
        document.getElementById('last-updated').textContent = lastUpdated;
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;900&display=swap');

footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1160px;
    margin: 0 auto 15px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
    background: #333;
    color: #fff;
}

.lien,
.footer-links ul li {
    text-decoration: none;
}

.icone-social {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border-radius: 10px;
}

.icone-linkedin {
    box-shadow: 0px 9px 30px 0px rgb(242, 242, 245);
    transition: all 0.2s ease;
    width: 100%;
}

.icone-github {
    box-shadow: 0px 9px 30px 0px rgb(242, 242, 245);
    transition: all 0.2s ease;
    width: 100%;
}

.icone-linkedin:hover {
    transform: translateY(-10px);
}

.icone-github:hover {
    transform: translateY(-10px);
}

.contact {
    border-radius: 50%;
    box-shadow: 0px 9px 30px 0px rgb(242, 242, 245);
    transition: all 0.2s ease;
}

.contact:hover {
    transform: translateY(-10px);
}

.corporate,
.date {
    margin: 10px 0 10px -25px;
}

.date {
    text-align: center;
    width: 100%;
    padding-top: 50px;
}

.corporate {
    margin-bottom: -90px;
    margin-left: 360px;
}

.Tel-email-Img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
}

.img-email-tel {
    border-radius: 50%;
    box-shadow: 0px 9px 30px 0px rgb(242, 242, 245);
    transition: all 0.2s ease;
}

.img-email-tel:hover {
    transform: translateY(-10px);
}

.box-footer {
    width: 100%;
    display: flex;
    align-items: center;
    align-content: center;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 70px;
}

li {
    list-style: none;
}

a {
    text-decoration: none;
    color: inherit;
    transition: all 0.2s ease;
    font-size: 24px;
}

.info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-left: -45px;
}

.footer-links:hover {
    color: #ffd700;
}

.footer-links.active {
    text-decoration: underline;
    color: #ffd700;
}

.footer-links {
    display: inline-flexbox;
}

.footer-links::after {
    content: "";
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 0.25em;
    width: 0%;
    margin-bottom: 9px;
    background-color: #f807e8;
    transition: width 0.4s;
}

.footer-links:hover::after {
    width: 100%;
}

.name {
    margin: 0;
}

.tel {
    margin: 0;
}

.contact {
    animation-duration: .8s;
    animation-name: clignoter;
    animation-iteration-count: infinite;
    transition: none;
}

@keyframes clignoter {
    0% {
        opacity: 1;
    }

    40% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@media (max-width: 768px) {
    footer {
        flex-direction: column;
        align-items: center;
        padding: 10px;
        margin: 20px;
    }

    .img-email-tel {
        width: 100px;
        height: 100px;
    }

    .contact {
        width: 100px;
        height: 100px;
        margin-bottom: 20px;
    }

    .box-footer {
        flex-direction: column;
        align-items: center;
    }

    .icone-social {
        flex-direction: row;
        gap: 10px;
    }

    .info {
        align-items: center;
        margin-left: 0;
    }

    .corporate,
    .date {
        margin: 10px 0;
        text-align: center;
    }
}

@media (max-width: 480px) {
    footer {
        flex-direction: column;
        padding: 10px;
        margin: 20px;
    }

    .img-email-tel {
        width: 100px;
        height: 100px;
    }

    .contact {
        width: 100px;
        height: 100px;
        margin-bottom: 20px;
    }

    .box-footer {
        flex-direction: column;
        align-items: center;
    }

    .icone-social {
        flex-direction: row;
        gap: 5px;
    }

    .info {
        align-items: center;
        margin-left: 0;
    }

    .footer-links {
        font-size: 18px;
    }

    .corporate,
    .date {
        margin: 5px 0;
        text-align: center;
    }
}
</style>
