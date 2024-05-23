
const Navbar = (targetTagId, linkPrefix) => {
    var targetField = document.getElementById(targetTagId);
    
    var homeLink = document.createElement('a');
    homeLink.href = linkPrefix + 'index.html';
    homeLink.innerHTML = '<div class="logo-holder"><img src="'+linkPrefix+'img/logo.jpg" class="logo"></img> <h3 class="">Bean Haven</h3></div>';

    var menuLink = document.createElement('a');
    menuLink.href = linkPrefix + 'pages/menu.html';
    menuLink.innerHTML = '<div class="link">Menu</div>';

    var locationLink = document.createElement('a');
    locationLink.href = linkPrefix + 'pages/location.html';
    locationLink.innerHTML = '<div class="link">Our Location</div>';

    var contactLink = document.createElement('a');
    contactLink.href = linkPrefix + 'pages/contact.html';
    contactLink.innerHTML = '<div class="link">Contact Us</div>';

    var cartLink = document.createElement('a');
    cartLink.href = linkPrefix + 'pages/cart.html';
    // cartLink.innerHTML = '<div class="link">Cart</div>';
    cartLink.innerHTML = '<div class="link"><i class="material-icons">shopping_cart</i></div>';

    var dashboardLink = document.createElement('a');
    dashboardLink.href = linkPrefix + 'pages/dashboard.html';
    // dashboardLink.innerHTML = '<div class="link">Dashboard</div>';
    dashboardLink.innerHTML = '<div class="link"><i class="material-icons">account_circle</i></div>';

    var loginLink = document.createElement('a');
    loginLink.href = linkPrefix + 'pages/login.html';
    loginLink.innerHTML = '<div class="link">Login</div>';

    var registerLink = document.createElement('a');
    registerLink.href = linkPrefix + 'pages/register.html';
    registerLink.innerHTML = '<div class="link">Register</div>';

    var newNav = document.createElement("nav");

    const navLogo = document.createElement('div');
    navLogo.classList.add("nav-logo");
    navLogo.classList.add("portion");
    navLogo.appendChild(homeLink);

    const navLinks = document.createElement('div');
    navLinks.classList.add("nav-links");
    navLinks.classList.add("center");
    navLinks.classList.add("portion");

    const rightLinks = document.createElement('div');
    rightLinks.classList.add("nav-links");
    rightLinks.classList.add("right");
    rightLinks.classList.add("portion");

    navLinks.appendChild(menuLink);
    navLinks.appendChild(locationLink);
    navLinks.appendChild(contactLink);

    rightLinks.appendChild(loginLink);
    rightLinks.appendChild(registerLink);
    rightLinks.appendChild(cartLink);
    rightLinks.appendChild(dashboardLink);

    newNav.appendChild(navLogo);
    newNav.appendChild(navLinks);
    newNav.appendChild(rightLinks);

    targetField.appendChild(newNav);
};

const Footer = (targetTagId, linkPrefix) => {
    var targetField = document.getElementById(targetTagId);
    
    var img = document.createElement('img');
    img.classList.add("logo");
    img.src = linkPrefix+'img/logo.jpg';
    
    var footerSection1 = document.createElement('div');
    footerSection1.classList.add('footer-section');
    
    var h3 = document.createElement('h3');
    h3.textContent = 'Bean Haven';
    
    footerSection1.appendChild(img);
    footerSection1.appendChild(h3);
    
    var hr = document.createElement('hr');
    
    var footerSection2 = document.createElement('div');
    footerSection2.classList.add('footer-section');
    
    var p = document.createElement('p');
    p.innerHTML = '&copy; 2024 Bean Haven. All rights reserved.';
    
    footerSection2.appendChild(p);
    
    // targetField.appendChild(img);
    targetField.appendChild(footerSection1);
    targetField.appendChild(hr);
    targetField.appendChild(footerSection2);
};


const createCard = (product, linkPrefix) => {
    var card = document.createElement('div');
    card.id = "productCard";
    card.classList.add('card');

    var imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    var img = document.createElement('img');
    img.src = linkPrefix + product.imageUrl;

    var productNameElement = document.createElement('h3');
    productNameElement.textContent = product.productName;

    var categoryElement = document.createElement('p');
    categoryElement.classList.add('category');
    categoryElement.textContent = product.category;

    var ratingsElement = document.createElement('p');
    ratingsElement.classList.add('ratings');
    ratingsElement.innerHTML = '<i class="material-icons">star</i>' + product.ratings;

    var descriptionElement = document.createElement('p');
    descriptionElement.textContent = product.description;

    var priceElement = document.createElement('p');
    priceElement.classList.add('price');
    priceElement.textContent = "₱ " + product.price;

    var addButton = document.createElement('button');
    addButton.classList.add('card-btn');
    addButton.textContent = "Add to cart";
    
    productNameElement.appendChild(categoryElement);

    imgContainer.appendChild(img);
    card.appendChild(imgContainer);
    card.appendChild(productNameElement);
    card.appendChild(ratingsElement);
    card.appendChild(descriptionElement);
    card.appendChild(priceElement);
    card.appendChild(addButton);
    document.getElementById('cards-container').appendChild(card);
}

