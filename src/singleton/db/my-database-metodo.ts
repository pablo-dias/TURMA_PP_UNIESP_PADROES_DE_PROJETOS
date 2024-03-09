import { User } from "../interface/user";

const users: User[] = [];

export class MyDatabaseMetod {
    add(user: User): void {
        users.push(user)
    }
    //Criar a função para deletar um usuário
    show(): void{
        for(const user of users){
            console.log(user)
        }
    }
}