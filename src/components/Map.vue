<template lang="pug">
    #map
</template>

<script>
import mapboxgl from 'mapbox-gl';
import U from 'mapbox-gl-utils';
import MapboxChoropleth from 'mapbox-choropleth';
import axios from 'axios';
import geodist from 'geodist';
// import circle from '@turf/turf';
const circle = require('@turf/turf').circle;
const ruler = require('cheap-ruler')(-30);
export default {
    data: () => ({
        facilities: { features: [] },
        activeSport: undefined
    }),
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
    }, computed: {
        similarFacilities() {
            return this.facilities.features.filter(f => f.properties.SportsPlayed === this.activeSport)
        }
    },
    methods: {
        toggleLayer(layer, value) {
            if (layer === 'population') {
                window.map.U.toggle('choropleth', value)
            }
        }, nearestSimilar(facility) {
            return this.similarFacilities
                .map(f => (f._distance = ruler.distance(facility.geometry.coordinates, f.geometry.coordinates), f))
                .sort((a, b) => a._distance - b._distance)
                .slice(1,6); // remove the provided facility from the list
        }
    }
}
import 'mapbox-gl/dist/mapbox-gl.css';

function setActiveSport(map, sport) {
    window.Map.activeSport = sport;
    map.U.setCircleColor('sport-and-rec-point', {
        property: 'SportsPlayed',
        type: 'categorical',
        stops: [[sport, 'hsl(150,100%,70%)']], 
        default: 'green'
    });
    map.U.setCircleRadius('sport-and-rec-point', {
        property: 'SportsPlayed',
        type: 'categorical',
        stops: [[sport, 10]], default: 5
    });
    // map.setFilter('facility-catchment', ['==', 'SportsPlayed', sport]);
    const circleRadius = 2;
    map.U.setData('facility-catchment', { 
        type: 'FeatureCollection', 
        features: window.Map.similarFacilities.map(f => 
            circle(f.geometry.coordinates, circleRadius)
        )
    });

}

function init(map) {
    map.U.addGeoJSON('sport-and-rec');
    map.U.addCircle('sport-and-rec-point', 'sport-and-rec', {
        circleColor: 'green',
        circleStrokeColor: 'darkgreen',
        circleStrokeWidth: 1,
    });
    map.U.addGeoJSON('facility-catchment');
    map.U.addLine('facility-catchment', 'facility-catchment', {
        lineColor: 'green',
        lineOpacity:0.5,
        lineDasharray:[2,2]
    });
    // map.U.addCircle('facility-catchment', 'sport-and-rec', {
    //     circleColor: 'hsla(150,80%,50%,0.2)',
    //     circleRadius: 100, // a very lazy alternative to an actual distance
    //     circleStrokeColor: 'darkgreen',
    //     circleStrokeWidth: 1,
    //     filter: false
    // });

map.U.addSymbol('sport-and-rec-labels', 'sport-and-rec', {
        textField: '{FacilityName}',
        minzoom: 15,
        textAnchor: 'left',
        textOffset: [0.5,0],
        textColor: 'green',
        textJustify: 'left'
    });
    map.U.addGeoJSON('vicmap-sport');
    axios.get('data/vicmap_sports.geojson')
        .then(result => {
            map.U.setData('vicmap-sport', result.data)
        });
    axios.get('data/sport_and_rec.geojson')
        .then(result => {
            window.Map.facilities = result.data;
            map.U.setData('sport-and-rec', result.data)
        });
    // map.U.addCircle('vicmap-sport-point', 'vicmap-sport', {
    //     circleColor: 'red'
    // });

    const c = new MapboxChoropleth({
        tableUrl: 'data/dwelling_structure.csv',
        tableNumericField: 'Total selected',
        tableIdField: 'SA4_code_2011',
        geometryTiles: ['https://vector-tiles.terria.io/FID_SA4_2011_AUST/{z}/{x}/{y}.pbf'],
        geometryIdField: 'SA4_CODE11',
        sourceLayer: 'FID_SA4_2011_AUST',
        binCount: 10,
        colorScheme: 'PuBu',
        legendElement: '#Legend .bar',
        paint: {
            'fill-opacity': 0.3
        }, layout: {
            visibility: 'none'
        }, before: 'sport-and-rec-point'
        
    }).addTo(map);


// map.U.hoverPointer('vicmap-sport-point');
    // map.on('mouseover', 'vicmap-sport-point', e => {
    //     window.FeatureInfo.properties = e.features[0].properties
    // });
    map.U.hoverPointer('sport-and-rec-point');
    map.on('mouseover', 'sport-and-rec-point', e => {
        window.FeatureInfo.properties = e.features[0].properties
    });
    map.on('mouseout', 'sport-and-rec-point', e => {
        window.FeatureInfo.properties = undefined
    });
    map.on('click', 'sport-and-rec-point', e => {
        window.FacilityInfo.facility = e.features[0]
        console.log(e.features[0].properties);
        setActiveSport(map, e.features[0].properties.SportsPlayed);
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