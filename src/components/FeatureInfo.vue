<template lang="pug">
#FeatureInfo
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
        properties: {}
        
    }),
    created() {
        window.FeatureInfo = this;
    }
}
</script>

<style scoped>
#FeatureInfo {
    position: absolute;
    top: 20px;
    left: 20px;
    background:white;
    width:200px;
    height:200px;
}
</style>