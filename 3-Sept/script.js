let carousel = [
  {
    id:1,
    title:"boAt Airdopes 131...",
    reviews: "1116 reviews" ,
    image:"/file/img-1-1.webp",
    price:"Rs 1,299",
    discount:"Rs 1691 (57%)"
  },
  {
    id:2,
    title:"boAt Watch Xtend...",
    reviews:"121 reviews" ,
    image:"/file/img-2-1.webp",
    price:"Rs 2,999",
    discount:" Rs 4991 (62%)"
  },
  {
    id:3,
    title:"boAt Airdopes 141...",
    reviews: "411 reviews" ,
    image:"/file/img-3-1.webp",
    price:"Rs 1,499",
    discount:"Rs 2991 (67%)"
  },
  {
    id:4,
    title:"boAt Rockerz 245 V2",
    reviews: "189 reviews" ,
    image:"/file/img-4-1.webp",
    price:"Rs 999",
    discount:"Rs 1991 (67%)"
  },

]

let container = document.querySelector(".container")
let displayCarousel =function(){
    carousel.map((item)=>{
        // console.log(item)
       let html = ` <div class="best-seller-div">
        <img class="best-seller-image" src="${item.image}" alt="">
        <div class="inside-best-seller">
            <h3>${item.title}</h3>
            <p>${item.reviews}</p>
            <h5>${item.price}</h5>
            <p class="save">${item.discount}</p>
            <button>Add to Cart</button>
        </div>
    </div>`
    container.innerHTML +=html
    })
}
    displayCarousel(carousel)

