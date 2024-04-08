import { User } from "../interface/user";

const users: User[] = [];

export const MyDatabaseMetod = {
    add(user: User): void {
        users.push(user)
    },

    //Criar um método para remover o usuário.
    remove(index: number): void {
        users.splice(index, 1);
    },
    
    show(): void {
        for (const user of users) {
            console.log(user)
        }
    }
}