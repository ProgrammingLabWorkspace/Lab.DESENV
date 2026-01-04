import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import TodoItem from './app.type';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo-list-app');
  protected todoList: Array<TodoItem> = new Array();
  protected isEditing = signal(false);

  protected form = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl('')
  });  
  onSubmit(event: Event) : void{
    event.preventDefault();

    let isCreateMode = true;

    const id = this.form.get('id')?.value;
    const title = this.form.get('title')?.value;
    const description = this.form.get('description')?.value;

    if(!title) {
      alert("Title is required");
      return;
    }


    if(this.isEditing()){
      // Editando um item existente.
      this.todoList = this.todoList.map(item => {
        if(item.id === id){
          item.title = title;
          item.description = description;
        }
        return item;
      });
    } else {
        const todoItem = new TodoItem(title, description);
    
        this.todoList = [...this.todoList, todoItem];
    }

    this.form.reset();
    this.isEditing.set(false);
  }

  onDeleteClick(id: string) : void {
    const item = this.todoList.find(item => item.id === id);

    const confirmDelete = confirm(`Deseja remover o item: ${item!.title}?`);

    if(!confirmDelete) return;

    this.todoList = this.todoList.filter(item => item.id !== id);
  }

  onEditClick(item: TodoItem) : void {
    this.form.patchValue({
      id: item.id,
      title: item.title,
      description: item.description
    });
    this.isEditing.set(true);
  }

  onCancelClick() : void {
    this.isEditing.set(false);
    this.form.reset();
  }
}
