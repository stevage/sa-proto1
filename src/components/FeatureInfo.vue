<template lang="pug">
#FeatureInfo(v-if="properties")
    //- | {{ properties.PARENTNAME || properties.NAME_LABEL || properties }}
    //- br
    //- | {{ properties.FEATSUBTYPE }}
    table
        tr
            th Name
            td {{ properties.FacilityName }}
        tr
            th Sports
            td {{ properties.SportsPlayed }}
        tr(v-if="properties.NumberFieldCourts")
            th Fields
            td {{ properties.NumberFieldCourts }}
</template>

<script>
export default {
    name: "FeatureInfo",
    data: () => ({
        properties: undefined
        
    }),
    created() {
        window.FeatureInfo = this;
    }
}
</script>

<style scoped>
#FeatureInfo {
    position: absolute;
    top: 10px;
    left: 10px;
    background:white;
    width:200px;
    border: 1px solid lightgrey;
    font-size: 12px;
    /* height:200px; */
}
</style>