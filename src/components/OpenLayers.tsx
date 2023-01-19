import { useEffect, useRef } from 'react';

import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/WebGLTile.js';
import View from 'ol/View.js';
import 'ol/ol.css';
const OpenLayers = () => {
    const maplibreDiv = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (maplibreDiv.current === null) return;
        const map = new Map({
            target: maplibreDiv.current,
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center: [0, 0],
                zoom: 0,
            }),
        });
    });
    return (
        <div>
            React + OpenLayers
            <div style={{ height: 320 }} ref={maplibreDiv}></div>
        </div>
    );
};

export default OpenLayers;
