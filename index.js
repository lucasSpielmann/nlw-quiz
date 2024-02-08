
const perguntas = [
    {
        pergunta: "O que é JavaScript?",
        respostas: [
            "Uma linguagem de programação de servidor",
            "Uma linguagem de programação de marcação",
            "Uma linguagem de programação de script",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função do operador '=== ' em JavaScript?",
        respostas: [
            "Comparação estrita de valores e tipos",
            "Atribuição de valor",
            "Comparação de valores apenas",
        ],
        correta: 0
    },
    {
        pergunta: "Como se declara uma variável em JavaScript?",
        respostas: [
            "let = minhaVariavel;",
            "var minhaVariavel;",
            "const minhaVariavel;",
        ],
        correta: 2
    },
    {
        pergunta: "O que é o DOM em JavaScript?",
        respostas: [
            "Um modelo de objeto distribuído",
            "Uma linguagem de marcação",
            "Um modelo de objeto de documento",
        ],
        correta: 2
    },
    {
        pergunta: "O que é uma função de callback em JavaScript?",
        respostas: [
            "Uma função que retorna um valor",
            "Uma função que é passada como argumento para outra função",
            "Uma função que não tem retorno",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
        respostas: [
            "Nenhuma, são sinônimos",
            "let é utilizado para variáveis globais, const para locais",
            "let permite reatribuição, const não",
        ],
        correta: 2
    },
    {
        pergunta: "O que é o conceito de 'hoisting' em JavaScript?",
        respostas: [
            "Um tipo de erro durante a execução do código",
            "O comportamento de mover declarações para o topo do escopo durante a compilação",
            "A prática de usar variáveis não declaradas",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do método 'map()' em arrays em JavaScript?",
        respostas: [
            "Filtrar elementos de um array",
            "Mapear os valores de um array para um novo array",
            "Adicionar elementos a um array",
        ],
        correta: 1
    },
    {
        pergunta: "O que é uma expressão regular em JavaScript?",
        respostas: [
            "Um tipo de operador lógico",
            "Uma forma de representar dados tabulares",
            "Um padrão de texto que pode ser utilizado para buscar ou manipular strings",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a finalidade do método 'JSON.parse()' em JavaScript?",
        respostas: [
            "Converter uma string JSON em um objeto JavaScript",
            "Converter um objeto JavaScript em uma string JSON",
            "Executar um código JavaScript a partir de uma string",
        ],
        correta: 0
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')
const quizItem = template.content.cloneNode(true)
// quiz.appendChild(quizItem)

const corretas = new Set() //nunca pode repetir dentro dele OBJ
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop laço de repetição
for(const item of perguntas){

    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            
            corretas.delete(item)

            // soma acertos
            if(estaCorreta) {
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas


        }

        quizItem.querySelector('dl').appendChild(dt)
        

    }

    quizItem.querySelector('dl dt').remove()
    
    quiz.appendChild(quizItem)

}
