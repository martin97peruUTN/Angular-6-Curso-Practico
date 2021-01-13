import { Component } from "@angular/core";
import { DataService } from "./data.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Jhon Carter"
  age: number = 23
  posts = []

  users:string[] = ["Juan","Pedro","Jorge"]

  constructor(private dataService: DataService){
    //Se ejecuta ni bien arranca la app el constructor
    this.dataService.getData().subscribe(data => {
      this.posts = data
    });
  }

  sayHello(){
    alert("Hello")
  }
  deleteUser(user){
    for (let i=0;i<this.users.length; i++){
      if(this.users[i]==user){
        this.users.splice(i,1)
      }
    }
  }

  addUser(u){
    this.users.push(u.value)
    u.value=""
    //u.focus
    return false
  }

}
