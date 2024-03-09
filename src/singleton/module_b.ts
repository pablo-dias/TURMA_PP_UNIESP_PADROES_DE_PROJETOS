import { MyDatabaseMetod } from "./db/my-database-metodo";

const myDatabaseClassic = new MyDatabaseMetod;

myDatabaseClassic.add({ name: 'João', age: 15 })
myDatabaseClassic.show()

console.log(myDatabaseClassic === myDataBase)