import { Component, OnInit, Input, SimpleChanges, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.scss']
})
export class HooksComponent implements 
OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit, 
AfterContentChecked, 
AfterViewInit, 
AfterViewChecked, 
OnDestroy {
  
  @Input() name: string;

  private logIndex = 1;

  private logMessage(msg: string) {
    console.log(`#${this.logIndex++} ${msg}`)
  }

  constructor() {
    this.logMessage('Name value in construstor ' + name);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const newName = changes['name'].currentValue;
    this.logMessage('Name value in ngOnChanges ' + newName);
  }

  ngOnInit() {
    this.logMessage('ngOnInit');
  }

  ngDoCheck() {
    this.logMessage('ngDoCheck');
  }

  ngAfterContentInit() {
    this.logMessage('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.logMessage('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.logMessage('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.logMessage('ngAfterViewChecked');
  }

  ngOnDestroy() {
    this.logMessage('ngOnDestroy');
  }
}
