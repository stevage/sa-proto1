<template lang="pug">
#FacilityInfo(v-if="facility")
    h3 {{ facility.properties.FacilityName }}
    table
        tr
            th Sports
            td {{ p.SportsPlayed }}
        tr
            th Remoteness
            td {{ remotenessArea }}
        tr
            th LGA
            td {{ lga }}
    h4 Nearest {{ p.SportsPlayed }} facilities
    table
        tr(v-for="f in nearest")
            td.distance {{ Math.round(f._distance) }} km
            td {{f.properties.FacilityName}} 
    Tools
            
</template>

<script>
// import queryLngLat from 'query-remote-tiles';
import Tools from './Tools.vue';
const queryLngLat = require('query-remote-tiles').queryLngLat;
export default {
    name: "FacilityInfo",
    components: {
        Tools
    },
    data: () => ({
        facility: undefined,
        nearest: [],
        remotenessArea: undefined,
        lga: undefined
    }),
    created() {
        window.FacilityInfo = this;
    }, watch: {
        facility() {
            const lngLat = this.facility.geometry.coordinates;
            queryLngLat('https://vector-tiles.terria.io/FID_RA_2011_AUST/{z}/{x}/{y}.pbf', lngLat, 11, 'FID_RA_2011_AUST')
            .then(ra => this.remotenessArea = ra.features[0].properties.RA_NAME11);

queryLngLat('https://vector-tiles.terria.io/FID_LGA_2011_AUST/{z}/{x}/{y}.pbf', lngLat, 11, 'FID_LGA_2011_AUST')
            .then(lga => this.lga = lga.features[0].properties.LGA_NAME11);
            this.nearest = window.Map.nearestSimilar(this.facility);
        }
    }, computed: {
        p() {
            return this.facility.properties;
        }
    }
}
</script>

<style scoped>
#FacilityInfo {
    margin: 1em 0;
    border-top: 2px solid lightblue;
    border-bottom: 2px solid lightblue;
    background: hsl(180, 80%, 95%);
    min-height: 100px;
    padding: 1em 0.5em;
}

table {
    text-align: left;
}

.nearest {
    list-style:none;
    padding-left:0;
    
}
.nearest li {
    margin-left:0;
    padding-left: 0;
}

.distance {
    color: #77e;
    font-size: 70%;
    min-width: 40px;
    display:inline-block;
}

</style>