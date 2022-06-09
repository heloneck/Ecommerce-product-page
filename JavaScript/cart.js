        let checkbox_condition = false;
        let cart_items = document.getElementById("cart_items_container");   
        let cart_not_empty = document.getElementById('cart_not_empty')
        let cart_empty = document.getElementById('cart_empty')

        function check_checkbox_condition() {
            if (checkbox_condition === false) {
                checkbox_condition = true
                cart()   
            }else if (checkbox_condition === true){
                checkbox_condition = false
                cart()    
            };
        };
        function cart() {
            if (checkbox_condition === true){
                cart_items.style.display = "flex";
                if (amount === 0){
                    cart_not_empty.style.display = "none";
                    cart_empty.style.display = "flex";
                }else {
                    cart_empty.style.display = "none";
                    cart_not_empty.style.display = "flex";
                };
            }else if (checkbox_condition === false) {
                cart_items.style.display = "none";

            };
        }






