const Wrapper = document.querySelector(".sliderWrapper")
const menuItem = document.querySelectorAll(".menuItem")

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 9999,
        colors: [
            {
                code: "black",
                img: "./img/airforce.png",
            },
            {
                code: "darkblue",
                img: "./img/airforcedarkblue1.png",
            },
        ],
    },
    {
        id: 2,
        title: "Jordans",
        price: 10999,
        colors: [
            {
                code: "blue",
                img: "./img/jordans1.png",
            },
            {
                code: "black",
                img: "./img/jordansblack1.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazers",
        price: 6999,
        colors: [
            {
                code: "black",
                img: "./img/blazers1.png",
            },
            {
                code: "white",
                img: "./img/blazerswhite1.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 7999,
        colors: [
            {
                code: "white",
                img: "./img/crate1.png",
            },
            {
                code: "black",
                img: "./img/craterblack1.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 10999,
        colors: [
            {
                code: "gray",
                img: "./img/hippie1.png",
            },
            {
                code: "black",
                img: "./img/hippieblack.png",
            },
        ],
    },
]
let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItem.forEach(( item, index ) => {
    item.addEventListener("click", ()=>{
        console.log("Clicked on the menu item with index",index);
        //it changes the current slide
        Wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index]

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "Rs" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img 
        
        //assigning new colors//
        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code;
        })
    });
});


currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor= "white";
            size.style.color= "black";
        });
        size.style.backgroundColor= "black"
        size.style.color= "white"
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
})

close.addEventListener("click",()=>{
    payment.style.display="none"
})

