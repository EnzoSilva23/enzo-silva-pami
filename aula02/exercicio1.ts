let produto: string = 'Mouse';
let preco: number = 59.90;
let disponivel: boolean = true;

function exiberMensagem(produto: string,  preco: number, disponivel: boolean): string{
    return `Produto: ${produto} - Preço: ${preco} - Disponivel: ${disponivel}`;
}

exiberMensagem(`Mouse`, 59.90, true);