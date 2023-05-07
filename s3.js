const multer = require('multer');
const multer_s3 = require('multer-s3');
const AWS = require("aws-sdk");


const s3 = new AWS.S3({
    accessKeyId: "AKIAQSBTQZCL22YZAXYI",
    secretAccessKey: "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",
});

const storage = multer_s3({
    s3: s3,
    bucket: 'cloud-user-data', // 자신의 s3 버킷 이름
    contentType: multer_s3.AUTO_CONTENT_TYPE,
    acl: 'public-read', // 버킷에서 acl 관련 설정을 풀어줘야 사용할 수 있다.
    metadata: function(req, file, cb) {
        cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
        cb(null, `contents/${Date.now()}_${file.originalname}`);
    }
})

const upload = multer({
    storage: storage // storage를 multer_s3 객체로 지정
})

module.exports = {
    upload: function (){

    }
}