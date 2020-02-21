import { Component, ViewChild, OnInit, SimpleChanges } from '@angular/core';
import { Child2Component } from './child2/child2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Simon Xia';

  private logIndex = 1;
  
  private logMessage(msg: string) {
    console.log(`#${this.logIndex++} ${msg}`)
  }

  constructor() {
    this.logMessage('Parent: Name value in construstor ' + name);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const newName = changes['name'].currentValue;
    this.logMessage('Parent: Name value in ngOnChanges ' + newName);
  }

  ngOnInit() {
    this.logMessage('Parent: ngOnInit');
  }

  ngDoCheck() {
    this.logMessage('Parent: ngDoCheck');
  }

  ngAfterContentInit() {
    this.logMessage('Parent: ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.logMessage('Parent: ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.logMessage('Parent: ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.logMessage('Parent: ngAfterViewChecked');
  }

  ngOnDestroy() {
    this.logMessage('Parent: ngOnDestroy');
  }
}

  // @ViewChild('view1', { static: true }) view1: Child2Component;

  // public title = 'Simon Xia';

  // ngAfterContentInit(): void {
  //   console.log('The project content of parent component has been initialized');
  // }

  // ngAfterContentChecked(): void {
  //   console.log('The project content of parent component has been checked');
  // }

  // ngAfterViewInit(): void {
  //   console.log('The view of parent component has been initialized')
  // }
// }
