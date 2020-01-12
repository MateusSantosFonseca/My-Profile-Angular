## Backend

### Sobre

Este sistema foi desenvolvido para compartilhar minhas informações profissionais e técnicas.

### Como rodar

Alterar, no controller EmailController os parâmetros de email.Credentials e valor de mail.From para os valores correspondentes ao e-mail que será utilizado para enviar o e-mail. Após isso, basta dar start no projeto.

### Problemas

#### Caso hajam problemas com o \oslyn\csc.exe:

#### Usando NuGet, abra o terminal e insira:

###### Install-Package Microsoft.CodeDom.Providers.DotNetCompilerPlatform -Version 2.0.1

#### Caso hajam problema com CORS:

###### Install-Package Microsoft.AspNet.WebApi.Cors -Version 5.2.7

#### Qualquer outro problema, dê save all, build e run no projeto novamente.