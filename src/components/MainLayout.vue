<template>
    <div>
        <HomeComponent />
        <router-view />
    </div>
</template>

<script>
import HomeComponent from '@/components/HomeComponent';

export default {
    name: 'MainLayout',
    components: {
        HomeComponent
    }
}
</script>

<style scoped></style>