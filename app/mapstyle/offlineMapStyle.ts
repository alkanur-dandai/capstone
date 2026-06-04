// import maplibregl from "maplibre-gl";

// // ─── Your campus GeoJSON (from basemap-v1.geojson) ───────────────────────────
// export const CAMPUS_GEOJSON: GeoJSON.FeatureCollection = {
//   type: "FeatureCollection",
//   features: [
//     {
//       type: "Feature",
//       properties: {
//         "fill-opacity": 0.9,
//         fill: "#CFE8A9",
//         "stroke-opacity": 0,
//       },
//       geometry: {
//         type: "Polygon",
//         coordinates: [
//           [
//             [119.743826, 5.041528],
//             [119.741635, 5.03559],
//             [119.744473, 5.034551],
//             [119.745225, 5.036582],
//             [119.744709, 5.036786],
//             [119.746181, 5.040679],
//             [119.743826, 5.041528],
//           ],
//         ],
//       },
//     },
//   ],
// };

// // ─── Offline style — no external requests, no glyphs ─────────────────────────
// export const OFFLINE_MAP_STYLE: maplibregl.StyleSpecification = {
//   version: 8,
//   sources: {
//     campus: {
//       type: "geojson",
//       data: CAMPUS_GEOJSON,
//     },
//   },
//   layers: [
//     {
//       id: "background",
//       type: "background",
//       paint: { "background-color": "#e8e8e8" },
//     },
//     {
//       id: "campus-fill",
//       type: "fill",
//       source: "campus",
//       paint: {
//         "fill-color": ["get", "fill"],
//         "fill-opacity": ["get", "fill-opacity"],
//       },
//     },
//     {
//       id: "campus-outline",
//       type: "line",
//       source: "campus",
//       paint: {
//         "line-color": "#5a9a3a",
//         "line-width": 2,
//         "line-opacity": 0.8,
//       },
//     },
//   ],
// };



import maplibregl from "maplibre-gl";

