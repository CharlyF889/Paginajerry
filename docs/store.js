
document.addEventListener('DOMContentLoaded', function() {

    fetch("./items.json").then(function(resp) {
        return resp.json();
    }).then(function(data) {

        const {quesos, tortillas, platillos, postres} = data;

        function cardItems(productos){
            var text = "";
            var i;
            for (i= 0; i < productos.length; i++) {
                
                text += `
            <div class="col s6 m3">
                <div id="${productos[i].id}" class="card">
                    <div class="card-image">
                        <img src="Images/${productos[i].imgName}" alt="" class="responsive-img materialboxed item-img" width=
                        "50" data-caption="${productos[i].name}">
                        <div class="halfway-fab info">
                        <span class="card-title left"><p class="flow-text white-text brown lighten-2 item-title">${productos[i].name}</p></span>
                        <a href="#!" class="btn-small btn-floating yellow black-text right item-price">$${(productos[i].price/100)}</a></div>
                        
                    </div>
                    <div class="box">
                    <div class="row valign-wrapper piezas center">
                        <div class="input-field col s4 push-s2">
                        <input type="number" id="quantity item-quantity" class="center" value="1" min="1" max="50" required>
                        </div>
                        <div class="col s4">
                        <ul class=""><li><a href="#!" class="up waves-effect waves-lighten"><i id="up" class="material-icons">arrow_drop_up</i></a></li>
                        <li><a href="#!" class="down waves-effect waves-lighten"><i id="down" class="material-icons">arrow_drop_down</i></a></li></ul>
                        </div>
                        <div class="col s3 pull-s2">
                        <span class="">&nbsp;piezas</span></div>
                    </div></div>
                        <div class="center">
                        <button onclick="this.parentElement.parentElement.children[1].children[0].children[0].children[0].value = 0;" class="btn-small black-text orange shop-item-button waves-effect waves-lighten">
                            <i class="material-icons left">shopping_cart</i></a>
                            <a class="black-text" href="#!">Agregar</a>
                            </button></div>
                </div>
            </div>`}
            return text;
        }

        function carritoItem(title, precio, imageSrc, quantityadded){
            var rowcarrito = `
            <li class="collection-item avatar">
            <img class="circle cart-image" src="${imageSrc}" alt="">
            <div class="row row1">
                <div class="col s6">
                    <span class="title">${title}</span>
                    <br>
                    <span class="title cart-price">$${precio}.00</span>
                </div>
            <div class="col s5 secondary-content">
                <div class="row2 valign-wrapper center">
                    <div class="input-field col s4 push-s1">
                    <input type="number" id="quantity" class="center" value="${quantityadded}" min="1" max="50" required>
                    </div>
                    <div class="col s3">
                    <ul class=""><li><a href="#!" class="up waves-effect waves-lighten"><i id="up" class="material-icons">arrow_drop_up</i></a></li>
                    <li><a href="#!" class="down waves-effect waves-lighten"><i id="down" class="material-icons">arrow_drop_down</i></a></li></ul>
                    </div>
                    <div class="col s2 pull-s1">
                    <span class="">pzs</span></div>
                    <div class="col s1">
                        <a href="#!" class=""><i class="material-icons teal-text text-darken-2">remove_shopping_cart</i></a>
                    </div></div</div></div></li>`;

            var i;
            for (i= 0; i < productos.length; i++) {
                
                text += `
                
                `
            }
            return rowcarrito;
        }
        
        function addtoCart(event){

            var button = event.target;
            var cantidad = button.parentElement.parentElement.parentElement.children[1].children[0].children[0].children[0].value;
            var quantityadded = cantidad;
            var title = button.parentElement.parentElement.parentElement.children[0].children[1].children[0].getElementsByClassName('item-title')[0].innerText;
            var imageSrc = button.parentElement.parentElement.parentElement.children[0].children[0].getElementsByClassName('item-img')[0].src ;
            var precio = button.parentElement.parentElement.parentElement.children[0].children[1].children[1].innerText;
            
            console.log(title, precio, imageSrc, quantityadded);
            // carritoItem(title, precio, imageSrc);

            // if (checkifadded == true){
            //     alert('Producto ya agregado al Carrito')
            // }

            M.toast({html: 'Agregado al carrito.'});
            cantidad = 0;
        }
        function addToCartClicked(event){
            var button = event.target
            var shopItem = button.parentElement.parentElement
            var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
            var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
            var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
            console.log(title, imageSrc)
            addItemToCart(title, price, imageSrc)
            updateCartTotal()
        }
        function addItemToCart(title, price, imageSrc){
            var cartRow = document.createElement('div')
            cartRow.classList.add('row')
            var cartItems = document.getElementsByClassName('cart-items')[0]
            var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
            for (var i =0; i < cartItemNames.length; i++) {
                if (cartItemNames[i].innerText == title){
                    alert('Ya seleccionaste ese producto.')
                    return
                }
            }
            var cartRowContents = `
            <div class="cart-column cart-item">
                <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
                <span class="cart-item-title">${title}</span>
            </div>
            <span class="cart-column cart-price">${price}</span>
            <div class="cart-column cart-quantity">
                <input class="cart-quantity-input" type="number" value="1">
                <button class="btn btn-danger" type="button">Remover</button>
            </div>`
            cartRow.innerHTML = cartRowContents
            cartItems.append(cartRow)
            cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
            
            cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
            getElementsById('quantity').addEventListener('change',  )
        }
        
        document.getElementById("test1").innerHTML = cardItems(quesos);
        document.getElementById("test2").innerHTML = cardItems(tortillas);
        document.getElementById("test3").innerHTML = cardItems(platillos);
        document.getElementById("test4").innerHTML = cardItems(postres);
        // document.getElementById("").innerHTML = ;

        const ups = document.getElementsByClassName('up');
        const downs = document.getElementsByClassName('down');
        const agregar = document.getElementsByClassName('shop-item-button');

        document.addEventListener('DOMContentLoaded',
        checkadd(agregar));
        document.addEventListener('DOMContentLoaded',
        check(ups));
        document.addEventListener('DOMContentLoaded',
        check(downs));
        document.addEventListener('DOMContentLoaded',
        ()=>{
        
        });

        function checkadd(agregar){
            for (i= 0; i < agregar.length; i++) {
                agregar[i].addEventListener('click', addtoCart);
            }
        }

        function changequantity(event){
            var clicked = event.target;
            var id = clicked.id;
            var quantity = clicked.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('input-field')[0].children[0];
            if (id === "up") {
                quantity.value = parseInt(quantity.value) + 1;
            } else{
                quantity.value = parseInt(quantity.value) - 1;
            }
            checkquantity(quantity);
        }

        function checkquantity(quantity){
            if (isNaN(quantity.value) || quantity.value < 0) {
                quantity.value = 0
        }};

        function check(buttons){
            
            for (i= 0; i < buttons.length; i++) {

                var quantity = buttons[i].parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('input-field')[0].children[0];
                buttons[i].addEventListener('click', changequantity);
                quantity.addEventListener('change', (event)=>{
                    if (isNaN(event.target.value) || event.target.value <= 0) {
                        event.target.value = 1
                    }
        });}};

        var elems = document.querySelectorAll('.materialboxed');
        var instances = M.Materialbox.init(elems);

})});

if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updatequantity()
}


function ready() {

    var removeCartItemButtons = document.getElementsByClassName("btn-danger")
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++){
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Gracias por su compra')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target 
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total + '.00'
}

