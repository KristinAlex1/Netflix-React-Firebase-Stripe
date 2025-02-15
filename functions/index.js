/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */



// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const stripe = require("stripe")(functions.config().stripe.secret_key);


exports.handleStripeWebhook = functions.https.onRequest((req, res) => {
  const endpointSecret = functions.config().stripe.webhook_secret;

  let event;

  try {
    // Stripe requires the raw body to verify the signature
    const rawBody = req.rawBody;
    const sig = req.headers["stripe-signature"];
    event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
  } catch (err) {
    console.error(`⚠️ Webhook signature verification failed: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case "invoice.payment_succeeded":
      console.log("✅ Invoice payment succeeded:", event.data.object);
      break;
    case "invoice.payment_failed":
      console.log("❌ Invoice payment failed:", event.data.object);
      break;
    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  // Acknowledge receipt of the event
  res.status(200).send({ received: true });
});
