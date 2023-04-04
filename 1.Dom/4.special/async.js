async function utility(){

    let dm= new Promise((resolve,reject) => {

        setTimeout(() =>{
            resolve("amandeep dhillon")
        },4000)
    })

    let ms= new Promise((resolve,reject) => {

        setTimeout(() =>{
            resolve("amandeep")
        },3000)
    })

    let d1= await dm;
    let d2= await ms
    return [d1,d2]
}

;

console.log(utility())