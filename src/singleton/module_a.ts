import { MyDatabaseMetod } from "./db/my-database-metodo";

const myDatabase = new MyDatabaseMetod;

myDatabase.add({ name: 'João', age:12 })
myDatabase.show()

export { myDatabase };