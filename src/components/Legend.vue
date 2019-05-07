<template lang="pug">
#Legend
    h4 Population
    .bar
</template>

<script>
export default {
    name: "Legend",
    data: () => ({
        
    }),
    created() {
        window.Legend = this;
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