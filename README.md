# Frontend Mentor - FAQ accordion solution

Esta é uma solução do [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor ajuda você melhorando suas habilidades de programação ao construir projetos da vida real. 

## Visão geral

### O Desafio

Usuários devem ser capazes de ver:

- Esconder e mostrar as respostas de uma pergunta quando clicado
- Navigate the questions and hide/show answers using keyboard navigation alone
- Ver o layout mais otimizado para cada tamanho de tela
- Ver os hovers dos elementos ao colocar o mouse por cima

### Screenshot
Design para PC's
![](./design/desktop-design.jpg)

Design para celulares

![](./design/mobile-design.jpg)

## Processo

### Feito com

- HTML
- CSS
- Flexbox

### Aprendizados

Aprendi sobre `@keyframes` e fazer algumas animações, além de ter adquirido experiência na criação de um FAQ e o sistema de Accordion, importantes e presentes em vários sites reais.

Aqui um trecho do código feito com o que aprendi:

```css
@keyframes fade {
    from{
        opacity: 0;
        transform: translateY(-10px);
    }
    to{
        opacity: 1;
        transform: translateY(0);
    }
}
```
