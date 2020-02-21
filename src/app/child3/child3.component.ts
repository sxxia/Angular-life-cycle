import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss']
})
export class Child3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentChecked(): void {
    console.log('The project content in child component has been checked');
  }

  ngAfterContentInit(): void {
    console.log('the project content in child component has been initialized');
  }
}