const FeaturedProducts = (linkPrefix) => {
    featuredProducts.map( product => createCard(product, linkPrefix));
}
const AllProducts = (linkPrefix) => {
    products.map( product => createCard(product, linkPrefix));
}

const Category = (category, linkPrefix) => {
    
    Array.from(document.getElementsByClassName('card')).map(card => card.style.display = 'none');

    switch (category) {
        case 'All' :
            AllProducts(linkPrefix);
            break;
        case 'Coffee' :
            products.map( product => {
                product.category === 'Coffee' ? createCard(product, linkPrefix) : null;
            });
            break;
        case 'Tea' :
            products.map( product => {
                product.category === 'Tea' ? createCard(product, linkPrefix) : null;
            });
            break;
        case 'Pastry' :
            products.map( product => {
                product.category === 'Pastry' ? createCard(product, linkPrefix) : null;
            });
            break;
        case 'Sandwiches' :
            products.map( product => {
                product.category === 'Sandwiches' ? createCard(product, linkPrefix) : null;
            });
            break;
        case 'Shakes' :
            products.map( product => {
                product.category === 'Shakes' ? createCard(product, linkPrefix) : null;
            });
            break;
        case 'Desserts' :
            products.map( product => {
                product.category === 'Desserts' ? createCard(product, linkPrefix) : null;
            });
            break;
        default :
            AllProducts(linkPrefix);
            break;
    }
}

const createCartCard = (product, linkPrefix) => {
    var totalPrice = product.price;
    var card = document.createElement('div');
    card.classList.add('cart-card');

    var imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    var img = document.createElement('img');
    img.src = linkPrefix + product.imageUrl;

    var productNameElement = document.createElement('h3');
    productNameElement.textContent = product.productName;

    var sizeSelect = document.createElement('select');
    sizeSelect.classList.add('size-select');
    var sizeOption1 = document.createElement('option');
    sizeOption1.value = "small";
    sizeOption1.textContent = "Small";
    var sizeOption2 = document.createElement('option');
    sizeOption2.value = "medium";
    sizeOption2.textContent = "Medium";
    var sizeOption3 = document.createElement('option');
    sizeOption3.value = "large";
    sizeOption3.textContent = "Large";
    sizeSelect.appendChild(sizeOption1);
    sizeSelect.appendChild(sizeOption2);
    sizeSelect.appendChild(sizeOption3);

    var sugarLevelSelect = document.createElement('select');
    sugarLevelSelect.classList.add('sugar-level-select');
    var sugarLevelOption1 = document.createElement('option');
    sugarLevelOption1.value = "regular";
    sugarLevelOption1.textContent = "Regular";
    var sugarLevelOption2 = document.createElement('option');
    sugarLevelOption2.value = "less";
    sugarLevelOption2.textContent = "Less Sugar";
    var sugarLevelOption3 = document.createElement('option');
    sugarLevelOption3.value = "none";
    sugarLevelOption3.textContent = "No Sugar";
    sugarLevelSelect.appendChild(sugarLevelOption1);
    sugarLevelSelect.appendChild(sugarLevelOption2);
    sugarLevelSelect.appendChild(sugarLevelOption3);

    var quantityInput = document.createElement('input');
    quantityInput.type = "number";
    quantityInput.min = 1;
    quantityInput.value = 1;
    quantityInput.classList.add('quantity-input');

    var buttonGroup = document.createElement("div");
    buttonGroup.classList.add('button-group');

    var removeButton = document.createElement('button');
    removeButton.classList.add('card-btn');
    removeButton.textContent = "-";
    removeButton.addEventListener('click', () => {
        if (quantityInput.value > 1) {
            quantityInput.value--;
        }
    });

    var addButton = document.createElement('button');
    addButton.classList.add('card-btn');
    addButton.textContent = "+";
    addButton.addEventListener('click', () => {
        quantityInput.value++;
    });

    var priceElement = document.createElement('p');
    priceElement.classList.add('price');
    priceElement.textContent = "₱ " + product.price;

    
    var totalPriceLabel = document.createElement('p');
    totalPriceLabel.textContent = "Total Price";

    var totalPriceElement = document.createElement('input');
    totalPriceElement.setAttribute('disabled', true);
    totalPriceElement.type = "number";
    totalPriceElement.min = 1;
    totalPriceElement.value = product.price;
    totalPriceElement.classList.add('total-price');
    totalPriceElement.textContent = "Total: ₱ " + product.price;

    var removeCartItemButton = document.createElement('button');
    removeCartItemButton.classList.add('card-btn');
    removeCartItemButton.textContent = "Remove";

    buttonGroup.appendChild(addButton);
    buttonGroup.appendChild(removeButton);
    // Add elements to the card
    imgContainer.appendChild(img);
    card.appendChild(imgContainer);
    card.appendChild(productNameElement);
    card.appendChild(priceElement);
    card.appendChild(sizeSelect);
    card.appendChild(sugarLevelSelect);
    card.appendChild(quantityInput);
    card.appendChild(buttonGroup);
    card.appendChild(totalPriceLabel);
    card.appendChild(totalPriceElement);
    card.appendChild(removeCartItemButton);

    // Append card to the container
    document.getElementById('cards-container').appendChild(card);
}

const CartItems = (linkPrefix) => {
    cartProducts.map( product => createCartCard(product, linkPrefix));
} 
