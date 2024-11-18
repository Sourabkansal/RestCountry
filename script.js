let dark = () => {
   
    if (bodyy.classList.contains("dark")) {
        bodyy.classList.remove("dark")
    } else {
        bodyy.classList.add("dark");
    }
}

let data ;
fetch(`https://restcountries.com/v3.1/all`)
        .then((variable) => {
            return variable.json()
        })
        .then((data2) => {
            data=data2;
          add();
        }
            )

let add=()=>{
    //  console.log(data);
     let contanerr = document.querySelector(".contaner")
     let count =  contanerr.childElementCount;
     for( i = count ; i<= data.length ; i++){
         let div1 = document.createElement("div");
        div1.classList.add("cards");
         let img1 = document.createElement("img");
         img1.src = data[i].flags.png;
        let H2name = document.createElement("h2");
        H2name.innerHTML=data[i].name.common 
        let H3popu = document.createElement("h3");
        H3popu.innerHTML=`Population: ${data[i].population}`
        let H3Region = document.createElement("h3");
        H3Region.innerHTML=`Region: ${data[i].region}`
        let H3Capital = document.createElement("h3");
        H3Capital.innerHTML=`Capital: ${data[i].capital}`
        div1.appendChild(img1)
        div1.appendChild(H2name)
        div1.appendChild(H3popu)
        div1.appendChild(H3Region)
        div1.appendChild(H3Capital)
        contanerr.appendChild(div1)

     }
}

let region=()=>{
    
 let a = ByRegion.value;
 console.log(a)
 let contanerr = document.querySelector(".contaner")
 if(a=="all"){
    let contanerr = document.querySelector(".contaner")
    contanerr.innerHTML="";
    let count =  contanerr.childElementCount;
    for( i = count ; i<= data.length ; i++){
        let div1 = document.createElement("div");
       div1.classList.add("cards");
        let img1 = document.createElement("img");
        img1.src = data[i].flags.png;
       let H2name = document.createElement("h2");
       H2name.innerHTML=data[i].name.common 
       let H3popu = document.createElement("h3");
       H3popu.innerHTML=`Population: ${data[i].population}`
       let H3Region = document.createElement("h3");
       H3Region.innerHTML=`Region: ${data[i].region}`
       let H3Capital = document.createElement("h3");
       H3Capital.innerHTML=`Capital: ${data[i].capital}`
       div1.appendChild(img1)
       div1.appendChild(H2name)
       div1.appendChild(H3popu)
       div1.appendChild(H3Region)
       div1.appendChild(H3Capital)
       contanerr.appendChild(div1)

    }
 }else{
 contanerr.innerHTML="";
 }
const result = data.filter(checkContinents);
console.log(result);
function checkContinents(data) {
  return data.continents == a;
}

result.map((value)=>{
    let contanerr = document.querySelector(".contaner")
let div1 = document.createElement("div");
        div1.classList.add("cards");
         let img1 = document.createElement("img");
         img1.src = value.flags.png;
        let H2name = document.createElement("h2");
        H2name.innerHTML=value.name.common 
        let H3popu = document.createElement("h3");
        H3popu.innerHTML=`Population: ${value.population}`
        let H3Region = document.createElement("h3");
        H3Region.innerHTML=`Region: ${value.region}`
        let H3Capital = document.createElement("h3");
        H3Capital.innerHTML=`Capital: ${value.capital}`
        div1.appendChild(img1)
        div1.appendChild(H2name)
        div1.appendChild(H3popu)
        div1.appendChild(H3Region)
        div1.appendChild(H3Capital)
        contanerr.appendChild(div1);
})


}

let SortCUN=()=>{
    let contanerr = document.querySelector(".contaner")

     let val = input1.value;
     let filtered = data.filter((country) => {
        let leng = val.length;
        country = country.name.common.slice(0, leng);
        return country.toLowerCase().includes(val.toLowerCase());
        
    })
    contanerr.innerHTML="";
    filtered.map((value)=>{
        let contanerr = document.querySelector(".contaner")
        // contanerr.style.justifyContent="start"
        contanerr.style.gap="30px"
        let div1 = document.createElement("div");
                div1.classList.add("cards");
                 let img1 = document.createElement("img");
                 img1.src = value.flags.png;
                let H2name = document.createElement("h2");
                H2name.innerHTML=value.name.common 
                let H3popu = document.createElement("h3");
                H3popu.innerHTML=`Population: ${value.population}`
                let H3Region = document.createElement("h3");
                H3Region.innerHTML=`Region: ${value.region}`
                let H3Capital = document.createElement("h3");
                H3Capital.innerHTML=`Capital: ${value.capital}`
                div1.appendChild(img1)
                div1.appendChild(H2name)
                div1.appendChild(H3popu)
                div1.appendChild(H3Region)
                div1.appendChild(H3Capital)
                contanerr.appendChild(div1);
            
    })
 

}