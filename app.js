// mqtt 모듈 세팅 -> client 생성 -> 구독 -> message 처리
const express = require("express");
const mqtt = require("mqtt");
const config = require('./config')

const app = express();
const port = 3001;
app.set("port", port);

const url = "mqtt://192.168.219.123";
app.get("/", (req, res) => {
  res.send("Hello world!");
});

const client = config.mqtt.getClient();


// 연결 종료
// client.end();

// 메시지 publish : client.publish(topic, message, [options], [callback])
// var options2 = {
//   retain: true,
//   qos: 1,
// };
// client.publish("testtopic", "test message", options);

//sub
client.subscribe("test");

//message 이벤트 처리
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

const s3 = config.s3
app.post('/upload', s3.single('file'), (req, res) => {
  //body = req.file;
  console.log(req.file);
  res.json({msg: ''});
  // try{
  //   res.status(200).send()
  // } catch(error) {
  //   console.log(error)
  //   res.status(400).send(error)
  // }
});

app.listen(port, () => console.log("Listening on", port));
module.exports = app;
