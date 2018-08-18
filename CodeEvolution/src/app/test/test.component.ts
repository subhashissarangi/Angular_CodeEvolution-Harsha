import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test',
  template: `

  <div>
  <h1>Hello</h1>
  </div>
     <input [id]= myId type="text" value="subhashis">
`,
  styles: [
    `
   div{
   color : blue;
}
`
  ]
})
export class TestComponent implements OnInit {
  
  public myId = "testId";

  constructor() {}

  ngOnInit() {
  }

}
