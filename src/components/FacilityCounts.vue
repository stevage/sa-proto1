<template lang="pug">
#FacilityCounts(v-if="isochrone")
    h3 Alternative {{ facility.properties.SportsPlayed }} facilities
    table
        tr(v-for="contour in [...isochrone.features].sort((a,b) => a.properties.contour - b.properties.contour)")
            td.time {{ contour.properties.contour }} minutes' drive
            td.count {{ facilityCount[contour.properties.contour] }} facilities


</template>

<script>
import { booleanPointInPolygon } from '@turf/turf';
export default {
    name: "FacilityCounts",
    data: () => ({
        isochrone: undefined,

    }),
    created() {
        window.FacilityCounts = this;
    }, computed: {
        facility() {
            return window.FacilityInfo.facility;
        },
        facilityCount() {
            const f = {};
            if (!this.isochrone) {
                return f;
            }
            for (const contour of this.isochrone.features) {
                f[contour.properties.contour] = window.Map.similarFacilities
                    .filter(f => booleanPointInPolygon(f, contour))
                    .length
            };
            return f;
        }
    }
}
</script>

<style scoped>
.time {
    padding-right:2em;
}

</style>