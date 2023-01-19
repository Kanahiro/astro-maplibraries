<script>
    import { onMount } from 'svelte';
    import L from 'leaflet';
    import 'leaflet/dist/leaflet.css';
    onMount(() => {
        const map = L.map('leaflet', {
            center: [36.5, 137.1],
            zoom: 5,
        });
        const backgroundLayer = L.tileLayer(
            'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
            {
                maxZoom: 19,
                attribution:
                    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            },
        );
        map.addLayer(backgroundLayer);
    });
</script>

<div>
    Svelte + Leaflet
    <div id="leaflet" />
</div>

<style>
    #leaflet {
        height: 320px;
    }
</style>
