//Função que retorna tipos 
function saudacao(nome: string): string {
    return 'olá, ${nome}!';
}

console.log(saudacao('Leandro'));

//interface para objeto usuario
interface Usuario {
    nome: string;
    idade: number;
    email?: string; //Opicinal
}

//utilizando a interface usuario fica assim:
function exibirUsuario(usuario: Usuario): void{
    console.log(`Nome: ${usuario.nome}`);
    console.log(`Idade: ${usuario.idade}`);
}

exibirUsuario({nome: 'Marcos', idade: 23});

//exemplo de uma função que retorna arrays e tem parametros opcionais
function listarNomes(nomes: string[]): void{
    nomes.forEach(nome => console.log(nome));
}

listarNomes(['Thiago', 'Beatrice', 'Kaiser']);