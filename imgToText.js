import { createWorker } from 'tesseract.js';

const worker = await createWorker({
  logger: (m) => console.log(m),
});

(async () => {
  await worker.loadLanguage('kor');
  await worker.initialize('kor');
  const {
    data: { text },
  } = await worker.recognize('https://hkn24.com/news/photo/201811/302176_153811_4549.jpg');
  console.log(text);
  await worker.terminate();
})();

// TODO
// 1. 이미지에서 한글 텍스트 추출 (완료)
// 2. 제품명 정확하게 반환하도록 추출된 텍스트 가공
// 3. 다양한 이미지로 테스트

// const recognize = async ({ target: { files }  }) => {
//     const { data: { text } } = await Tesseract.recognize(files[0], 'kor', {
//         corePath: 'https://unpkg.com/tesseract.js-core@v2.0.0/tesseract-core.wasm.js',
//         logger: m => console.log(m),
//     });
//     console.log(text);
//   }
//   const elm = document.getElementById('uploader');
//   elm.addEventListener('change', recognize);
