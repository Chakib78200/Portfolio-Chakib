<template>
    <div>
        <section>
            <div id="flex">
                <h2 id="competence">Mes compétences</h2>
                <div class="box-html" ref="boxHTML">
                    <div class="pourcentage-html">
                        <svg>
                            <circle cx="70" cy="70" r="70" class="circle-bg"></circle>
                            <circle cx="70" cy="70" r="70" class="circle-html"></circle>
                        </svg>
                        <span>90%</span>
                        <div class="img-language">
                            <img src="../assets/image/Language/html.png" alt="Logo HTML" class="logo-html">
                        </div>
                        <h2 class="html">HTML</h2>
                    </div>
                </div>
                <div class="box-css" ref="boxCSS">
                    <div class="pourcentage-css">
                        <svg>
                            <circle cx="70" cy="70" r="70" class="circle-bg"></circle>
                            <circle cx="70" cy="70" r="70" class="circle-css"></circle>
                        </svg>
                        <span>65%</span>
                        <div class="img-language">
                            <img src="../assets/image/Language/css.png" alt="Logo CSS" class="logo-css">
                        </div>
                        <h2 class="css">CSS</h2>
                    </div>
                </div>
                <div class="box-javascript" ref="boxJS">
                    <div class="pourcentage-javascript">
                        <svg>
                            <circle cx="70" cy="70" r="70" class="circle-bg"></circle>
                            <circle cx="70" cy="70" r="70" class="circle-js"></circle>
                        </svg>
                        <span>20%</span>
                        <div class="img-language">
                            <img src="../assets/image/Language/javascript.png" alt="Logo JavaScript"
                                class="logo-javascript">
                        </div>
                        <h2 class="js">JAVASCRIPT</h2>
                    </div>
                </div>
                <div class="box-vuejs" ref="boxVueJS">
                    <div class="pourcentage-vuejs">
                        <svg>
                            <circle cx="70" cy="70" r="70" class="circle-bg"></circle>
                            <circle cx="70" cy="70" r="70" class="circle-vuejs"></circle>
                        </svg>
                        <span>30%</span>
                        <div class="img-language">
                            <img src="../assets/image/Language/vue js.png" alt="Logo Vue js" class="logo-vuejs">
                        </div>
                        <h2 class="vuejs">VUE.JS</h2>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'CompetencesComponent',
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const elements = [
                { el: this.$refs.boxHTML, class: 'animate-html' },
                { el: this.$refs.boxCSS, class: 'animate-css' },
                { el: this.$refs.boxJS, class: 'animate-js' },
                { el: this.$refs.boxVueJS, class: 'animate-vuejs' }
            ];
            elements.forEach(({ el, class: className }) => {
                if (this.isElementInViewport(el)) {
                    el.classList.add(className);
                }
            });
        },
        isElementInViewport(el) {
            if (!el) return false;
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
    }
};
</script>

<style scoped>
#flex {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto 15px;
    background: #333;
    border-radius: 10px;
    padding-bottom: 40px;
    gap: 80px;
}

#competence {
    text-align: center;
    width: 100%;
    color: white;
    text-transform: uppercase;
    background-image: linear-gradient(-225deg,
            #ef91ed 0%,
            #f1eef4 29%,
            #ff1361 67%,
            #fff800 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 2s linear infinite;
    font-size: 24px;
}

@keyframes textclip {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

.box-html,
.box-css,
.box-javascript,
.box-vuejs {
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 20px 10px 0px 10px;
    position: relative;
    border-radius: 20px;
    margin: 10px;
    box-sizing: border-box;
}

.box-html {
    box-shadow: 0px 9px 30px 0px rgba(208, 2, 27, 1);
}

.box-css {
    box-shadow: 0px 9px 30px 0px rgba(10, 118, 244, 1);
}

.box-javascript {
    box-shadow: 0px 9px 30px 0px rgba(245, 166, 35, 1);
}

.box-vuejs {
    box-shadow: 0px 9px 30px 0px rgba(57, 99, 9, 1);
}

.pourcentage-html,
.pourcentage-css,
.pourcentage-javascript,
.pourcentage-vuejs {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}

svg {
    width: 150px;
    height: 150px;
}

.circle-bg {
    fill: none;
    stroke: #f5f5f5;
    stroke-width: 10px;
    transform: translate(5px, 5px);
    stroke-linecap: round;
    stroke-dasharray: 440px;
    stroke-dashoffset: 0;
}

.circle-html,
.circle-css,
.circle-js,
.circle-vuejs {
    fill: none;
    stroke-width: 10px;
    transform: translate(5px, 5px);
    stroke-linecap: round;
    stroke-dasharray: 440px;
    stroke-dashoffset: 440px;
    transition: stroke-dashoffset 2s ease-out;
}

.animate-html .circle-html {
    stroke-dashoffset: 44px;
}

.animate-css .circle-css {
    stroke-dashoffset: 154px;
}

.animate-js .circle-js {
    stroke-dashoffset: 330px;
}

.animate-vuejs .circle-vuejs {
    stroke-dashoffset: 308px;
}

.circle-html {
    stroke: rgb(226, 52, 43);
}

.circle-css {
    stroke: rgb(89, 120, 170);
}

.circle-js {
    stroke: rgb(255, 170, 0);
}

.circle-vuejs {
    stroke: rgb(88, 190, 88);
}

span {
    position: absolute;
    top: 80px;
    left: 85px;
    transform: translate(-50%, -50%);
    font-size: 2em;
    font-weight: 500;
    color: blue;
}

.img-language img {
    transition: transform 0.5s ease;
}

.img-language:hover img {
    transform: scale(1.2);
}

.logo-html {
    box-shadow: 0px 9px 30px 0px rgba(208, 2, 27, 1);
    margin-top: 20px;
    border-radius: 10px;
}

.logo-css {
    box-shadow: 0px 9px 30px 0px rgba(10, 118, 244, 1);
    margin-top: 20px;
    border-radius: 10px;
}

.logo-javascript {
    box-shadow: 0px 9px 30px 0px rgba(245, 166, 35, 1);
    margin-top: 20px;
    border-radius: 10px;
}

.logo-vuejs {
    box-shadow: 0px 9px 30px 0px rgba(57, 99, 9, 1);
    margin-top: 20px;
    border-radius: 10px;
}

h2.html {
    color: rgba(208, 2, 27, 1);
}

h2.css {
    color: rgba(10, 118, 244, 1);
}

h2.js {
    color: rgba(245, 166, 35, 1);
}

h2.vuejs {
    color: rgba(57, 99, 9, 1);
}

@media only screen and (max-width: 768px) {
    #flex {
        flex-direction: column;
        align-items: center;
        padding: 10px;
        margin: 20px;
    }
}

@media only screen and (max-width: 480px) {
    #flex {
        flex-direction: column;
        align-items: center;
        padding: 10px;
        margin: 20px;
    }
}
</style>