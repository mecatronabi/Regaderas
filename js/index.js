
let response= document.getElementById('rega1');

function getData(){

 let url = 'http://tl.cloudns.cc/api/showers/';


 

  fetch(url)
  .then ((resp)=>resp.json())
  .then(function(data){
    console.log(data);
    
  
   
    let characterInfo = 
         ` 
         <div class="status">
         <h2>Se muestra el porcentaje de ocupación de las regaderas</h2>
     </div>
     <div class="status">
         <div class="hm">
             <div class="elemento">
                 <img src="assets/boy.svg" alt="">
             </div>
             <div class="elemento">
                 <h4>${data[0].available}%</h4>
             </div>
         </div>
         <div class="hm">
             <div class="elemento">
                 <img src="assets/girl.svg" alt="">
             </div>
             <div class="elemento">
                 <h4>${data[1].available}%</h4>
             </div>

         </div>
     </div>
   
        `
        setTimeout(function () { 
            location.reload(true); 
          }, 300000);
          
 
    response.innerHTML = characterInfo;

   

 
})
 
}
getData();







/*




const populate= document.getElementById('rega1');
//{}//Objeto
//[]//Arreglo

let holaApi = new XMLHttpRequest();
holaApi.addEventListener("load",getData);
holaApi.open("GET","http://tl.cloudns.cc/api/showers/");
holaApi.send();

function getData(){
let data = JSON.parse(this.responseText);
console.log(data);
let characterInfo = data.map(function(character){
  return ("<div class="+"name"+">" + character.available + " </div>");
});
populate.innerHTML = characterInfo;

}
*/