import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.scss']
})
export class Child4Component implements
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
    this.logMessage('Child: Name value in construstor ' + name);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const newName = changes['name'].currentValue;
    this.logMessage('Child: Name value in ngOnChanges ' + newName);
  }

  ngOnInit() {
    this.logMessage('Child: ngOnInit');
  }

  ngDoCheck() {
    this.logMessage('Child: ngDoCheck');
  }

  ngAfterContentInit() {
    this.logMessage('Child: ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.logMessage('Child: ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.logMessage('Child: ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.logMessage('Child: ngAfterViewChecked');
  }

  ngOnDestroy() {
    this.logMessage('Child: ngOnDestroy');
  }
}
