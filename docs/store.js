
document.addEventListener('DOMContentLoaded', function() {

    fetch("./items.json").then(function(resp) {
        return resp.json();
    }).then(function(data) {
        
        var obj = data;

        var info = obj.productos;
        var block = document.createElement('div');

        console.log(info[0]);
        var text = "";

        var i;
        for (i= 0; i < info.length; i++) {
            text += `
                <div class="col s5 m3  z-depth-2">
                    <div class="card">
                        <div class="card-image">
                            <img class="responsive-image storeimg" src="Images/` + info[i].imgName + `">
                            <a href="#" class="btn-floating yellow black-text  halfway-fab center">$` + (info[i].price/100) + `</a>
                        </div>
                    </div>
                    <div class="card-content">
                        <div class="card-item"><p>` + info[i].name + `</p></div>
                <div class="card-action">
                    <div class="input-field valign-wrapper">
                    <input type="number" value="1" id="quantity" class="center"><span>piezas</span>
                    </div>
                        <button class="btn-medium black-text orange right btn1 shop-item-button">
                            <a href="#"><i class="material-icons">shopping_cart</i></a>
                        <a href="#">Agregar</a>
                        </button>
                    </div>
                </div>

        </div>`;

        }

        document.getElementById("geeks").innerHTML = text;



        // info.forEach(element => {

        //     block.innerHTML = id + "  " + name;
        //     console.log(block);
        //     container.appendChild(block);
        //     }
        
    ;
})})

if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
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

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
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