// ─── Your campus GeoJSON (from basemap-v1.geojson) ───────────────────────────
export const CAMPUS_GEOJSON: GeoJSON.FeatureCollection = {


  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              119.743826,
              5.041528
            ],
            [
              119.741635,
              5.03559
            ],
            [
              119.744473,
              5.034551
            ],
            [
              119.745225,
              5.036582
            ],
            [
              119.744709,
              5.036786
            ],
            [
              119.746181,
              5.040679
            ],
            [
              119.743826,
              5.041528
            ]
          ]
        ]
      },
      "properties": {
        "fill-opacity": 1,
        "fill": "rgba(219, 251, 190, 1)",
        "stroke-opacity": 0,
        "visibility": false
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke-width": 9,
        "": 0,
        "stroke": "rgba(107, 105, 105, 1)",
        "fill": "asa"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            119.743176,
            5.0394263
          ],
          [
            119.7435411,
            5.0392914
          ],
          [
            119.7430376,
            5.0380209
          ],
          [
            119.7430302,
            5.0379455
          ],
          [
            119.743054,
            5.037909
          ],
          [
            119.7430961,
            5.037882
          ],
          [
            119.7443634,
            5.0372751
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke-width": 9,
        "stroke": "rgba(117, 117, 117, 1)"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            119.743216,
            5.0394897
          ],
          [
            119.743567,
            5.0393535
          ],
          [
            119.744099,
            5.0406416
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke-width": 9,
        "stroke": "rgba(105, 105, 106, 1)"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            119.7436601,
            5.0376125
          ],
          [
            119.7442677,
            5.0386302
          ],
          [
            119.7443303,
            5.038775
          ],
          [
            119.7443581,
            5.0388483
          ],
          [
            119.7444013,
            5.0389751
          ],
          [
            119.7444164,
            5.0390253
          ],
          [
            119.74444,
            5.0391286
          ],
          [
            119.7444597,
            5.039247
          ],
          [
            119.7445119,
            5.0396029
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke-width": 9,
        "stroke": "rgba(81, 81, 84, 1)"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            119.7450812,
            5.0404372
          ],
          [
            119.7449043,
            5.040007
          ],
          [
            119.7448165,
            5.0397911
          ],
          [
            119.7447719,
            5.0396828
          ],
          [
            119.744749,
            5.0396294
          ],
          [
            119.7447197,
            5.0395808
          ],
          [
            119.7446843,
            5.0395642
          ],
          [
            119.7446408,
            5.0395586
          ],
          [
            119.7445048,
            5.0396057
          ],
          [
            119.7441911,
            5.0397531
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke-width": 9,
        "stroke": "rgba(86, 86, 87, 1)"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            119.7442944,
            5.0397005
          ],
          [
            119.7444712,
            5.0401218
          ],
          [
            119.7443948,
            5.040265
          ],
          [
            119.7441881,
            5.0403941
          ],
          [
            119.744251,
            5.0405915
          ],
          [
            119.7440971,
            5.0406488
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke-width": 9,
        "stroke": "rgba(86, 86, 87, 1)"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            119.7443568,
            5.0372734
          ],
          [
            119.745059,
            5.0386494
          ],
          [
            119.7455432,
            5.040325
          ],
          [
            119.7441858,
            5.0408668
          ],
          [
            119.744098,
            5.0406389
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke-width": 9,
        "stroke": "rgba(98, 98, 98, 1)"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            119.7442601,
            5.0386216
          ],
          [
            119.7444958,
            5.0385237
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke-width": 9,
        "stroke": "rgba(87, 87, 87, 1)"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            119.7434319,
            5.0390111
          ],
          [
            119.7442858,
            5.0386757
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke-width": 9,
        "stroke": "rgba(84, 84, 86, 1)"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            119.7435685,
            5.0393312
          ],
          [
            119.7444028,
            5.0389802
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke-width": 9,
        "stroke": "rgba(109, 108, 108, 1)"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            119.7437532,
            5.0410986
          ],
          [
            119.7431289,
            5.0393264
          ],
          [
            119.7424785,
            5.0375576
          ],
          [
            119.7438939,
            5.036913
          ],
          [
            119.7433235,
            5.0355852
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke-width": 9,
        "stroke": "rgba(98, 98, 100, 1)"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            119.7436994,
            5.0364545
          ],
          [
            119.7431051,
            5.0367257
          ],
          [
            119.7429239,
            5.0363143
          ],
          [
            119.7428209,
            5.0363596
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke-width": 9,
        "stroke": "rgba(83, 83, 86, 1)"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            119.7427815,
            5.0374113
          ],
          [
            119.7430385,
            5.0379337
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke-width": 9,
        "stroke": "rgba(109, 109, 111, 1)"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            119.7431421,
            5.0382758
          ],
          [
            119.7438603,
            5.037952
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke-width": 9,
        "stroke": "rgba(117, 115, 115, 1)"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            119.7435677,
            5.0393542
          ],
          [
            119.7435404,
            5.0392897
          ]
        ]
      }
    }
  ]
}
// ─── Offline style — no external requests, no glyphs ─────────────────────────
export const OFFLINE_MAP_STYLE: maplibregl.StyleSpecification = {
  version: 8,
  sources: {
    campus: {
      type: "geojson",
      data: CAMPUS_GEOJSON,
    },
  },
  layers: [
    {
      id: "background",
      type: "background",
      paint: { "background-color": "#e8e8e8" },
    },
    // 1. Polygon Canvas Background (Strictly Area Geometries)
    {
      id: "campus-fill",
      type: "fill",
      source: "campus",
      filter: ["==", ["geometry-type"], "Polygon"],
      paint: {
        "fill-color": ["coalesce", ["get", "fill"], "rgba(219, 251, 190, 1)"],
        "fill-opacity": ["coalesce", ["get", "fill-opacity"], 1],
      },
    },
    // 2. Structural Campus Perimeter Border
    {
      id: "campus-outline",
      type: "line",
      source: "campus",
      filter: ["==", ["geometry-type"], "Polygon"],
      paint: {
        "line-color": "#5a9a3a",
        "line-width": 2,
        "line-opacity": 0.8,
      },
    },
    // 3. Gray Campus Road & Pathway Infrastructure
    {
      id: "campus-roads",
      type: "line",
      source: "campus",
      filter: ["==", ["geometry-type"], "LineString"],
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        // Safe string wrapper parsing for color and size variables
        "line-color": ["coalesce", ["to-color", ["get", "stroke"]], "rgba(100, 100, 100, 1)"],
        "line-width": ["coalesce", ["to-number", ["get", "stroke-width"]], 6],
      },
    },
  ],
};
