document.addEventListener('DOMContentLoaded', function() {
    // Função simulando a obtenção de notícias via API
    const carregarNoticias = () => {
        const noticias = [
            {
                id: 'noticia1',
                titulo: 'Notícia Importante',
                conteudo: 'Essa é a descrição da notícia mais importante do dia.'
            },
            {
                id: 'noticia2',
                titulo: 'Notícia de Última Hora',
                conteudo: 'Mais uma notícia de última hora para você se atualizar.'
            }
        ];

        noticias.forEach(noticia => {
            const noticiaElement = document.getElementById(noticia.id);
            noticiaElement.querySelector('h3').textContent = noticia.titulo;
            noticiaElement.querySelector('p').textContent = noticia.conteudo;
        });
    };

    carregarNoticias();
});


let noticias = document.querySelector('.outras-noticias-1-single');

            noticias.addEventListener('click',()=>{
                window.location.href='file:///C:/Users/igorc/Desktop/RPG/site%20noticia%20rpg/tentativa%2003/index.html';
            });



