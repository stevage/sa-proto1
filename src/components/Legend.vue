<template lang="pug">
#Legend
    .population(v-show="population")
        h4 Population
        .bar
</template>

<script>
export default {
    name: "Legend",
    data: () => ({
        population: true
    }),
    created() {
        window.Legend = this;
    }, methods: {
        toggle(layer, value) {
            // this[layer] = value
            this.population = !!value
        }
    }
}
</script>

<style scoped>
#Legend {
    position: absolute;
    left: 20px;
    bottom: 20px;
    background: white;
}

#Legend h4 {
    margin-bottom: 0;
    padding-left: 10px;
}

</style>
<style>
.choropleth-legend {
    border: none;
}

</style>