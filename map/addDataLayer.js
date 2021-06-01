export function addDataLayer(map, data) {

  for(let i=0; i<data.length; i++){
    switch(data[i].source){
      case "counter":
        map.addSource(data[i].source, {
          type: "geojson",
          data: data[i].geoJson,
          cluster: true,
          clusterMaxZoom: 14,
          clusterRadius: 50,
          clusterProperties: {
            sum: ["+", ["get", "event_count"]],
          },
        });
        break;
      case "blue_points":
        map.addSource(data[i].source, {
          type: "geojson",
          data: data[i].geoJson
        });
        break;
      case "yellow_points":
        map.addSource(data[i].source, {
          type: "geojson",
          data: data[i].geoJson
        });
        break;
      case "photo_points":
        data[i].geoJson.features.forEach(function(maker){
          var el = document.createElement('div');
          el.className = 'marker';
          el.style.backgroundImage = 'url(https://placekitten.com/g/' + maker.properties.iconSize.join('/') + '/)';
          el.style.width = maker.properties.iconSize[0] + 'px';
          el.style.height = maker.properties.iconSize[1] + 'px';
          el.style.backgroundSize = '100%';
          new map.Marker(el)
          .setLngLat(maker.geometry.coordinates)
          .addTo(map);
        })
    }
  }

  map.addLayer({
    'id': 'blue_points',
    'type': 'symbol',
    'source': 'blue_points',
    'layout': {
      'icon-image': 'blue_pulsing-dot'
    }
  });
  map.addLayer({
    'id': 'yellow_points',
    'type': 'symbol',
    'source': 'yellow_points',
    'layout': {
      'icon-image': 'yellow_pulsing-dot'
    }
  });

  map.addLayer({
    id: "clusters",
    type: "circle",
    source: "counter",
    filter: ["has", "point_count"],
    paint: {
      "circle-color": "rgb(25, 95, 253)",
      "circle-radius": ["step", ["get", "point_count"], 20, 100, 30, 750, 40],
      "circle-opacity": 0.75,
      "circle-stroke-width": 4,
      "circle-stroke-color": "#fff",
      "circle-stroke-opacity": 0.5,
    },
  });

  map.addLayer({
    id: "cluster-count",
    type: "symbol",
    source: "counter",
    filter: ["has", "point_count"],
    layout: {
      "text-field": "{sum}",
      "text-font": ["Open Sans Bold"],
      "text-size": 16,
    },
    paint: {
      "text-color": "white",
    },
  });

  map.addLayer({
    id: "unclustered-point",
    type: "circle",
    source: "counter",
    filter: ["!", ["has", "point_count"]],
    paint: {
      "circle-radius": ["step", ["get", "event_count"], 20, 100, 30, 750, 40],
      "circle-color": "rgb(25, 95, 253)",
      "circle-opacity": 0.75,
      "circle-stroke-width": 4,
      "circle-stroke-color": "#fff",
      "circle-stroke-opacity": 0.5,
    },
  });

  map.addLayer({
    id: "event-count",
    type: "symbol",
    source: "counter",
    filter: ["!", ["has", "point_count"]],
    layout: {
      "text-field": "{event_count}",
      "text-font": ["Open Sans Bold"],
      "text-size": 16,
    },
    paint: {
      "text-color": "white",
    },
  });
}

