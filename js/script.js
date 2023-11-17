var products=document.querySelectorAll(".card");
var text_reslut=document.querySelector(".text-result")
var btn=document.querySelector("#btn")
var total_price=document.querySelector(".total-price")
var price=0;

products.forEach(function(item){
    item.querySelector(".btn").onclick=function(){
        
            text_reslut.innerHTML+=item.querySelector(".card-title").textContent+" "+"+"+" "
            price+=+(item.getAttribute("price"))
        if(text_reslut!=""){
            text_reslut.style.display="block"
            btn.style.display="block"
            total_price.style.display="block"
            
        }
    }
}
)
btn.onclick=function(){
    total_price.innerHTML="total price = "+price
}
console.log("price = "+price)