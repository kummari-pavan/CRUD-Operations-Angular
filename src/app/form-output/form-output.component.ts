import { Component, OnInit ,Input } from '@angular/core';


@Component({
  selector: 'app-form-output',
  templateUrl: './form-output.component.html',
  styleUrls: ['./form-output.component.css']
})
export class FormOutputComponent implements OnInit{
 arrayData : any[];
 @Input() detailsArray1 :any;

 showErrorImg=false;



  ngOnInit(){
    const localStorageData = localStorage.getItem('information');
  }

  onDelete(event:any){
    let buttonId:any = event.target.id;
    let index:any = this.detailsArray1.findIndex(function(each:any){
      let button = "button"+each.id;
      if (button === buttonId){
        return true;
      }
      else{
        return false;
      }
    });
    if (index !== -1 ){
      this.detailsArray1.splice(index,1);
      let strifieddata = JSON.stringify(this.detailsArray1);
      localStorage.setItem("information",strifieddata);
    }
   
    

    
  }
  dataUpdate(){
   
      this.showErrorImg=true;
    
   

  }
  cancle(){
    this.showErrorImg=false;
  }




  // information : any[] = [];

  // ngOnInit() {
  //   this.loadRequests();
  // }

  // loadRequests(){
  //   const existingInformation = localStorage.getItem('informations');
  //   this.information = existingInformation ? JSON.parse(existingInformation) : [];
  // }

  // localStorageData : any;
  // accept(info:any){
  //    this.localStorageData = localStorage.getItem('information');
  // }

  // accept(info : any){
  //   const updatedRequests = this.information.map((item) => {
  //     if(item.mobileName === info.mobileName){
  //       return { ...item};
  //     }
  //     return item;
  // });

  // this.information = updatedRequests;
  // localStorage.setItem('information', JSON.stringify(this.information));

}

      
  

