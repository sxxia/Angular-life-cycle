import { 
  Component, 
  OnInit, 
  Input, 
  SimpleChanges, 
  OnChanges, 
  DoCheck
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})

export class ChildComponent implements OnInit, OnChanges, DoCheck {
  @Input() greeting: string;

  @Input() user: { name: string };

  public message = 'Initial message';

  private oldUserName: string;
  private changeDetected = false;
  private noChangeCount = 0;

  constructor() { }

  ngOnInit() {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes, null, 4))
  }

  ngDoCheck() {
    if (this.oldUserName !== this.user.name) {
      this.changeDetected = true;
      console.log('DoCheck: user.name ' + this.oldUserName + ' changes to ' + this.user.name);
      this.oldUserName = this.user.name;
    }
  
    if (this.changeDetected) {
      this.noChangeCount = 0;
    } else {
      this.noChangeCount += 1;
      console.log('DoCheck: ngDoCheck is called when no change for user.name ' + this.noChangeCount + ' times ');
    }
  
    this.changeDetected = false;
  }
}
