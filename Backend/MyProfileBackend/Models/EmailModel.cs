using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyProfileBackend.Models
{
    public class EmailModel
    {
        public string NomeRemetente { get; set; }
        public string Assunto { get; set; }
        public string EmailRemetente { get; set; }
        public string Telefone { get; set; }
        public string Mensagem { get; set; }
    }
}