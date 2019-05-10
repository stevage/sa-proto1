<template lang="pug">
#Tools
    h3 Tools
    button(@click="showTimeCatchment") Find alternative facilities
    FacilityCounts
</template>

<script>
import FacilityCounts from './FacilityCounts';
export default {
    name: "Tools",
    components: {
        FacilityCounts
    },
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