import React from 'react';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import './App.css';
import TileLayer from 'ol/layer/Tile';
import { OSM, TileWMS, XYZ } from 'ol/source';

const url = "https://openmaps.gov.bc.ca/geo/pub/WHSE_BASEMAPPING.DRA_DGTL_ROAD_ATLAS_MPAR_SP/ows?service=WMS"

function App() {
  React.useEffect(() => {
    new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new TileLayer({
          // extent: [-13884991, 2870341, -7455066, 6338219],
          source: new TileWMS({
            url,
            params: {'LAYERS': 'topp:states', 'TILED': true},
            serverType: 'geoserver',
            // Countries have transparency, so do not fade tiles:
            transition: 0,
            crossOrigin: 'anonymous'
          }),
        })
      ],
      view: new View({
        center: [-13764958,7086252],
        // center: [0, 0],
        zoom: 10
      }),
      target: 'map'
    });
  }, [])
  return (
      <div
        id='map'
        style={{width: '400px', height: '400px', border: '1px solid'}}
      >
      </div>
  )
}

export default App
