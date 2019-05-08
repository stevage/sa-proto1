<template lang="pug">
    #app
        #top
            h1 SportAus Data Platform
        #middle
            #sidebar
                h1 Prototype #1
                | Hello    
                LayerSelector            
            #map-container
                Map
                FeatureInfo
                Legend
        #bottom
</template>

<script>
import Map from './components/Map.vue';
import FeatureInfo from './components/FeatureInfo.vue';
import Legend from './components/Legend.vue';
import LayerSelector from './components/LayerSelector.vue';
export default {
    name: 'app',
    components: {
      Map,
      FeatureInfo,
      Legend,
      LayerSelector
    }
}
</script>

<style>
html, body {
  height: 100vh;
  width: 100%;
  margin:0;
  padding:0;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    display: flex;
    flex-direction: column;
    height:100vh;
}

#top {
    flex-basis: 80px;
    border-bottom: 1px solid grey;
    background:hsl(30, 43.5%, 91%);    
}

#middle {
    flex-grow: 1;
    min-height: 0; /* Crucial to making overflow scroll work */
    display: flex;
}

#sidebar {
    flex-basis: 300px; /* Horizontally */
    border-right: 1px solid lightgrey;
}

#map-container {
    flex-grow:1;
    flex-basis:400px;
    position:relative;
}

#bottom {
    flex-basis: 50px;
    border-top: 1px solid lightgrey;
}

</style>
