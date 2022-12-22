const functions = require("firebase-functions");
const request = require("request-promise");
const cors = require("cors")({origin: true});

exports.yelpReviews = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    request({
      url: "https://api.yelp.com/v3/businesses/3QnqtIIX1mE9X9tcvKs1gA/reviews?limit=20&sort_by=yelp_sort",
      headers: {
        "Authorization": `Bearer ${process.env.YELP_API_KEY}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    }).then((response) => res.send({data: response}));
  });
});

exports.getImagekitKeys = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    res.send({
      data: {
        urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
        publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
      },
    });
  });
});

// firebase deploy --only functions
// only 6 env variable free

