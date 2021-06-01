  export function initializeMap(mapboxgl, map) {
    var size = 100;
    var Blue_pulsingDot = {
      width: size,
      height: size,
      data: new Uint8Array(size * size * 4),
    
      // get rendering context for the map canvas when layer is added to the map
      onAdd: function() {
        var canvas = document.createElement('canvas');
        canvas.width = this.width;
        canvas.height = this.height;
        this.context = canvas.getContext('2d');
      },
    
      // called once before every frame where the icon will be used
      render: function() {
        var duration = 1000;
        var t = (performance.now() % duration) / duration;
    
        var radius = (size / 2) * 0.3;
        var outerRadius = (size / 2) * 0.7 * t + radius;
        var context = this.context;
    
        // draw outer circle
        context.clearRect(0, 0, this.width, this.height);
        context.beginPath();
        context.arc(
          this.width / 2,
          this.height / 2,
          outerRadius,
          0,
          Math.PI * 2
        );
        context.fillStyle = 'rgba(200, 220, 255,' + (1 - t) + ')';
        context.fill();
    
        // draw inner circle
        context.beginPath();
        context.arc(
          this.width / 2,
          this.height / 2,
          radius,
          0,
          Math.PI * 2
        );
        context.fillStyle = 'rgba(100, 126, 255, 1)';
        context.strokeStyle = 'white';
        context.lineWidth = 2 + 4 * (1 - t);
        context.fill();
        context.stroke();
    
        // update this image's data with data from the canvas
        this.data = context.getImageData(
          0,
          0,
          this.width,
          this.height
        ).data;
    
        // continuously repaint the map, resulting in the smooth animation of the dot
        map.triggerRepaint();
    
        // return `true` to let the map know that the image was updated
        return true;
      }
    };
    var Yellow_pulsingDot = {
      width: size,
      height: size,
      data: new Uint8Array(size * size * 4),
    
      // get rendering context for the map canvas when layer is added to the map
      onAdd: function() {
        var canvas = document.createElement('canvas');
        canvas.width = this.width;
        canvas.height = this.height;
        this.context = canvas.getContext('2d');
      },
    
      // called once before every frame where the icon will be used
      render: function() {
        var duration = 1000;
        var t = (performance.now() % duration) / duration;
    
        var radius = (size / 2) * 0.3;
        var outerRadius = (size / 2) * 0.7 * t + radius;
        var context = this.context;
    
        // draw outer circle
        context.clearRect(0, 0, this.width, this.height);
        context.beginPath();
        context.arc(
          this.width / 2,
          this.height / 2,
          outerRadius,
          0,
          Math.PI * 2
        );
        context.fillStyle = 'rgba(247, 255, 200,' + (1 - t) + ')';
        context.fill();
    
        // draw inner circle
        context.beginPath();
        context.arc(
          this.width / 2,
          this.height / 2,
          radius,
          0,
          Math.PI * 2
        );
        context.fillStyle = 'rgba(245, 203, 0, 1)';
        context.strokeStyle = 'white';
        context.lineWidth = 2 + 4 * (1 - t);
        context.fill();
        context.stroke();
    
        // update this image's data with data from the canvas
        this.data = context.getImageData(
          0,
          0,
          this.width,
          this.height
        ).data;
    
        // continuously repaint the map, resulting in the smooth animation of the dot
        map.triggerRepaint();
    
        // return `true` to let the map know that the image was updated
        return true;
      }
    };

    map.addImage('blue_pulsing-dot', Blue_pulsingDot, { pixelRatio: 2 });
    map.addImage('yellow_pulsing-dot', Yellow_pulsingDot, { pixelRatio: 2 });

    map.on("click", "data", function (e) {
      var features = map.queryRenderedFeatures(e.point, {
        layers: ["data"],
      });
      var clusterId = features[0].properties.cluster_id;
      map
        .getSource("connect.io")
        .getClusterExpansionZoom(clusterId, function (err, zoom) {
          if (err) return;
          map.easeTo({
            center: features[0].geometry.coordinates,
            zoom: zoom,
          });
        });
    });
  
    map.on("click", "unclustered-point", function (e) {
      var coordinates = e.features[0].geometry.coordinates.slice();
      var mag = e.features[0].properties.mag;
      var tsunami;
      if (e.features[0].properties.tsunami === 1) {
        tsunami = "yes";
      } else {
        tsunami = "no";
      }
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }
      new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML("magnitude: " + mag + "<br>Was there a tsunami?: " + tsunami)
        .addTo(map);
    });
    
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );
  
    map.on("mouseenter", "data", function () {
      map.getCanvas().style.cursor = "pointer";
    });
    map.on("mouseleave", "data", function () {
      map.getCanvas().style.cursor = "";
    });
  }
  