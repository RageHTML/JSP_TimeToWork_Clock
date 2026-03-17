# TimeToWork Relógio JSP

[![JSP](https://img.shields.io/badge/JSP-9.0.115-blue)](https://tomcat.apache.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)](https://developer.mozilla.org/docs/Web/JavaScript)
[![Java](https://img.shields.io/badge/Java-17-red)](https://www.oracle.com/java/technologies/javase-downloads.html)

Projeto **TimeToWork** é um relógio em tempo real feito com **JSP, Servlet Java e JavaScript**.  
Ele exibe a hora atual no estilo escuro tipo Discord, com atualização automática a cada segundo.

## Exemplo Visual

Abaixo está um exemplo de como o relógio aparece em tempo real:

![TimeToWork Relógio](Gif.gif)

## Explicação do Código

### 1. HoraServlet.java
O arquivo `HoraServlet.java` está localizado em `TimeToWork/WEB-INF/classes/HoraServlet.java` e é responsável por fornecer a **hora atual do servidor**.

### Imports Utilizados

- `import java.io.IOException;`  
  → Tratamento de exceções de entrada/saída no servlet.

- `import java.text.SimpleDateFormat;`  
  → Formatação da data e hora em um padrão específico.

- `import java.util.Date;`  
  → Representa a data e hora atual do sistema.

- `import java.util.Locale;`  
  → Define a localidade (pt-BR) para formatar corretamente a hora.

- `import javax.servlet.ServletException;`  
  → Tratamento de exceções específicas de servlets.

- `import javax.servlet.http.HttpServlet;`  
  → Classe base para criar servlets HTTP.

- `import javax.servlet.http.HttpServletRequest;`  
  → Permite acessar dados da requisição HTTP enviada pelo cliente.

- `import javax.servlet.http.HttpServletResponse;`  
  → Permite enviar dados de volta ao cliente via resposta HTTP.