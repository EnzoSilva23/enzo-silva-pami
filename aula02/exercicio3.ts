interface Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
}

let livroExemplo: Livro = {
    titulo: `Harry Potter e a Pedra Filosofal`,
    autor: `J. K. Rowling`,
    anoPublicacao: 1997
};

function exibirLivro(livro: Livro): void {
    console.log(`Título: ${livro.titulo}`);
    console.log(`Autor: ${livro.autor}`);
    console.log(`Ano de Publicação: ${livro.anoPublicacao}`);
}

exibirLivro(livroExemplo);