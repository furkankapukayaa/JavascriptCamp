import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import { users } from "../data/users.js"
import Customer from "../models/custumer.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User Component Yüklendi!")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1,"Furkan","Kapukaya","Sivas")
let user2 = new User(2,"Engin","Demiroğ","Ankara")
//userService.add(user1)
//userService.add(user2)
//console.log(userService.list())
//console.log(userService.getById(2))



let customer = {id:1, firstName:"Furkan"}
// prototyping
customer.lastName = "Kapukaya"
console.log(customer.lastName)

console.log("----------------------------------------------------")
userService.load()
let customerToAdd = new Customer(1,"Seda","Yılmaz","Ankara","fdgdfg");
customerToAdd.type = "customer"
userService.add(customerToAdd)
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted())