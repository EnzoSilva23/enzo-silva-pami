//Declarações de variaveis
let nome: string = 'Enzo';
let idade: number = 17;
let estaAtivo: boolean = true;

//Arrays
let numeros: number[] = [1, 2, 3, 4, 5];
let nomes: string[] = ['Thiago', 'Elizabeth', 'Arthur'];
let misto:(string | number) [] = ['Thiago', 26, 'Elizabeth', 75];
let misto2: Array<string | number> = ['Thiago', 26, 'Elizabeth', 75];

//Tuplas
let pessoa: [string, number] = ['Maria', 23];

//Union  Types
let id: number | string = 123;
id = 'ABC123';

// Interfaces  - são usadas para definir estrutura de objetos 
interface Usuario {
    nome: string;
    idade: number;
    email?: string; //Opicinal
}

//Utilizar elas fica assim:
let novo_usuario: Usuario = {
    nome: 'Amanda', 
    idade: 17
};