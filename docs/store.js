
document.addEventListener('DOMContentLoaded', function() {

    fetch("./items.json").then(function(resp) {
        return resp.json();
    }).then(function(data) {

        const {productos, postres} = data;

        function cardItems(productos){
            var text = "";
            var i;
            for (i= 0; i < productos.length; i++) {
                
                text += `
            <div class="col s6 m4">
                <div id="${productos[i].id}" class="card">
                    <div class="card-image">
                        <img src="Images/${productos[i].imgName}" alt="" class="responsive-img materialboxed img" width=
                        "50" data-caption="${productos[i].name}">
                        <div class="halfway-fab info">
                        <span class="card-title left"><p class="flow-text white-text brown lighten-2">${productos[i].name}</p></span>
                        <a href="#!" class="btn-small btn-floating yellow black-text right pricetag">$${(productos[i].price/100)}</a></div>
                        
                    </div>
                    <div class="box">
                    <div class="row valign-wrapper piezas center">
                        <div class="input-field col s4 push-s2">
                        <input type="number" id="quantity" class="center" value="1" min="1" max="50" required>
                        </div>
                        <div class="col s4">
                        <ul class=""><li><a href="#!" class="up waves-effect waves-lighten"><i id="up" class="material-icons">arrow_drop_up</i></a></li>
                        <li><a href="#!" class="down waves-effect waves-lighten"><i id="down" class="material-icons">arrow_drop_down</i></a></li></ul>
                        </div>
                        <div class="col s3 pull-s2">
                        <span class="">&nbsp;piezas</span></div>
                    </div></div>
                        <div class="center">
                        <button type="button" class="btn-small black-text orange shop-item-button">
                            <i class="material-icons left">shopping_cart</i></a>
                            <a class="black-text" href="#!">Agregar</a>
                            </button></div>
                </div>
            </div>`;}
            return text;
        }
        
        document.getElementById("test1").innerHTML = cardItems(productos);
        document.getElementById("test2").innerHTML = cardItems('');
        document.getElementById("test3").innerHTML = cardItems(postres);

        let ups = document.getElementsByClassName('up');
        let downs = document.getElementsByClassName('down');
        let agregar = document.getElementsByClassName('shop-item-button');

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

        function check(agregar){
            
            for (i= 0; i < agregar.length; i++) {

                var quantity = agregar[i].parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('input-field')[0].children[0];
                agregar[i].addEventListener('click', changequantity);
                quantity.addEventListener('change', (event)=>{
                    if (isNaN(event.target.value) || event.target.value <= 0) {
                        event.target.value = 1
                    }
        });}};


        document.addEventListener('DOMContentLoaded',
        check(''));
        document.addEventListener('DOMContentLoaded',
        check(ups));
        document.addEventListener('DOMContentLoaded',
        check(downs));
        document.addEventListener('DOMContentLoaded',
        ()=>{
            
        });


        var elems = document.querySelectorAll('.materialboxed');
        var instances = M.Materialbox.init(elems);

})})

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

