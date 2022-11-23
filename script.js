var plusList=document.getElementsByClassName('fa-plus');
var minList=document.getElementsByClassName('fa-minus');
var quantityList=document.getElementsByClassName('quantity');
var unitPriceList=document.getElementsByClassName('unit-price');
var unitSumList=document.getElementsByClassName('unit-sum');
var totalSum=document.getElementById('total-value');
var trashCan=document.getElementsByClassName('fa fa-trash-can close');
var heart=document.getElementsByClassName('fa-regular fa-heart');
 var total=document.getElementById('total-value') ;
for (let i=0;i<trashCan.length;i++)
    trashCan[i].addEventListener("click",function(event){
    event.target.closest('.row').remove();
   })

   for (let i=0;i<heart.length;i++){
   heart[i].addEventListener("click",function(event){
    heart[i].classList.toggle("fa-solid");})
}
for ( let i=0;i<plusList.length;i++){
    quantityList[i].innerHTML=1;
    var value =unitPriceList[i].textContent;
    unitSumList[i].innerHTML="$"+value;  
    var totalValue = Number(total.textContent) +Number(value);
    total.innerHTML=totalValue;
    console.log(totalValue) ;
}
for ( let i=0;i<plusList.length;i++){
plusList[i].addEventListener("click",function(){
    var quantityValue=quantityList[i].textContent;
    quantityValue++ ;
    quantityList[i].innerHTML=quantityValue;
    var sum =quantityValue*unitPriceList[i].textContent;
    unitSumList[i].innerHTML="$"+sum;
    var totalValue = Number(total.textContent) +Number(unitPriceList[i].textContent);
    total.innerHTML=totalValue;
})
}

for ( let i=0;i<minList.length;i++){
    minList[i].addEventListener("click",function(){
    var quantityValue=quantityList[i].textContent;
    if (quantityValue>0){
    quantityValue-- ;
    quantityList[i].innerHTML=quantityValue;
    var sum =quantityValue*unitPriceList[i].textContent;
    unitSumList[i].innerHTML="$"+sum;
    var totalValue = Number(total.textContent) -Number(unitPriceList[i].textContent);
    total.innerHTML=totalValue;
}
    })
    }


