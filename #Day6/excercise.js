
/* Let's say we got an e-commerce GUI where the program got to be capable of create the in selling products and have a shopping cart too. Let's solve this problem using the single responsibility principle. */

/* We create a ShoppingCart class who has to manage the shopping cart as his only responsibility. */

class ShoppingCart {  
    constructor(paymentMethods) {
        this.storedArticles = new Map()
        this.storeForLaterArticles = new Map()
        this.paymentMethods = paymentMethods
    }
    insertNewArticleInCart(article) {
        this.storedArticles.set(article.name, article.price)
    }

    insertInForLaterList(cartArticle) {
        this.storeForLaterArticles.set(cartArticle.name, cartArticle.price)
        
        this.storedArticles.delete(cartArticle.name)
    }

    getShoppingCartPaymentMethods() {
        return this.paymentMethods
    }
}

let shoppingCart = new ShoppingCart(["VISA", "Mastercard"])

console.log(shoppingCart)

/* We create a eCommerceArticle class who has to create its product as single reponsibility. */

class eCommerceArticle {
    constructor(name, perks, price, isShippingAvailable, images, productColors, linkedCart) {
        this.name = name
        this.perks = perks
        this.price = price
        this.isShippingAvailable = isShippingAvailable
        this.images = images
        this.productColors = productColors
    }

}

/* We create three instances to experiment with our classes. */

let dummieArticle = new eCommerceArticle(
    "Xiaomi Redmi 9A",
    ["2GB RAM", "32GB Storage"],
    115.99,
    true,
    ["photo.png"],
    ["pink", "white", "orange"]
)

let secondDummieArticle = new eCommerceArticle(
    "Xiaomi Redmi 9A 2",
    ["3GB RAM", "32GB Storage"],
    124,
    true,
    ["photo.png"],
    ["pink", "white", "orange"]
)

let thirdDummieArticle = new eCommerceArticle(
    "Xiaomi Redmi 9C",
    ["4GB RAM", "64GB Storage"],
    149,
    true,
    ["photo.png"],
    ["pink", "white", "orange"]
)

/* Now with our instances all we got to do is save this articles from the marketplace to our shopping cart. And instead of having a single class with the product itself blended with the cart functionalities or something like that. Very simple example, but it's a good way to remember myself what is the S in S.O.L.I.D. */


shoppingCart.insertNewArticleInCart(dummieArticle)
shoppingCart.insertNewArticleInCart(secondDummieArticle)
shoppingCart.insertNewArticleInCart(thirdDummieArticle)

shoppingCart.insertInForLaterList(dummieArticle)

console.log(dummieArticle)


