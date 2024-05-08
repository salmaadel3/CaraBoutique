let bar = document.getElementById('bar');
let close = document.getElementById('close');
let nav = document.getElementById('navbar');
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}



//***************************** Cart **************************************** */   

let add = document.getElementById("add"); 
let cart = document.getElementById("cart-table");
let proimg = document.getElementById("mainimg");
let product = document.getElementById("product");
let price = document.getElementById("price");
let quantity = document.getElementById("quantity");
let dataPro;
// create product
if(localStorage.product != null){
    dataPro=JSON.parse(localStorage.product)
}
else{
    dataPro=[];
}
add.onclick=function(){
    let newPro = {
       product : product.value.toLowerCase(),
       price : price.value,
       quantity : quantity.value
    }
}
localStorage.setItem('product' , JSON.stringify(dataPro));
// show product
function showData(){
    let data ='';
    for(let i=0 ; i<dataPro.length;i++){
        data +=`
        <tr>
                        <td>#</td>
                        <td>${dataPro[i].proimg}</td>
                        <td>${dataPro[i].product}</td>
                        <td>${dataPro[i].price}</td>
                        <td>${dataPro[i].quantity}</td>
                        <td>${dataPro[i].total}</td>
                    </tr>
        `
    }
    document.getElementById('tbody').innerHTML=data;
    // let btnDelete = document.getElementById('deleteAll');
    // if(dataPro.length>0){
    //     btnDelete.innerHTML=`
    //     <button onclick='daleteAll()'>Delete All (${dataPro.length})</button>
    //     `
    // }
    // else{
    //     btnDelete.innerHTML='';
    // }
}
showData();