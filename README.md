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