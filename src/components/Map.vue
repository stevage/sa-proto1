<template lang="pug">
    #map
</template>

<script>
import mapboxgl from 'mapbox-gl';
import U from 'mapbox-gl-utils';
import MapboxChoropleth from 'mapbox-choropleth';
export default {
    mounted() {
        mapboxgl.accessToken = 'pk.eyJ1Ijoic3RldmFnZSIsImEiOiJGcW03aExzIn0.QUkUmTGIO3gGt83HiRIjQw';
        const map = new mapboxgl.Map({
            container: 'map',
            center: [145, -37.8],
            zoom: 12,
            style: 'mapbox://styles/mapbox/light-v9',
        });
        U.init(map);
        window.map = map;
        window.Map = this;
        map.on('load', () => init(map));
    }
}
import 'mapbox-gl/dist/mapbox-gl.css';

function init(map) {
    const c = new MapboxChoropleth({
        tableUrl: 'data/dwelling_structure.csv',
        tableNumericField: 'Total selected',
        tableIdField: 'SA4_code_2011',
        geometryTiles: ['http://vector-tiles.terria.io/FID_SA4_2011_AUST/{z}/{x}/{y}.pbf'],
        geometryIdField: 'SA4_CODE11',
        sourceLayer: 'FID_SA4_2011_AUST',
        binCount: 10,
        colorScheme: 'OrRd',
        legendElement: '#Legend .bar',
        paint: {
            'fill-opacity': 0.5
        }
        
    }).addTo(map);
    map.U.addGeoJSON('vicmap-sport', 'data/vicmap_sports.geojson');
    map.U.addCircle('vicmap-sport-point', 'vicmap-sport', {
        circleColor: 'red'
    });
    map.U.hoverPointer('vicmap-sport-point');
    map.on('mouseover', 'vicmap-sport-point', e => {
        window.FeatureInfo.properties = e.features[0].properties
    });
    
}


</script>

<style scoped>
#map {
    width: 100%;
    height: 100%;
    position:absolute;
}
</style>