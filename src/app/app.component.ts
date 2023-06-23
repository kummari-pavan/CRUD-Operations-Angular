import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pavan_task';
  array = this.getdataFromloaclStorage();
  getdataFromloaclStorage(){
    let strifieddata:any = localStorage.getItem("information");
    let parseddata = JSON.parse(strifieddata);
    if (parseddata === null){
      return [];
    }
    else{
      return parseddata;
    }
  }
}
