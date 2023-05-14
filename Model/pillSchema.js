const mongoose = require("mongoose");
const medications = require("./medications");

const uploadPillData = () => {
  const medicationSchema = new mongoose.Schema({
    name: String,
    symptoms: [String],
    dosage: {
      adult: String,
      pediatric: String,
    },
    frequency: String,
  });

  const Medication = mongoose.model("Medication", medicationSchema);

  Promise.all(
    medications.map((medication) => new Medication(medication).save())
  )
    .then(() => {
      console.log("약 데이터가 MongoDB에 저장되었습니다.");
      mongoose.connection.close();
    })
    .catch((error) => {
      console.error("약 데이터 저장 중 오류가 발생했습니다:", error);
      mongoose.connection.close();
    });
};
