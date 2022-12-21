const functions = require("firebase-functions");
const cors = require("cors")({origin: true});

exports.helloWorld = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    functions.logger.info("Hello logs!", {structuredData: true});
    res.send("Hello from Firebase!");
  });
});

// firebase deploy --only functions
