const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("PayFirst1 backend is running");
});

app.post("/api/recharge-request", (req, res) => {
  const { mobile, operator, whatsapp } = req.body;

  if (!mobile || !operator || !whatsapp) {
    return res.status(400).json({
      success: false,
      message: "Mobile, operator and WhatsApp number are required"
    });
  }

  console.log("New Recharge Request");
  console.log("Mobile:", mobile);
  console.log("Operator:", operator);
  console.log("WhatsApp:", whatsapp);

  res.json({
    success: true,
    message: "Recharge request received successfully"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`PayFirst1 backend running on port ${PORT}`);
});
