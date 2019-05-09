<template lang="pug">
legend#Legend
    .population(v-show="population")
        h4 Population
        .bar
    .facility-catchment(v-show="facilityCatchment")
        h4 Travel time
        .ramp
            .value
                .box(:style="{backgroundColor: 'hsla(240,90%,30%,0.6)'}")
                caption 5 minutes
            .value
                .box(:style="{background: 'hsla(240,90%,30%,0.4)'}")
                caption 10 minutes
            .value
                .box(:style="{background: 'hsla(240,90%,30%,0.2)'}")
                caption 15 minutes
</template>

<script>
export default {
    name: "Legend",
    data: () => ({
        population: true,
        facilityCatchment: true
    }),
    created() {
        window.Legend = this;
    }, methods: {
        toggle(layer, value) {
            this[layer] = value
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
    border: 1px solid lightgrey;
}

#Legend h4 {
    margin-bottom: 0;
    padding-left: 5px;
}


</style>
<style>
.choropleth-legend {
    border: none;
}

.value {
    /* margin: 5px; */
}

.value .box {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 2px 5px;
}

.value caption {
    display: inline-block;
    vertical-align: super;
}

</style>