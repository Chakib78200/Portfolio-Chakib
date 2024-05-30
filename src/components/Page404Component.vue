<template>
    <div class="not-found">
        <h1>404</h1>
        <p>Page introuvable</p>
        <img src="../assets/image/Page 404.jpg" alt="Page Not Found Image">
    </div>
</template>

<script>
export default {
    name: 'Page404Component'
}
</script>


<style scoped>
.not-found {
    text-align: center;
    margin-top: 10px;
}

h1 {
    color: white;
    font-size: 50px;
    font-style: bold;
    margin: 0;
    padding: 0;
}

p {
    color: white;
    font-size: 50px;
    font-style: bold;
    margin: 0;
    padding: 20px;
}
</style>