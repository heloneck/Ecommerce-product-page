let amount_of_products = document.getElementById("amount")
let amount_of_products1 = document.getElementById("amount1")
let total_of_product1 = document.getElementById("total") 
let amount = 0

function change_value(){
    amount_of_products.innerText = amount;
    total_of_product1.innerText = amount * 125.00;
    amount_of_products1.innerText = amount;
    
}
function Increase(){
    amount += 1;
    change_value()
}
function Decrease(){
    if (amount === 0){
        alert("0 is The minumum amount!")
    }else{
    amount -= 1;
    change_value()
    }
}
function change_text(){

}
function add_to_cart(){
    if (amount === 0){
        alert("You must have atleast 1 item!");
    }else{
        change_value();
    }
}
function delete_cart() {
    amount = 0
    change_value()
};