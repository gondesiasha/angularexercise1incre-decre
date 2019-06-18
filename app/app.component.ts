import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title ='Excercise1';
  name:string="My Account";
  count:number=200;
  isdisabled:string="";


handledepositClick(event:number)
{
  if(this.count>=0)
      this.isdisabled="";
    this.count=this.count+10;

}
handlewithdrawalClick(event:number){
  if(this.count==10)
    this.isdisabled="disabled";
  this.count=this.count-10;
}
}

