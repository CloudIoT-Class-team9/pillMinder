import { createWorker } from 'tesseract.js';

const worker = await createWorker({
  logger: (m) => console.log(m),
});

(async () => {
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const {
    data: { text },
  } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
  console.log(text);
  await worker.terminate();
})();

// const recognize = async ({ target: { files }  }) => {
//     const { data: { text } } = await Tesseract.recognize(files[0], 'kor', {
//         corePath: 'https://unpkg.com/tesseract.js-core@v2.0.0/tesseract-core.wasm.js',
//         logger: m => console.log(m),
//     });
//     console.log(text);
//   }
//   const elm = document.getElementById('uploader');
//   elm.addEventListener('change', recognize);
