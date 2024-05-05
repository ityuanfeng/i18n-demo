<script setup lang="ts">
import {useI18n} from 'vue-i18n'

const {t} = useI18n()
console.log(t('hello'))
</script>

<template>
    <div>
        <p>{{ t('hello') }}</p>
        <p>{{ t('list', ['hello', 'world']) }}</p>
    </div>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
