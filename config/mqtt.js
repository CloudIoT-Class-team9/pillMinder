const mqtt = require("mqtt");

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
client.on("connect", () => console.log("connected" + client.connected));
client.on("error", (error) => console.log("Can't connect" + error));
module.exports ={
  getClient : function(){
    return client;
  }
};