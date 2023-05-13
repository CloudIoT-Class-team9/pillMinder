const { ImageAnnotatorClient } = require('@google-cloud/vision');

const client = new ImageAnnotatorClient({
  keyFilename: './verdant-petal-386613-54544ba9a08f.json',
});

async function detectText() {
  const [result] = await client.textDetection('./images/어린이 부루펜시럽.png');
  const annotations = result.textAnnotations;
  console.log('Text:');
  annotations.forEach((annotation) => {
    console.log(annotation.description);
  });
}

detectText();
