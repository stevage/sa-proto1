<template lang="pug">
#Tools
    h3 Tools
    button(@click="showTimeCatchment") Show driving catchment
</template>

<script>
export default {
    name: "Tools",
    data: () => ({
        
    }),
    created() {
        window.Tools = this;
    }, methods: {
        showTimeCatchment() {
            window.Map.updateTimeCatchment()
        }
    }
}
</script>

<style scoped>
button {
    padding: 1em 2em;
    font-size: 16px;
}
</style>