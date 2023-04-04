let hello = new Promise(function(resolve,reject) {
  setTimeout(function(){
    console.log("hello amandeep");
  },5000)
   
    // resolve(124124);
    reject( new Error("bhai rejected"));
});

// hello.then((value) => { console.log(value)});
hello.catch((error) => { console.log("received an error ")});

console.log("amandeep")
console.log("amandeep")

