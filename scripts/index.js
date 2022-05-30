// Add the coffee to local storage with key "coffee"

var bucketdata = JSON.parse(localStorage.getItem("coffee")) || [];

const url = "https://masai-mock-api.herokuapp.com/coffee/menu";

 async function getData(){
    try{

    let res = await fetch(url);
    let products = await res.json();
    append(products.menu.data);

    console.log(products.menu.data);
  }  catch(err){
        console.log(err);
}
}



  getData();
  
   function append(data){
    let menu =document.getElementById("menu");

    function displaydata(data){

        var count = bucketdata.length;

        var c = document.querySelector("#coffee_count");
        
        c.innerText=count;

    }

     data.forEach(function(el){

       let img = document.createElement("img");
       img.src=el.image;

       let p = document.createElement("p");
       p.innerText=el.title;

       let p1 = document.createElement("p");
       p1.innerText=el.price;

       let button = document.createElement("button");
      button.innerText = "Add to Bucket";
           button.setAttribute("id","add_to_bucket")
            button.addEventListener("click",function(){
                  bucket(el)
         })
       
   
      let div = document.createElement("div");
       div.append(img, p, p1, button);
       menu.append(div);

   });

   function bucket(el){
    bucketdata.push(el)
    localStorage.setItem("coffee",JSON.stringify(bucketdata));
    displaydata(bucketdata)
   }
}










