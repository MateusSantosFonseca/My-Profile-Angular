using System;
using System.Net;
using System.Net.Mail;
using System.Web.Http;
// using System.Web.Http.Cors;
using MyProfileBackend.Models;


namespace MyProfileBackend.Controllers
{
    [RoutePrefix("myprofile")]
    public class EmailController : ApiController
    {

        //[EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")] // Está config está presente no WebConfig (httpProtocol>customHeaders)
        [HttpPost]
        [Route("email")]
        public IHttpActionResult EnviarEmail([FromBody] EmailModel email)
        {
            try
            {
                MailMessage mail = new MailMessage();
                SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");

                string emailPadraoDestinatario = "mateus-60@hotmail.com";

                // Deve ser o mesmo do Credentials
                mail.From = new MailAddress("mateusfonsecadev@gmail.com");
                mail.To.Add(emailPadraoDestinatario);
                mail.Subject = email.Assunto;


                string mensagemHtml = "<div style='margin: 60px 40px 60px 40px;'><p class=MsoNormal> <span lang=pt-BR style='font-size:14.0pt;font-family:Arial'> Nome: <span style='font-size:12.0pt'>"
                                    + email.NomeRemetente + "</span></p><p></p><p class=MsoNormal> <span lang=pt-BR style='font-size:14.0pt;font-family:Arial'> Email do Remetente: <span style='font-size:12.0pt'>"
                                    + email.EmailRemetente + "</span></p><p class=MsoNormal> <span lang=pt-BR style='font-size:14.0pt;font-family:Arial'> Telefone: <span style='font-size:12.0pt'>"
                                    + email.Telefone + "</span></p><p class=MsoNormal> <span lang=pt-BR style='font-size:14.0pt;font-family:Arial'>Mensagem: <p style='font-size:12.0pt;font-family:Arial;text-align:justify;word-break:break-all;line-height:1.6'>"
                                    + email.Mensagem + "</p></p><p></p></div><hr><div style='text-align:center; margin-top:30px '>Este e-mail foi gerado automaticamente pelo site.</div>";

                mail.IsBodyHtml = true;
                mail.Body = mensagemHtml;

                SmtpServer.Port = 587;
                SmtpServer.UseDefaultCredentials = false;


                //Alterar dentro das aspas o email e senha utilizado para enviar o email
                SmtpServer.Credentials = new NetworkCredential(mail.From.ToString(), "");
                SmtpServer.EnableSsl = true;

                SmtpServer.Send(mail);

            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.Forbidden, ex.Message);
            }

            return Ok();

        }
    }

}