const offers = [
    {
        offerImg: "./img/body-spray.avif",
        oldPrice: 45,
        newPrice: 40,
        offerName: "Multiple Balls Combo"
    },
    {
        offerImg: "./img/bottle.avif",
        oldPrice: 60,
        newPrice: 50,
        offerName: "Football Weekend Offer"
    },
    {
        offerImg: "./img/cricketkit1.avif",
        oldPrice: 35,
        newPrice: 30,
        offerName: "Badminton Racket Discount"
    },
    {
        offerImg: "./img/shoes1.avif",
        oldPrice: 120,
        newPrice: 99,
        offerName: "Cricket Kit Special"
    },
    {
        offerImg: "./img/t-shirt.avif",
        oldPrice: 80,
        newPrice: 70,
        offerName: "Tennis Gear Deal"
    },
    {
        offerImg: "./img/shoes3.avif",
        oldPrice: 80,
        newPrice: 70,
        offerName: "Tennis Gear Deal"
    },
    {
        offerImg: "./img/cricketkit1.avif",
        oldPrice: 35,
        newPrice: 30,
        offerName: "Badminton Racket Discount"
    },
    {
        offerImg: "./img/shoes1.avif",
        oldPrice: 120,
        newPrice: 99,
        offerName: "Cricket Kit Special"
    }
];

const offContainer = document.querySelector("#offer-container")
let itemsPerPage = 6;
let currentPage = 0;
let totalPage = Math.ceil(offers.length / itemsPerPage);
console.log(totalPage)

function renderOffer(pages, arr, itemsPerPage, parent) {
    parent.innerHTML = "";
    const start = pages * itemsPerPage;
    const end = start + itemsPerPage;
    const visibleOffer = arr.slice(start, end);

    visibleOffer.forEach((offer) => {
        const div = document.createElement("div");
        div.className = "offer fade-in";
        div.style.backgroundImage = `url(${offer.offerImg})`;
        const h3 = document.createElement("h3");
        h3.className = "off-details";
        h3.innerHTML = `Under <del class="old-price">$${offer.oldPrice}</del> <a class="new-price">$${offer.newPrice}</a>`;
        const p = document.createElement("p");
        p.className = "off-name";
        p.innerText = "" + offer.offerName;
        div.appendChild(h3)
        div.appendChild(p)
        // console.log(div)
        console.log(offer)
        parent.appendChild(div);
    })
}

const dots = document.querySelector("#dots1")
for (let i = 0; i < totalPage; i++) {
    const input = document.createElement("input");
    input.setAttribute("type", "button")
    dots.appendChild(input);
    if (i == 0) {
        input.style.backgroundColor = "#555"
    }
    else input.style.backgroundColor = "#bab7b7ff"
}

const dot_inputs = document.querySelectorAll("#dots1 input")
dot_inputs.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        dot_inputs.forEach(d => d.style.backgroundColor = "#bab7b7ff")
        currentPage = index;
        dot.style.backgroundColor = "#555";
        renderOffer(currentPage, offers, itemsPerPage, offContainer);
    })
})

renderOffer(currentPage, offers, itemsPerPage, offContainer);

//set interval
setInterval(() => {
    if (currentPage < totalPage) {
        currentPage++;
        if (currentPage < totalPage) {
            renderOffer(currentPage, offers, itemsPerPage, offContainer);
            dot_inputs.forEach ((d,i) => {
                if (i == currentPage) {d.style.backgroundColor = "#555" }
                else {d.style.backgroundColor = "#bab7b7ff"}
            })
        }
        else if (currentPage == totalPage) {
            currentPage = 0;
            renderOffer(currentPage, offers, itemsPerPage, offContainer);
            dot_inputs.forEach ((d,i) => {
                if (i == currentPage) {d.style.backgroundColor = "#555" }
                else {d.style.backgroundColor = "#bab7b7ff"}
            })
        }
    }
}, 5000);

const dhamakedarDeals = [
    {
        offerImg: "./img/shoes1.avif",
        oldPrice: 120,
        newPrice: 99,
        offerName: "Cricket Kit Special"
    },
    {
        offerImg: "./img/t-shirt.avif",
        oldPrice: 80,
        newPrice: 70,
        offerName: "Tennis Gear Deal"
    },
    {
        offerImg: "./img/shoes3.avif",
        oldPrice: 80,
        newPrice: 70,
        offerName: "Tennis Gear Deal"
    },
    {
        offerImg: "./img/body-spray.avif",
        oldPrice: 45,
        newPrice: 40,
        offerName: "Multiple Balls Combo"
    },
    {
        offerImg: "./img/bottle.avif",
        oldPrice: 60,
        newPrice: 50,
        offerName: "Football Weekend Offer"
    },
    {
        offerImg: "./img/cricketkit1.avif",
        oldPrice: 35,
        newPrice: 30,
        offerName: "Badminton Racket Discount"
    },
    {
        offerImg: "../img/avengers.jpg",
        oldPrice: 35,
        newPrice: 30,
        offerName: "Badminton Racket Discount"
    },
    {
        offerImg: "./img/shoes1.avif",
        oldPrice: 120,
        newPrice: 99,
        offerName: "Cricket Kit Special"
    },
    {
        offerImg: "../img/gift.png",
        oldPrice: 35,
        newPrice: 30,
        offerName: "Badminton Racket Discount"
    },
    {
        offerImg: "../img/bookBg.avif",
        oldPrice: 35,
        newPrice: 30,
        offerName: "Badminton Racket Discount"
    },
    {
        offerImg: "../img/blackmountain.avif",
        oldPrice: 120,
        newPrice: 99,
        offerName: "Cricket Kit Special"
    }
];

