const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

// Read .env without printing its contents. Accept both KEY=value and PowerShell-style $env:KEY=value.
const envPath = path.join(__dirname, ".env");
if (fs.existsSync(envPath)) {
  fs.readFileSync(envPath, "utf8").split(/\r?\n/).forEach((line) => {
    const match = line.match(/^\s*(?:\$?env:)?([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*?)\s*$/);
    if (!match || process.env[match[1]] !== undefined) return;
    let value = match[2];
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    process.env[match[1]] = value;
  });
}

const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;
const contactTo = process.env.CONTACT_TO || emailUser;

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Servidor de contacto activo en http://localhost:5000"));
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailUser,
    pass: emailPass
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  if (!emailUser || !emailPass || !contactTo) {
    return res.status(503).json({ code: 503, message: "Configura EMAIL_USER, EMAIL_PASS y CONTACT_TO en .env." });
  }
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: emailUser,
    replyTo: email,
    to: contactTo,
    subject: "Nuevo mensaje desde Logicadev",
    html: `<p>Nombre: ${name}</p>
           <p>Correo: ${email}</p>
           <p>Telefono: ${phone}</p>
           <p>Mensaje: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
