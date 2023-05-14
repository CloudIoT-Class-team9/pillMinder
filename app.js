// mqtt 모듈 세팅 -> client 생성 -> 구독 -> message 처리
const express = require("express");
const { MongoClient } = require("mongodb");

const mqtt = require("mqtt");

var s3 = require("./s3");

const app = express();
const port = 3001;
app.set("port", port);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

// ** url 세팅해야됨 **
// options : username, pw 를 요구하는 broker라면 객체안에 다음과 같이 값을 넣어주면됨
const url = "mqtt://192.168.219.123";

const options = {
  host: "127.0.0.1",
  port: 8883,
  protocol: "mqtts",
  username: "steve",
  password: "password",
};

// connect 메서드 : mqtt broker와 연결 및 client class 반환
const client = mqtt.connect(url);

// client.on : 클라이언트 객체에서 발생하는 이벤트 처리를 위한 메서드
// connect 이벤트는 client.connected 변수를 true로 설정
client.on("connect", () => console.log("connected" + client.connected));

client.subscribe("test");

// 구독했다면 message 이벤트로 리스너를 만들어서 처리 가능
// message를 저장하기만 하면됨
let msg = "";
client.on("message", (topic, message, packet) => {
  msg = String(message);
  console.log("message is " + message);
  console.log("topic is " + topic);
  console.log("packet is " + packet);
});

app.get("/mqtt", (req, res) => {
  res.send("sub_message : " + msg);
});

app.listen(port, () => console.log("Listening on", port));
module.exports = app;

// mongoDB
const mongoUrl = "mongodb://localhost:27017"; // MongoDB 서버의 호스트 및 포트
const dbName = "mydatabase"; // 데이터베이스 이름
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://Seung:smGAE5i9LplOt26V@cloudiot.ihcmy0s.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

const mongoClient = new MongoClient(mongoUrl);

async function connectToMongoDB() {
  try {
    // MongoDB 서버에 연결
    await client.connect();
    console.log("MongoDB에 연결되었습니다.");

    // 데이터베이스 선택
    const db = mongoClient.db(dbName);

    // 여기에서 추가적인 작업을 수행
    // 예를 들면 컬렉션에 데이터를 삽입, 조회, 업데이트, 삭제하는 등의 작업
  } catch (error) {
    console.error("MongoDB 연결 중 오류가 발생했습니다:", error);
  } finally {
    // MongoDB 연결 종료
    await client.close();
    console.log("MongoDB 연결이 닫혔습니다.");
  }
}

connectToMongoDB();
