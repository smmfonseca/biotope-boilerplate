report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Icons_0_document_0_phone.png",
        "test": "../bitmaps_test/20180108-112955/backstop_default_Icons_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_Icons_0_document_0_phone.png",
        "label": "Icons",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "1.55",
          "analysisTime": 34
        },
        "diffImage": "../bitmaps_test/20180108-112955/failed_diff_backstop_default_Icons_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Icons_0_document_1_tablet.png",
        "test": "../bitmaps_test/20180108-112955/backstop_default_Icons_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_Icons_0_document_1_tablet.png",
        "label": "Icons",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.30",
          "analysisTime": 56
        },
        "diffImage": "../bitmaps_test/20180108-112955/failed_diff_backstop_default_Icons_0_document_1_tablet.png"
      },
      "status": "fail"
    }
  ]
});