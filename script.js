var plusList=document.getElementsByClassName('fa-plus');
var minList=document.getElementsByClassName('fa-minus');
var quantityList=document.getElementsByClassName('quantity');
var unitPriceList=document.getElementsByClassName('unit-price');
var unitSumList=document.getElementsByClassName('unit-sum');
var totalSum=document.getElementById('total-value');
var trashCan=document.getElementsByClassName('fa fa-trash-can close');
var heart=document.getElementsByClassName('fa-solid fa-heart');
   for (let i=0;i<trashCan.length;i++)
    trashCan[i].addEventListener("click",function(event){
    event.target.closest('.row').remove();
   })
   for (let i=0;i<heart.length;i++)
   heart[i].addEventListener("click",function(event){
   event.target.style.color='rgba(193, 32, 102, 0.708)';
    
    
   })
   
    
    
       
    

var total=0;
for ( let i=0;i<plusList.length;i++){
    quantityList[i].innerHTML=1;
    var value =unitPriceList[i].textContent;
    unitSumList[i].innerHTML="$"+value;    
}
for ( let i=0;i<plusList.length;i++){
plusList[i].addEventListener("click",function(){
    var quantityValue=quantityList[i].textContent;
    quantityValue++ ;
    quantityList[i].innerHTML=quantityValue;
    var sum =quantityValue*unitPriceList[i].textContent;
    unitSumList[i].innerHTML="$"+sum;
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
}
    })
    }


