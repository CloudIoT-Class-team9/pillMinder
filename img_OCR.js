const { ImageAnnotatorClient } = require('@google-cloud/vision');

const client = new ImageAnnotatorClient({
  keyFilename: './verdant-petal-386613-54544ba9a08f.json',
});

// const PILLS = [
//   { name: '닥터베아제정', keywords: ['보강된2단계빠른소화제베아제'] },
//   { name: '베아제정', keywords: ['위와 장에서 작용하는 2단계 빠른 소화제'] },
//   { name: '어린이타이레놀현탁액', keywords: ['현탁액'] },
//   { name: '어린이 부루펜시럽', keywords: ['부루펜'] },
//   { name: '어린이용타이레놀정80mg', keywords: ['80밀리그람아세트아미노펜'] },
//   { name: '타이레놀정160mg', keywords: ['타이레놀정160밀리그람'] },
//   { name: '타이레놀정500mg', keywords: ['타이레놀정500밀리그람'] },
//   { name: '판콜에이내복액', keywords: ['판콜에이'] },
//   { name: '판피린티정', keywords: ['판피린'] },
//   { name: '훼스탈골드정', keywords: ['훼스탈골드정'] },
//   { name: '훼스탈플러스정', keywords: ['훼스탈플러스'] },
// ];

let imagePath = './images/닥터베아제정.png';

// 이미지에서 텍스트를 추출하는 함수
async function detectText(imagePath) {
  try {
    const [result] = await client.textDetection(imagePath);
    const annotations = result.textAnnotations;
    return annotations.map((annotation) => annotation.description).join('');
  } catch (error) {
    console.error('텍스트 추출 중 오류가 발생했습니다.', error);
    throw error;
  }
}

// 추출한 텍스트에서 pill 정보를 찾는 함수
function findPill(text) {
  let pill = '';
  medications.forEach((item) => {
    const isMatch = item.keywords.some((keyword) => text.includes(keyword));
    if (isMatch) {
      pill = item.name;
    }
  });
  return pill;
}

// 찾은 pill 정보를 리턴하는 함수
async function detectPillFromImage(imagePath) {
  try {
    const textResult = await detectText(imagePath);
    const pill = findPill(textResult);

    if (pill === '') {
      console.log('약 정보를 찾지 못했습니다.');
    } else {
      console.log(pill);
      return pill;
    }
  } catch (error) {
    console.error('오류가 발생했습니다.', error);
  }
}

detectPillFromImage(imagePath);
