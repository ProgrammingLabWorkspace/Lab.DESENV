import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-user',
  template: ` 
    @if(isLoggedIn){
      <p>
        Username: {{ username }} - Occupation: {{occupation()}}
      </p>      
    } @else {
      <p>
        Welcome back, friend!
      </p>
    }
  
  `,
})
export class User {
  username = 'Private Ryan';
  isLoggedIn = true;
  occupation = input<string>();
}

@Component({
  selector: 'app-root',
  imports: [User],
  //templateUrl: './app.html',
  template: `
  <span>
    Hello {{city}}, {{currentDate}}
  </span>
  <br />
  <app-user [occupation]="occupation" />

  <button (click)="changeOccupation('Angular Developer')">
      Change occupation to Angular Developer
  </button>

  <ul>
  @for(os of operatingSystens; track os.id){
    <li>{{os.name}}</li>
  }
  </ul>

  <div [contentEditable]="isDivEditable"></div>

  <button (click)="greet()">
    Clique aqui!
  </button>

    <section (mouseover)="showSecretMessage()" (mouseout)="hideSecretMessage()">
      There's a secret message for you, hover to reveal 👀
      {{ message }}
    </section>
  `,
  styles: `
    :host {
      color: #a144eb;
    }
  `,
})
export class App {
  protected readonly title = signal('LearnAngular');
  city: string = "São Paulo";
  currentDate: string = new Date().toDateString();
  operatingSystens: Array<{ id: string, name: string }> = [
    {
      id: "win",
      name: "Windows"
    },
    {
      id: "osx",
      name: "MacOS"
    },
    {
      id: "linux",
      name: "Linux"
    },
  ]
  isDivEditable: boolean = false;

  message:string = "";
  occupation:string ="Soldier";

  greet() {
    alert("Hello, there!");
  }

  showSecretMessage(){
    this.message = "oloko";
  }

  hideSecretMessage(){
    this.message = "";
  }

  changeOccupation(newOccupation:string){
    this.occupation = newOccupation;
  }
}
