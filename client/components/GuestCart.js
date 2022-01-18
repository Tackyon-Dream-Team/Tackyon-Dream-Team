//Steps
//guestStorage = window.localStorage;
//let cart = [];
//guestStorage.setItem('guestCart', JSON.stringify(cart));
//const cartFromLocalStorage = JSON.parse(guestStorage.getItem('guestCart'))

find(id) {
    let match = guestCart.cart.filter(item => {
        if(item.id === id) return true
    })
    if(match && match[0])
        return match[0]
}

increase(id, qty=1){
    guestCart.cart = guestCart.cart.map(item =>{
        if(item.id === id){
            item.qty++;
        }
        return item
    })
}

add(id){
    if(guestCart.find(id)){
        guestCart.increase(id, 1)
    }
    else{
        let arr = products.filter(product=> {
            if(product.id === id)
                return true
        })
        if (arr && arr[0]){
            let newCartItem = {
                orderId: guestCart.Cart.id
                productId: arr[0].id,
                orderQuantity: 1,
                orderPrice: arr[0].price
            }
        }
    }
}
