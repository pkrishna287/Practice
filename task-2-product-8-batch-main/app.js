function displayProduct(productList) {
    const products = productList.map(item => `
        <article class="product">
          <img src="${item.image}" class="product-img img" alt="${item.title}" />
          <footer>
            <h5 class="product-name">${item.title}</h5>
            <span class="product-price">$${item.price}</span>
          </footer>
        </article>
    `);
    
    document.getElementById('products').innerHTML = products.join('');
}

function displayBrand() {
    const uniqueCompanies = products.reduce(function(p,c)  {
        if (p.includes(c.company)==false) {
            p.push(c.company);
        }
        return p;
    }, []);

    const companiesButtons = uniqueCompanies.map(company => `
        <button class="company-btn" onclick="filterBrand('${company}')">${company}</button>
    `);

    const allButton = `<button class="company-btn" onclick="displayProduct(products)">All</button>`;

    document.getElementById('companies').innerHTML = allButton + companiesButtons.join('');
}

function filterBrand(brand) {
    const filteredProducts = products.filter((i)=>{
        return i.company == brand;
    })
    displayProduct(filteredProducts);
}


displayProduct(products);
displayBrand();
