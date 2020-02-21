import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})

export class Child2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log('View of child component has initialed');
  }

  ngAfterViewChecked(): void {
    console.log('View of child has checked');
  }

  greeting(name: string) {
    console.log('Hello ' + name);
  }
}
