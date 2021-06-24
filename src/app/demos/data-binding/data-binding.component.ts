import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
})
export class DataBindingComponent {

  public count: number = 0;
  public nome: string = "";

  addCount() {
    this.count++;
  }
  resetCount() {
    this.count = 0;
  }
  // KeyUp(event: any) {
  //   this.nome = event.target.value;
  // }

}
