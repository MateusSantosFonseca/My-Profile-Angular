const nodemailer = require("nodemailer");
require("dotenv/config");

const mailer = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.GMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSWORD,
  },
});

const sendEmail = (req, res) => {
  const { body } = req;

  message =
    "<div style='margin: 60px 40px 60px 40px;'><p class=MsoNormal> <span lang=pt-BR style='font-size:14.0pt;font-family:Arial'> Nome: <span style='font-size:12.0pt'>"
    + body.nomeRemetente + "</span></p><p></p><p class=MsoNormal> <span lang=pt-BR style='font-size:14.0pt;font-family:Arial'> Email do Remetente: <span style='font-size:12.0pt'>"
    + body.emailRemetente + "</span></p><p class=MsoNormal> <span lang=pt-BR style='font-size:14.0pt;font-family:Arial'> Telefone: <span style='font-size:12.0pt'>"
    + body.telefone + "</span></p><p class=MsoNormal> <span lang=pt-BR style='font-size:14.0pt;font-family:Arial'>Mensagem: <p style='font-size:12.0pt;font-family:Arial;text-align:justify;word-break:break-all;line-height:1.6'>"
    + body.mensagem + "</p></p><p></p></div><hr><div style='text-align:center; margin-top:30px '>Este e-mail foi gerado automaticamente pelo site http://mateussantosfonseca.github.io/My-Profile-Angular.</div>";

  mailer.sendMail(
    {
      from: body.emailRemetente,
      to: [process.env.GMAIL_TO],
      subject: body.assunto || "[No subject]",
      html: message || "[No message]",
    },
    function (err, info) {
      if (err) return res.status(500).send(err);
      res.json({ success: true });
    }
  );
};

const allowCors = (fn) => async (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  // another option
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

module.exports = allowCors(sendEmail);