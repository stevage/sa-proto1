<template lang="pug">
#LayerSelector
    h2 Layers
    label
        input(type="checkbox" v-model="population")
        | Population
</template>

<script>
export default {
    name: "LayerSelector",
    data: () => ({
        population: undefined
    }),
    created() {
        window.LayerSelector = this;
    },
    watch: {
        population() {
            window.Legend.toggle('population', this.population);
            window.Map.toggleLayer('population', this.population);
        }
    }
}
</script>

<style scoped>

</style>