let img = document.getElementById("preview_img");
let img_overlay = document.getElementById("preview_img_overlay");
let counter = 1
let img_preview = document.getElementsByClassName("small_img");
let img_preview_src = ''
let imagesLen = img_preview.length;
let big_img = document.getElementById("big_img");

function change_img_left(){
    if (counter === 1){
        img.src = "images/image-product-4.jpg";
        counter += 1;
    }else if (counter === 2){
        img.src = "images/image-product-3.jpg";
        counter += 1;
    }else if (counter === 3){
        img.src = "images/image-product-2.jpg";
        counter += 1;
    }
    else if (counter === 4){
        img.src = "images/image-product-1.jpg";
        counter = 1;
    }
}
function change_img_right(){
    if (counter === 1){
        img.src = "images/image-product-2.jpg";
        counter += 1;
    }else if (counter === 2){
        img.src = "images/image-product-3.jpg";
        counter += 1;
    }
    else if (counter === 3){
        img.src = "images/image-product-4.jpg";
        counter += 1;
    }
    else if (counter === 4){
        img.src = "images/image-product-1.jpg";
        counter = 1;
    }
}
function change_img_left_overlay(){
    if (counter === 1){
        img_overlay.src = "images/image-product-4.jpg";
        counter += 1;
    }else if (counter === 2){
        img_overlay.src = "images/image-product-3.jpg";
        counter += 1;
    }else if (counter === 3){
        img_overlay.src = "images/image-product-2.jpg";
        counter += 1;
    }
    else if (counter === 4){
        img_overlay.src = "images/image-product-1.jpg";
        counter = 1;
    }
}
function change_img_right_overlay(){
    if (counter === 1){
        img_overlay.src = "images/image-product-2.jpg";
        counter += 1;
    }else if (counter === 2){
        img_overlay.src = "images/image-product-3.jpg";
        counter += 1;
    }
    else if (counter === 3){
        img_overlay.src = "images/image-product-4.jpg";
        counter += 1;
    }
    else if (counter === 4){
        img_overlay.src = "images/image-product-1.jpg";
        counter = 1;
    }
}

for (var i = 0; i < imagesLen; i++) {
    img_preview[i].addEventListener('click', function (){
        resetBorder();
        addBorderTo(this);
        
    });
}
function resetBorder() {
    for (var v = 0; v < imagesLen; v++) {
        img_preview[v].style.border = '';
        img_preview[v].style.opacity = 1;
    }
}
function addBorderTo(thisImage) {
    thisImage.style.border = '2px solid rgba(255, 125, 26, 3)';
    thisImage.style.opacity = 0.5
    img_preview_src = thisImage.getAttribute("src")
    change_big_img(img_preview_src)
}
function change_big_img(thing){
    if (thing === 'images/image-product-1-thumbnail.jpg' ){
        big_img.src = "images/image-product-1.jpg"
    }
    else if (thing === 'images/image-product-2-thumbnail.jpg' ){
        big_img.src = "images/image-product-2.jpg"
    }
    else if (thing === 'images/image-product-3-thumbnail.jpg' ){
        big_img.src = "images/image-product-3.jpg"
    }
    else if (thing === 'images/image-product-4-thumbnail.jpg' ){
        big_img.src = "images/image-product-4.jpg"
    }
}

let overlay = document.getElementById("overlay");
function open_overlay(){
    overlay.style.display = "flex"
}
function close_overlay(){
    overlay.style.display = "none"
}
