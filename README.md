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

  ### Estrutura do Servlet

- `public class HoraServlet extends HttpServlet {}`  
  → Cria um servlet. O `extends HttpServlet` significa que a classe pode **responder a requisições HTTP**.

- `protected void doGet(HttpServletRequest request, HttpServletResponse response)`  
  → `protected` é um **modificador de acesso**, ou seja, o método pode ser usado pela própria classe e por subclasses.  
  → `void` indica que o método **não retorna valor direto**.  
  → `doGet` é o **nome do método**, que responde a requisições GET enviadas pelo cliente.  
  → `HttpServletRequest request` representa a **requisição enviada pelo cliente**.  
  → `HttpServletResponse response` representa a **resposta que será enviada ao cliente**.

- `throws ServletException, IOException`  
  → Esse método pode gerar erros.  
  → `ServletException` trata **erros relacionados ao servlet**.  
  → `IOException` trata **erros de entrada/saída**.

- `response.setContentType("text/plain");`  
  → Informa ao navegador que **o conteúdo enviado será texto simples**.

- `SimpleDateFormat formato = new SimpleDateFormat("HH:mm:ss", new Locale("pt", "BR"));`  
  → `SimpleDateFormat` transforma datas em texto formatado.  
  → `"HH:mm:ss"` define o **formato da hora** (horas:minutos:segundos).  
  → `new Locale("pt", "BR")` define **idioma e região** (Português, Brasil).

- `String hora = formato.format(new Date());`  
  → Guarda o resultado em uma **variável do tipo texto (`String`)** chamada `hora`.  
  → `formato.format(...)` pega o objeto `Date` e o converte no **formato HH:mm:ss**.  
  → `new Date()` cria um objeto de **data/hora atual do sistema**.

- `response.getWriter().write(hora);`  
  → `getWriter()` retorna um objeto que permite **escrever texto na resposta HTTP**.  
  → `write(hora)` escreve o **conteúdo da variável `hora`** que será enviado para o navegador.

### 2. web.xml

O arquivo `web.xml` está localizado em `TimeToWork/WEB-INF/web.xml` e é responsável por **configurar os servlets e mapear suas rotas**.

### Estrutura do web.xml

- `<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee" version="3.1">`  
  → Define que este é o **arquivo de configuração da aplicação web**.  
  → `version="3.1"` indica a versão da **Servlet API** utilizada.

- `<servlet>`  
  → Define um **servlet** na aplicação.  

    - `<servlet-name>HoraServlet</servlet-name>`  
      → Nome lógico do servlet, usado para referência no mapeamento de URL.  

    - `<servlet-class>HoraServlet</servlet-class>`  
      → Nome da **classe Java** que implementa o servlet (`HoraServlet.class`).

- `</servlet>`  
  → Fecha a definição do servlet.

- `<servlet-mapping>`  
  → Mapeia o servlet para uma **rota específica**.

    - `<servlet-name>HoraServlet</servlet-name>`  
      → Referencia o **nome do servlet** definido anteriormente.

    - `<url-pattern>/hora</url-pattern>`  
      → Define o **caminho de acesso no navegador**.  
      → Ex.: `http://localhost:8080/TimeToWork/hora` chama o `HoraServlet`.

- `</servlet-mapping>`  
  → Fecha o mapeamento do servlet.

- `</web-app>`  
  → Fecha a definição da aplicação web no `web.xml`.

### 3. hora.js

O arquivo `hora.js` está localizado em `TimeToWork/js/hora.js` e é responsável por **atualizar a hora em tempo real** na página principal (`main.jsp`).

## Estrutura do hora.js

- `function atualizarHora() { ... }`  
  → Cria uma **função chamada `atualizarHora`** que busca e atualiza a hora atual.

    - `fetch("/TimeToWork/hora")`  
      → Faz uma **requisição HTTP GET** para o servlet `HoraServlet`.  
      → Pega a hora atual que o servlet fornece como **texto simples**.

    - `.then(response => response.text())`  
      → Recebe a **resposta da requisição** e transforma em **texto legível**.

    - `.then(data => { document.getElementById("hora_atual").innerText = data; })`  
      → Atualiza o conteúdo do elemento HTML com id `hora_atual`.  
      → Mostra a hora retornada pelo servlet diretamente na página.

- `setInterval(atualizarHora, 1000);`  
  → Chama a função `atualizarHora` **a cada 1000 milissegundos (1 segundo)** para manter a hora atualizada em tempo real.

- `atualizarHora();`  
  → Executa a função **imediatamente** quando o arquivo é carregado, para não precisar esperar o primeiro intervalo.