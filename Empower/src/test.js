async function quickstart() {
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision');

  // Creates a client
  const client = new vision.ImageAnnotatorClient();

  // Performs label detection on the image file
  const [result] = await client.textDetection('http://pngimg.com/uploads/google/google_PNG19642.png');
  const labels = result.textAnnotations;
  console.log('Labels:');
  console.log(labels[0].description);
  
 // labels.forEach(label => console.log(label.description));
}
quickstart();