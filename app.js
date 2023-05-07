// mqtt 모듈 세팅 -> client 생성 -> 구독 -> message 처리
const express = require('express');
const mqtt = require("mqtt");

const app = express();
const port = 3001;
app.set("port", port);
app.get("/", (req, res) => {
  res.send("Hello world!");
});

// ** url 세팅해야됨 **
const url = "mqtt://192.168.219.123";

// options : username, pw 를 요구하는 broker라면 객체안에 다음과 같이 값을 넣어주면됨
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
client.on("connect", () => {
  console.log("connected" + client.connected);
});

// 연결 종료
// client.end();

// error : 연결 실패
// client.on("error", (error) => {
//     console.log("Can't connect" + error);
// })

// 메시지 publish : client.publish(topic, message, [options], [callback])
// var options2 = {
//   retain: true,
//   qos: 1,
// };
// client.publish("testtopic", "test message", options);

// Topic에 Subscribe : client.subscribe(topic/topic array/topic object, [options], [callback])
// 하나의 topic : string
// 여러 topic을 같은 'qos'로 구독 : array
// 여러 topic을 다른 'qos'로 구독 : object
const topic_s = "topic";
const topic_list = ["topic2", "topic3", "topic4"];
const topic_o = { topic22: 0, topic33: 1, topic44: 1 };
client.subscribe(topic_s, { qos: 1 });
client.subscribe(topic_list, { qos: 1 });
client.subscribe(topic_o);

// 구독했다면 message 이벤트로 리스너를 만들어서 처리 가능
// message를 저장하기만 하면됨
client.on("message", (topic, message, packet) => {
  console.log("message is " + message);
  console.log("topic is " + topic);
  console.log("packet is " + packet);
});

app.listen(port, () => console.log("Listening on", port));
module.exports = app;