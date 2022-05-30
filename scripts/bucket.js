// On clicking remove button the item should be removed from DOM as well as localstorage.

var bucketdata = JSON.parse(localStorage.getItem("coffee")) || [];

displaydata(bucketdata);

function displaydata(data){
    document.querySelector("#bucket").innerHTML="";
    var total = 0;

    data.forEach(function(el,index){
        let div = document.createElement("div")
        let img= document.createElement("img")
        img.setAttribute("src",el.image);
        let type = document.createElement("h3");
        type.innerText=el.title

        let price = document.createElement("h3");
        price.innerText=el.price

        let ta = document.querySelector("#total_amount");
        ta.innerText=el.ta

        let btn = document.createElement("button");
        btn.innerText="Remove";

        btn.setAttribute("id", "remove_coffee")
        btn.addEventListener("click", function(){
            remove(el,index)
        })

        div.append(img,type,price,btn);
        document.querySelector("#bucket").append(div);


    })

    function remove(el, index){
        bucketdata.splice(index,1);
        localStorage.setItem("coffee",JSON.stringify(bucketdata));
        displaydata(bucketdata);
    }

}
