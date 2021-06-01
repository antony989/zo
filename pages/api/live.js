export default (req, res) => {
  res.statusCode = 200;
  res.json(
      [
          {
              source: "counter",
              geoJson: {
                  type: "FeatureCollection",
                  features: [
                    {
                      type: "Feature",
                      geometry: { type: "Point", coordinates: [126.97688884274817,37.575650779448786] },
                      properties: {
                        title: "Black Cat",
                        cluster: false,
                        venue: "blackcat",
                        event_count: 10,
                      },
                    },
                    {
                      type: 'Feature',
                      geometry: {
                        type: 'Point',
                        coordinates: [125.97688884274817,38.175650779448786]
                      },
                      properties: {
                        title: "Black Cat",
                        cluster: false,
                        venue: "blackcat",
                        event_count: 15,
                      },
                    }
                  ],
                }
          },
          {
            source: "blue_points",
            geoJson: {
              type: 'FeatureCollection',
              features: [
                {
                  type: 'Feature',
                  geometry: {
                    type: 'Point',
                    coordinates: [126.78943542170339,37.424381664223404]
                  }
                },
                {
                  type: 'Feature',
                  geometry: {
                    type: 'Point',
                    coordinates: [126.8004128675476,37.57176905655787]
                  }
                },
                {
                  type: 'Feature',
                  geometry: {
                    type: 'Point',
                    coordinates: [126.6308406329199,37.47494275050033]
                  }
                },
              ],
            }
        },
        {
          source: "yellow_points",
          geoJson: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [127.21847423505358,37.66096031903572]
                }
              },
            ],
          }
      },
      {
        source: "photo_points",
        geoJson: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              properties: {
                'iconSize': [60, 60]
              },
              geometry: {
                type: 'Point',
                coordinates: [123.21847423505358,37.66096031903572]
              }
            },
          ]
        }
      }
      ]
  );
};
