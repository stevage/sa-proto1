<template lang="pug">
#LayerSelector
    h2 Layers
    label
        input(type="checkbox" v-model="layers.population")
        | Population
    label
        input(type="checkbox" v-model="layers.catchments")
        | 2km Catchments
    label
        input(type="checkbox" v-model="layers.facilityVoronoi")
        | Facility voronoi polygons
</template>

<script>
export default {
    name: "LayerSelector",
    data: () => ({
        layers: {  }

    }),
    created() {
        window.LayerSelector = this;
    },
    methods: {
        toggle(layer) {

        }
    },
    watch: {
        layers: {
            handler(n) { 
                for (const layer of Object.keys(this.layers)) {
                    window.Legend.toggle(layer, this.layers[layer]);
                    if (window.map.isStyleLoaded()) {
                        window.Map.toggleLayer(layer, this.layers[layer]);
                    }
                }
            },
            deep: true
        }
    }
}
</script>

<style scoped>
label {
    display: block;
}
</style>