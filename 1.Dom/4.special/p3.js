let pro1=new Promise(function(resolve,reject) {
  setTimeout(() =>{
    console.log("amandeep");
  },5000)
   
    resolve();
})

pro1.then((value) => {
    let pro2= new Promise(function(resolve,reject) {

        setTimeout(() =>{
            console.log("amandeep dhillon")
        },2000)
        resolve("i am pro2")
    })

    return pro2;
}).then((value) =>{console.log(value)})