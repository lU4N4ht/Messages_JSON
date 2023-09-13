'use strict'
const pessoas = [
    {
        nome: 'Bernardo Ribeiro',
        mensagem: 'Posso realizar o pagamento por...',
        perfil: 'bernardo.jpg',
        destinatario: 'Isabel Neves',
        tempo: 'Há 30 minutos',
        quantidade: '1',
        redeSocial: 'whatsapp.png',
        redeNome: 'whatsapp'
    },
    {
        nome: 'Joana Lopes',
        mensagem: 'Bom dia, como posso ajuda...',
        perfil: 'joana.jpg',
        destinatario: 'Miguel Carvalho',
        tempo: 'Há 05 minutos',
        quantidade: '2',
        redeSocial: 'mensagem-no-facebook.png',
        redeNome: 'messenger'
    },
    {
        nome: 'Isabel Neves',
        mensagem: 'Bom dia, gostaria de saber quant...',
        perfil: 'isabel.jpg',
        destinatario: 'Cecília Gomes',
        tempo: 'Há 1 hora',
        quantidade: '1',
        redeSocial: 'bolha-de-bate-papo.png',
        redeNome: 'sms'
    },
    {
        nome: 'Miguel Carvalho',
        mensagem: 'Adorei o atendimento, foi nota 10...',
        perfil: 'miguel.jpg',
        destinatario: 'Bernardo Ribeiro',
        tempo: 'Agora',
        quantidade: '4',
        redeSocial: 'instagram.png',
        redeNome: 'instagram'
    },
    {
        nome: 'Gabriele Mendes',
        mensagem: 'A senhora necessita de mais a...',
        perfil: 'gabriele.jpg',
        destinatario: 'Joana Lopes',
        tempo: 'Há 15 minutos',
        quantidade: '2',
        redeSocial: 'whatsapp.png',
        redeNome: 'whatsapp'
    },
    {
        nome: 'Joaquim Ferreira',
        mensagem: 'Estarei enviando o comprovant...',
        perfil: 'joaquim.jpg',
        destinatario: 'Gabriele Mendes',
        tempo: 'Há 24 minutos',
        quantidade: '3',
        redeSocial: 'instagram.png',
        redeNome: 'instagram'
    },
    {
        nome: 'Cecília Gomes',
        mensagem: 'Gostaria de saber quand...',
        perfil: 'cecilia.jpg',
        destinatario: 'Joaquim Ferreira',
        tempo: 'Há 2 horas',
        quantidade: '1',
        redeSocial: 'whatsapp.png',
        redeNome: 'whatsapp'
    },
    {
        nome: 'Marcos Ferraz',
        mensagem: 'Posso realizar o pagamento por...',
        perfil: 'marcos.jpg',
        destinatario: 'Gabriele Mendes',
        tempo: 'Há 09 minutos',
        quantidade: '4',
        redeSocial: 'mensagem-no-facebook.png',
        redeNome: 'messenger'
    },
    {
        nome: 'Sonia Nakamura',
        mensagem: 'Preciso entrar em contato com a...',
        perfil: 'sonia.jpg',
        destinatario: 'Marcos Ferraz',
        tempo: 'Há 45 minutos',
        quantidade: '2',
        redeSocial: 'instagram.png',
        redeNome: 'instagram'
    },
    {
        nome: 'Geraldo Munhoz',
        mensagem: 'Marquei uma reunião hoj...',
        perfil: 'geraldo.jpg',
        destinatario: 'Joana Lopes',
        tempo: 'Agora',
        quantidade: '1',
        redeSocial: 'whatsapp.png',
        redeNome: 'whatsapp'
    }
]
function mostrarCards(pessoas) {
    const cardContainer = document.getElementById('card-container')
    const card = document.createElement('div')
    card.classList.add('card')
    const pessoa = document.createElement('img')
    pessoa.src = `./img/${pessoas.perfil}`
    pessoa.alt = pessoas.nome
    const text = document.createElement('div')
    text.classList.add('text')
    const nameMessagens = document.createElement('div')
    nameMessagens.classList.add('name-messagens')
    const nome = document.createElement('h2')
    nome.textContent = pessoas.nome
    const quantidadeMensagens = document.createElement('h5')
    quantidadeMensagens.classList.add('messages-number')
    quantidadeMensagens.textContent = pessoas.quantidade
    const tempoMensagem = document.createElement('h6')
    tempoMensagem.textContent = pessoas.tempo
    const mensagem = document.createElement('p')
    mensagem.classList.add('mensagem')
    mensagem.textContent = pessoas.mensagem
    const destinatario = document.createElement('h3')
    destinatario.classList.add('destinatario')
    destinatario.textContent = pessoas.destinatario
    const rede = document.createElement('img')
    rede.classList.add('rede-social')
    rede.src = `./img/${pessoas.redeSocial}`
    rede.alt = pessoas.redeNome

    nameMessagens.replaceChildren(nome, quantidadeMensagens, tempoMensagem)
    text.replaceChildren(nameMessagens, mensagem, destinatario)
    card.replaceChildren(pessoa, text, rede)
    cardContainer.appendChild(card)
}
pessoas.forEach(mostrarCards)