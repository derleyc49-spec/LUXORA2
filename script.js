let cart = 0

function addToCart(){
  cart++
  document.getElementById("cartCount").innerText = cart
}

function scrollToSection(){
  document.getElementById("cars").scrollIntoView({behavior:"smooth"})
}

function card(item){
  return `
    <div class="card">
      <img src="${item.img}">
      <div class="cardContent">
        <h3>${item.name}</h3>
        <p>${item.price}</p>
        <button onclick="addToCart()">Adicionar</button>
      </div>
    </div>
  `
}

function generateCars(){

  const brands = ["Mercedes","BMW","Audi","Ferrari","Porsche","Lamborghini","McLaren"]

  let cars = []

  for(let i=1;i<=100;i++){

    let brand = brands[i % brands.length]

    cars.push({
      name: brand + " " + i,
      price: (120000 + i * 3500) + "€",
      img: `https://source.unsplash.com/400x300/?${brand.toLowerCase()},supercar,luxury`
    })

  }

  document.getElementById("carsProducts").innerHTML =
  cars.map(card).join("")
}

function generateHomes(){

  const types = ["villa","mansion","penthouse","modern house","luxury home"]

  let homes = []

  for(let i=1;i<=100;i++){

    let type = types[i % types.length]

    homes.push({
      name: type + " " + i,
      price: (500000 + i * 15000) + "€",
      img: `https://source.unsplash.com/400x300/?${type},luxury,architecture`
    })

  }

  document.getElementById("homesProducts").innerHTML =
  homes.map(card).join("")
}

function generateTech(){

  const tech = ["iphone","macbook","pc","laptop","headphones","tablet","gaming setup"]

  let items = []

  for(let i=1;i<=80;i++){

    let t = tech[i % tech.length]

    items.push({
      name: t + " " + i,
      price: (300 + i * 60) + "€",
      img: `https://source.unsplash.com/400x300/?${t},technology,gadget`
    })

  }

  document.getElementById("techProducts").innerHTML =
  items.map(card).join("")
}

generateCars()
generateHomes()
generateTech()