let itemsPerPageDeal = 5;
let totalPageDeals = Math.ceil(dhamakedarDeals.length / itemsPerPageDeal);
const dots2 = document.getElementById("dots2");
const dealContainer = document.getElementById("deal-container")
for (let i = 0; i < totalPageDeals; i++) {
    const input = document.createElement("input");
    input.setAttribute("type", "button");
    dots2.appendChild(input);
    if (i == 0) {
        input.style.backgroundColor = "#555"
    }
    else input.style.backgroundColor = "#bab7b7ff"
}
const dot2_inputs = document.querySelectorAll("#dots2 input")
dot2_inputs.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        dot2_inputs.forEach(d => d.style.backgroundColor = "#bab7b7ff")
        currentPage = index;
        dot.style.backgroundColor = "#555";
        renderOffer(currentPage, dhamakedarDeals, itemsPerPageDeal, dealContainer);
    })
})
renderOffer(currentPage, dhamakedarDeals, itemsPerPageDeal, dealContainer);

//set interval
let b=0
setInterval(() => {
    if (b < totalPageDeals) {
        b++;
        if (b < totalPageDeals) {
            renderOffer(b, dhamakedarDeals, itemsPerPageDeal, dealContainer);
            dot2_inputs.forEach ((d,i) => {
                if (i == b) {d.style.backgroundColor = "#555" }
                else {d.style.backgroundColor = "#bab7b7ff"}
            })
        }
        else if (b == totalPageDeals) {
            b = 0;
            renderOffer(b, dhamakedarDeals, itemsPerPageDeal, dealContainer);
            dot2_inputs.forEach ((d,i) => {
                if (i == b) {d.style.backgroundColor = "#555" }
                else {d.style.backgroundColor = "#bab7b7ff"}
            })
        }
    }
}, 6000);

//shop category
const shopCategory = [
    {
        offerImg: "../img/avengers.jpg",
        imgName: "Cricket Kit Special",
        imgOff: "30-80% OFF",
    },
    {
        offerImg: "../img/gift.png",
        imgName: "Cricket Kit Special",
        imgOff: "30-80% OFF",
    },
    {
        offerImg: "../img/bookBg.avif",
        imgName: "Cricket Kit Special",
        imgOff: "30-80% OFF",
    },
    {
        offerImg: "../img/coool.jpg",
        imgName: "Cricket Kit Special",
        imgOff: "30-80% OFF",
    },
    {
        offerImg: "../img/blackmountain.avif",
        imgName: "Cricket Kit Special",
        imgOff: "30-80% OFF",
    },
    {
        offerImg: "../img/happyduo.avif",
        imgName: "Cricket Kit Special",
        imgOff: "30-80% OFF",
    },
    {
        offerImg: "../img/vege2.jpg",
        imgName: "Cricket Kit Special",
        imgOff: "30-80% OFF",
    },
    {
        offerImg: "../img/multipleballs.avif",
        imgName: "Cricket Kit Special",
        imgOff: "30-80% OFF",
    },
    {
        offerImg: "../img/whitePlanewp.avif",
        imgName: "Cricket Kit Special",
        imgOff: "30-80% OFF",
    },
    {
        offerImg: "../img/avengers.jpg",
        imgName: "Cricket Kit Special",
        imgOff: "30-80% OFF",
    }

]
let shop_category = document.querySelector(".shop-category");
let offersInRow = 6;
let totalRow = Math.ceil(shopCategory.length / offersInRow);
console.log(totalRow)


function createCategory(div, i, arr) {
    let start = i * offersInRow;
    let end = start + offersInRow;
    let totaloffers = arr.slice(start, end);
    totaloffers.forEach((offer) => {
        const span = document.createElement('span')
        span.className = "box"
        const img = document.createElement('img')
        img.setAttribute("src", `${offer.offerImg}`)
        const p = document.createElement("p");
        p.innerHTML = `${offer.imgName} <h3 class="img-offer">${offer.imgOff}</h3> shop Now`;
        // console.log(p.innerHTML)
        span.appendChild(img);
        span.appendChild(p);
        div.appendChild(span);
    })
}
for (let i = 0; i < totalRow; i++) {
    let category = document.createElement("div")
    category.className = "category";
    createCategory(category, i, shopCategory);
    shop_category.appendChild(category);
}








































// const offContainer = document.querySelector(".offers-container")
// let count = 0;
// offers.forEach((offer) => {
//     const div = document.createElement("div");
//     div.className="offer";
//     const h3 = document.createElement("h3");
//     div.style.backgroundImage = `url(${offer.offerImg})`;
//     h3.className="off-details";
//     h3.innerText="Under"
//     div.appendChild(h3);
//     const del = document.createElement("del");
//     del.className="old-price";
//     del.innerText= ""+offer.oldPrice;
//     h3.appendChild(del)
//     const a = document.createElement("a");
//     a.className="new-price";
//     a.innerText = ""+offer.newPrice;
//     h3.appendChild(a)
//     const p = document.createElement("p");
//     p.className="off-name";
//     p.innerText = ""+offer.offerName;
//     div.appendChild(p)
//     console.log(div)
//     offContainer.appendChild(div);
//     count++;   //increment count by 1
// })

// console.log(count)