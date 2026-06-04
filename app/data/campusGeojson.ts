const campusGeojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { type: "ground", name: "Campus Ground" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [119.7435, 5.038],
            [119.7452, 5.038],
            [119.7452, 5.0396],
            [119.7435, 5.0396],
            [119.7435, 5.038],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { type: "road", name: "Main Road" },
      geometry: {
        type: "LineString",
        coordinates: [
          [119.7438, 5.0385],
          [119.7448, 5.039],
        ],
      },
    },
    {
      type: "Feature",
      properties: { type: "building", name: "IOES" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [119.744, 5.0386],
            [119.7443, 5.0386],
            [119.7443, 5.0389],
            [119.744, 5.0389],
            [119.744, 5.0386],
          ],
        ],
      },
    },
  ],
};

export default campusGeojson;