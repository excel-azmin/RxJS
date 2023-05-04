import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent  implements OnInit{
  ngOnInit(): void {



    // let buyLaptop = new Promise(function(res, rej){
    //   // res("Promise is resolved");
    //   rej("Promise is rejected");
    // })

    let buyLaptop = new Promise((res, rej) => {
      // res("Promise is resolved");
      rej("Promise is rejected");
    })

    buyLaptop.then((res)=>{
      console.log(res);
    }).catch(e =>{
      console.log(e);
    })

  }

  // myFunction(){
  //   console.log("Funciton is called");

  // }


  promiseCode = `
  
  // let buyLaptop = new Promise(function(res, rej){
    //   // res("Promise is resolved");
    //   rej("Promise is rejected");
    // })

    let buyLaptop = new Promise((res, rej) => {
      // res("Promise is resolved");
      rej("Promise is rejected");
    })

    buyLaptop.then((res)=>{
      console.log(res);
    }).catch(e =>{
      console.log(e);
    })

  }

  // myFunction(){
  //   console.log("Funciton is called");

  // }`

}
