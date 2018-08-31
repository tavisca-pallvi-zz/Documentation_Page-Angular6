import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-buttontype',
  templateUrl: './buttontype.component.html',
  styleUrls: ['./buttontype.component.css']
})
export class ButtontypeComponent implements OnInit {
  //@Input('bdescription') buttontype: string;
  @Input() bdescription;
  constructor() { }

  ngOnInit() {
    console.log(this.bdescription);
  }

}
