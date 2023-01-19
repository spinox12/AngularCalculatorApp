import { publishFacade, ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  

  finalResult:number=0;
  showResult:boolean=false;
  result:number=0;
  value:number=0;
  firstNum:number=0;
  secondNum:number=0;
  operator:any;
  showVal:any=[];
  inputType:any;
  count:number=0;
  

  numbers = [
    {text: 7, color: 'lightblue'},
    {text: 8, color: 'lightgreen'},
    {text: 9, color: 'lightpink'},
    {text: 4, color: '#DDBDF1'},
    {text: 5, color: 'lightblue'},
    {text: 6, color: 'lightgreen'},
    {text: 1, color: 'lightpink'},
    {text: 2, color: '#DDBDF1'},
    {text: 3, color: 'lightblue'},
    {text: 0, color: 'lightgreen'},
    {text: '+', color: 'lightblue'},
    {text: '-', color: 'lightgreen'},
    {text: '=', color: 'lightpink'},
    {text: 'x', color: '#DDBDF1'},
    {text: '/', color: 'lightblue'}
  
  ];

  
  /* operators = [
    {text: '+', color: 'lightblue'},
    {text: '-', color: 'lightgreen'},
    {text: '=', color: 'lightpink'},
    {text: 'x', color: '#DDBDF1'},
    {text: '/', color: 'lightblue'}
  ];
 */

  doOperation(input:any){
    
   
    if(typeof(input)=="number")
    {
      this.operator='';
      if(this.count==1)
      {
       this.count=0;
      }
      this.secondNum=this.secondNum*10+input;

      setTimeout(()=> {this.secondNum},500)
    }
    else{
      this.showVal.push(this.secondNum);
      
      if(input==this.operator)
      {
        this.operator=input;
      }
      else if(input=="="){
        this.getResult(this.result);
      }
      else 
      {
        
        if(input=="+")
      {
        this.operator="+";
       
      }
      else if(input=="-")
      {
        this.operator="-";
        
      }
      else if(input=="x")
     {
       this.operator="*";
       
     }
      else if(input=="/")
     {
      this.operator="/";
      
      }
      this.result=this.calculateResult(this.operator,this.firstNum,this.secondNum)
      this.count++;
      if(this.count==1)
      {
         this.showVal.push(input);
      }
      this.firstNum=this.result;
      this.secondNum=0;
    }
      

      

    }

    

  }


















/* 
 doFurtherOperation(input:any){
  if(this.operator==undefined && this.firstNum==0 && this.secondNum)
  {
    this.operator="+";
  }
  if(input!="+" && input!="-" && input!="x" && input!="/")
  {
  console.log('firstNum::',this.firstNum)
  console.log('this.operator::::',this.operator)
  console.log('this.secondNum',this.secondNum)
  this.result=this.calculateResult(this.operator,this.firstNum,this.secondNum);
  this.firstNum=this.result;
 this.secondNum=0;
 console.log('operator::::',this.operator)
  console.log('this.result::::::::',this.result)
  this.getResult(this.result,false)
  }  
  return;
 }

  doOperation(input:any){

    console.log('input::',input)
    
    this.showVal.push(input);
  
    let operator:any;
  
    if(input=="=")
    {
      //call getResult()
      this.getResult(this.result,true);
      this.firstNum=0;
      this.secondNum=0;
    }
    else if(input== this.operator)
    {
      
       this.operator=input;
    
    }
    else{

     if(input=="+")
     {
      this.operator="+";
     }
      else if(input=="-")
      {
       this.operator="-";
      }
      else if(input=="x")
      {
       this.operator="*";
      }
      else if(input=="/")
      {
       this.operator="/";
      }
      else{
          
          this.secondNum=this.secondNum*10+input;

      }
      
      this.doFurtherOperation(input);
     
      
    }
      
    } */
    


  calculateResult(operator:any,firstValue:number,secondValue:number)
  {
    
    let res:number=0;
    if(operator=="+")
     res=firstValue+secondValue;
    else if(operator=="-")
    res=firstValue-secondValue;
     else if(operator=="*")
     res=firstValue*secondValue;
     else if(operator=="/")
     res=firstValue/secondValue;
   
     return res;
    
     
  }


  getResult(result:number)
  {
    this.finalResult=result;
    this.showResult=true;
    console.log('this.finalresult::::',this.finalResult)

  }

  clearAll()
  {
    //donothing
    this.finalResult=0;
    this.showVal=[];
  }



}
