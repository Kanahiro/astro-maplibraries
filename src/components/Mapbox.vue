<script setup lang="ts">
import { onMounted } from 'vue';

import mapboxgl, { Map } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken =
    'pk.eyJ1Ijoia2FuYWhpcm8iLCJhIjoiY2xkMm5zYXNhMDZrYTNucDh2ajE2MTV6aiJ9.0argv1E6kGrXVWiZyz3Flw';

onMounted(() => {
    const map = new Map({
        container: 'mapbox',
        center: [140, 40],
        maxPitch: 85,
        zoom: 0,
        style: {
            version: 8,
            sources: {
                gsiseamless: {
                    type: 'raster',
                    tiles: [
                        'https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg',
                    ],
                },
            },
            layers: [
                {
                    id: 'gsiseamless',
                    type: 'raster',
                    source: 'gsiseamless',
                },
            ],
        },
        projection: 'globe',
    });
});
</script>

<template>
    <div>
        Vue + Mapbox GL JS
        <div id="mapbox"></div>
    </div>
</template>
<style>
#mapbox {
    height: 320px;
}
</style>
