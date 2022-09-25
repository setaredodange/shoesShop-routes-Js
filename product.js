
let backBtn = document.querySelector('#back')

let shoeTitle = document.querySelector('h1')
let shoeDesc = document.querySelector('p')
let shoeImage = document.querySelector('img')


let productsArray = [
    { id: 1, title: 'Kalenji ', price: 53, img: 'images/1.png', desc:'Run Active Grip Running Shoes Womens   Our design teams developed these cushioned womens shoes with effective grip for running up to 10 km (6 miles) per week.' },
    { id: 2, title: 'Nike ', price: 81, img: 'images/2.png', desc:'Run Active Grip Running Shoes Womens   Our design teams developed these cushioned womens shoes with effective grip for running up to 10 km (6 miles) per week.' },
    { id: 3, title: 'Adidas ', price: 34, img: 'images/3.png', desc:'Run Active Grip Running Shoes Womens   Our design teams developed these cushioned womens shoes with effective grip for running up to 10 km (6 miles) per week.' },
]


let locationParams =  new URLSearchParams(location.search)
let mainProductID = locationParams.get ('id')
console.log(mainProductID);


let mainProductObject = productsArray.find(function (product){
    return product.id === Number(mainProductID)
})

console.log(mainProductObject); 

if(mainProductObject){

    shoeTitle.innerHTML = mainProductObject.title
    shoeDesc.innerHTML = mainProductObject.desc
    shoeImage.setAttribute('src',mainProductObject.img )

}else{
    location.href = "file:///E:/javaexercise/shoesShop-Js/index.html "
}

backBtn.addEventListener('click', function (){
    history.back()
})