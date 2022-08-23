import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task2';
}

export class AppComponent {
  company = 'BhavnaCorp';
  isvalid:boolean=true;
  show()
  {
    alert('Hello function call');
  }

  name = "Vishal Kumar";
  constructor(){
    setTimeout(() =>{
      this.name = "Prince";
    },2000)
  }
  college="PSIT Kanpur";
  Branches:string[]=[
    'CSE',
    'ECE',
    'IT'
  ]
  student:any[]=[
    {ID:'101',Name:'Manish',Branch:'CSE',Gender:'Male'},
    {ID:'102',Name:'Alexa',Branch:'ECE',Gender:'Female'},
    {ID:'103',Name:'John',Branch:'CSE',Gender:'Male'},
    {ID:'104',Name:'Sanorita',Branch:'CSE',Gender:'Female'},
    {ID:'105',Name:'Mayank',Branch:'ECE',Gender:'Male'}
  ];

  dropdownvalue="";
  setdropdownvalue(newvalue:any)
  {
    this.setdropdownvalue=newvalue.target.value;
  }

  adbuttonstyles()
  {
    let cssstyles={
      'color':'red',
      'font-weight':'bold'
    };
    return cssstyles;
  }
  
}
