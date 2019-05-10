<template lang="pug">
#SportSelector
    h3 Sport
    select(v-model="selected")
        option(value="") All sports
        option(v-for="sport in sports") {{ sport }}
        option(value="_other") Other sports
</template>

<script>
export default {
    name: "SportSelector",
    data: () => ({
        selected: '',
        sports: [
            "Aerobics",
            "Athletics",
            "Australian Rules Football",
            "Australian Rules football",
            "BMX",
            "Badminton",
            "Baseball",
            "Basketball",
            "Cricket",
            "Croquet",
            "Cycling",
            "Equestrian",
            "Fitness / Gymnasium Workouts",
            "Golf",
            "Gymnastics",
            "Hockey",
            "Lawn Bowls",
            "Netball (Indoor)",
            "Netball (indoor)",
            "Netball",
            "Sailing",
            "Shooting Sports",
            "Skating",
            "Soccer (Indoor Soccer / Futsal)",
            "Soccer",
            "Squash / Racquetball",
            "Surf Life Saving",
            "Swimming",
            "Tennis (Outdoor)",
            "Volleyball",
            "soccer"
        ]
            
    }),
    created() {
        window.SportSelector = this;
    }, watch:{
        selected() {
            if (this.selected === '_other') {
                window.Map.filterByNotSport(this.sports)
            } else {
                window.Map.filterBySport(this.selected)
            }
        }
    }
}
</script>

<style scoped>

</style>