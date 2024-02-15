
var array = [];
function addcart(pr,name,img){
  


array.push({
    'id':array.length + 1,
    'productName': name,
    'price': pr,
    'photo': img
});
   console.log (array);
    

localStorage.setItem("array", JSON.stringify(array));

}

var storedNames = JSON.parse(localStorage.getItem("array"));
console.log('data',storedNames);
var i = 0
var w=1
var e=0
storedNames.forEach(element => {
    i+=parseFloat(element.price);
    e+=1;
    $('.appenddata').append('<tr> <td><div class="product-item"><a class="product-thumb" href="#"><img src="'+element.photo+'" alt="Product"></a><div class="product-info"><h4 class="product-title"><a href="#">'+element.productName+'</a></h4></div></div></td><td class="text-center"><div class="count-input"><select class="form-control"><option>1</option></select></div></td>  <td class="text-center text-lg text-medium">$'+element.price+'</td><td class="text-center"><a class="remove-from-cart" href="javascript:void(0)" onclick="remove('+ element.id +')" data-toggle="tooltip" title="" data-original-title="Remove item"><i class="fa fa-trash"></i></a></td></tr>')  
});
$('.cartrate').html(i);
$('.badge').html(e);
//alert(i);


function paynow(){
    alert("Your Payment is Successfully");
    window.location.href = "index.html";
}
function remove(id) {
    alert
    var storedNames1 = JSON.parse(localStorage.getItem("array"));
 const newArr = storedNames1.filter(object => {
  return object.id !== id;
});
 //console.log(newArr)
 localStorage.setItem("array", JSON.stringify(newArr));
location.reload();

}