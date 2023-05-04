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

    // let buyLaptop = new Promise((res, rej) => {
    //   // res("Promise is resolved");
    //   rej("Promise is rejected");
    // })

    // buyLaptop.then((res)=>{
    //   console.log(res);
    // }).catch(e =>{
    //   console.log(e);
    // })



    // Async & Await

    let newPromise = new Promise((resloved, rejecte) =>{
      setTimeout(() => {
        resloved("new Promise Resolved")
      }, 2000)
    })

  async function getData() {
    // return "Data Received";

    let response = await newPromise;
    console.log(response);

  }

  // console.log(getData());

  getData();










  }




  // myFunction(){
  //   console.log("Funciton is called");

  // }


  // promiseCode = `
  
  // // let buyLaptop = new Promise(function(res, rej){
  //   //   // res("Promise is resolved");
  //   //   rej("Promise is rejected");
  //   // })

  //   let buyLaptop = new Promise((res, rej) => {
  //     // res("Promise is resolved");
  //     rej("Promise is rejected");
  //   })

  //   buyLaptop.then((res)=>{
  //     console.log(res);
  //   }).catch(e =>{
  //     console.log(e);
  //   })

  // }

  // // myFunction(){
  // //   console.log("Funciton is called");

  // // }`



  



}
