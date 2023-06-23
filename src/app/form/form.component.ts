import { Component, OnInit ,Input } from '@angular/core';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent implements OnInit{
  mobileName : string ="";
  deviceModel : string ="";
  deviceRam : string ="";
  mobileNameErr : string ="";
  deviceModelErr : string ="";
  deviceRamErr : string ="";

  validatemobileName(){
    this.mobileNameErr=this.mobileName.length>0 ? '' : '*Required.';
  }
  validatedeviceModel(){
    this.deviceModelErr=this.deviceModel.length>0 ? '' : '*Required.';
  }
  validatedeviceRam(){
    this.deviceRamErr=this.deviceRam.length>0 ? '' : '*Required.';
  }
 
 
  @Input() detailsArray:any;

  ngOnInit(){}

  //if( any.mobileName: ==="" && this.deviceModel==="": && this.deviceRam==="" ){

  //}
 
  showSuccessImg=false;
 
  showErrorImg= false;
  saveData(){

   

   this.validatemobileName();
   this.validatedeviceModel();
   this.validatedeviceRam();

   if(this.mobileName==='' && this.deviceModel==='' &&  this.deviceRam===''){
     this.showErrorImg=true;
     this.showSuccessImg=false;
   }

   else{

    this.showErrorImg=false;
     
  
    this.showSuccessImg=true;
    let length ;
    if (this.detailsArray.length === 0){
      length = 0;
    }
    else{
      for (let each of this.detailsArray){
        length = each.id;
      }
    }
    const information ={
      id : length + 1,
      mobileName : this.mobileName,
      deviceModel : this.deviceModel,
      deviceRam : this.deviceRam
    };



    this.detailsArray.push(information);

    localStorage.setItem('information', JSON.stringify(this.detailsArray));

    alert('Data updated Successfully');

    this.mobileName='';
    this.deviceModel='';
    this.deviceRam='';  

  }

 

 
}

  
 


}
