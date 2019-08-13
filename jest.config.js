module.exports = {
    "transform": {
        "^.+\\.jsx?$": "babel-jest",
        ".+\\.(css|styl|less|sass|scss)$": "jest-transform-css",
    },

    "verbose": true,
    "snapshotSerializers": [
        "enzyme-to-json/serializer"
    ]
    ,
}