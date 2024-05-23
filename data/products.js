const featuredProducts = [
    {
        productName: "Espresso",
        category: "Coffee",
        ratings: "4.8/5",
        description: "Strong and flavorful espresso made from premium coffee beans.",
        price: 195.99, // Converted from 3.99 USD to PHP
        imageUrl: "img/espresso.jpg"
    },
    {
        productName: "Green Tea",
        category: "Tea",
        ratings: "4.6/5",
        description: "Refreshing green tea with a delicate flavor and aroma.",
        price: 146.99, // Converted from 2.99 USD to PHP
        imageUrl: "img/green-tea.jpg"
    },
    {
        productName: "Blueberry Muffin",
        category: "Pastry",
        ratings: "4.7/5",
        description: "Soft and moist blueberry muffin baked with fresh blueberries.",
        price: 97.99, // Converted from 1.99 USD to PHP
        imageUrl: "img/blueberry-muffin.jpg"
    }
];

const products = [
    {
        productName: "Barako",
        category: "Coffee",
        ratings: "4.8/5",
        description: "Strong and flavorful barako coffee made from premium Cordilleran coffee beans.",
        price: 50, // Converted from 3.99 USD to PHP
        imageUrl: "img/barako.jpg"
    },
    {
        productName: "Espresso",
        category: "Coffee",
        ratings: "4.8/5",
        description: "Strong and flavorful espresso made from premium coffee beans.",
        price: 195, // Converted from 3.99 USD to PHP
        imageUrl: "img/espresso.jpg"
    },
    {
        productName: "Cappuccino",
        category: "Coffee",
        ratings: "4.7/5",
        description: "Smooth and creamy cappuccino topped with a layer of frothed milk.",
        price: 219.49, // Converted from 4.49 USD to PHP
        imageUrl: "img/cappuccino.jpg"
    },
    {
        productName: "Latte",
        category: "Coffee",
        ratings: "4.8/5",
        description: "Rich and creamy latte made with steamed milk and a shot of espresso.",
        price: 229.99, // Converted from 4.99 USD to PHP
        imageUrl: "img/latte.jpg"
    },
    {
        productName: "Green Tea",
        category: "Tea",
        ratings: "4.6/5",
        description: "Refreshing green tea with a delicate flavor and aroma.",
        price: 146.99, // Converted from 2.99 USD to PHP
        imageUrl: "img/green-tea.jpg"
    },
    {
        productName: "Chamomile Tea",
        category: "Tea",
        ratings: "4.5/5",
        description: "Calming chamomile tea with a light, floral flavor.",
        price: 171.49, // Converted from 3.49 USD to PHP
        imageUrl: "img/chamomile-tea.jpg"
    },
    {
        productName: "Chai Latte",
        category: "Tea",
        ratings: "4.7/5",
        description: "Spiced chai latte with a blend of aromatic spices and steamed milk.",
        price: 219.49, // Converted from 4.49 USD to PHP
        imageUrl: "img/chai-latte.jpg"
    },
    {
        productName: "Blueberry Muffin",
        category: "Pastry",
        ratings: "4.7/5",
        description: "Soft and moist blueberry muffin baked with fresh blueberries.",
        price: 97.99, // Converted from 1.99 USD to PHP
        imageUrl: "img/blueberry-muffin.jpg"
    },
    {
        productName: "Croissant",
        category: "Pastry",
        ratings: "4.8/5",
        description: "Buttery and flaky croissant baked to perfection.",
        price: 122.49, // Converted from 2.49 USD to PHP
        imageUrl: "img/croissant.jpg"
    },
    {
        productName: "Fruit Snack",
        category: "Pastry",
        ratings: "4.7/5",
        description: "Soft and moist fruit snack baked with fresh fruits.",
        price: 97.99, // Converted from 1.99 USD to PHP
        imageUrl: "img/fruit-snack.jpg"
    },
    {
        productName: "Chocolate Chip Cookie",
        category: "Pastry",
        ratings: "4.9/5",
        description: "Freshly baked chocolate chip cookie with gooey chocolate chips.",
        price: 73.99, // Converted from 1.49 USD to PHP
        imageUrl: "img/chocolate-chip-cookie.jpg"
    },
    {
        productName: "Strawberry Topped Pancake",
        category: "Pastry",
        ratings: "4.7/5",
        description: "Soft and moist pancake baked with fresh strawberries.",
        price: 97.99, // Converted from 1.99 USD to PHP
        imageUrl: "img/strawberry-topped-pancake.jpg"
    },
    {
        productName: "Ham and Cheese Sandwich",
        category: "Sandwiches",
        ratings: "4.5/5",
        description: "Delicious ham and cheese sandwich made with fresh ingredients.",
        price: 269.49, // Converted from 5.49 USD to PHP
        imageUrl: "img/ham-cheese-sandwich.jpg"
    },
    {
        productName: "Turkey Club Sandwich",
        category: "Sandwiches",
        ratings: "4.6/5",
        description: "Classic turkey club sandwich with lettuce, tomato, and bacon.",
        price: 419.49, // Converted from 6.99 USD to PHP
        imageUrl: "img/turkey-club-sandwich.jpg"
    },
    {
        productName: "Veggie Wrap",
        category: "Sandwiches",
        ratings: "4.4/5",
        description: "Healthy veggie wrap with fresh vegetables and hummus.",
        price: 359.49, // Converted from 5.99 USD to PHP
        imageUrl: "img/veggie-wrap.jpg"
    },
    {
        productName: "Chocolate Cake",
        category: "Desserts",
        ratings: "4.9/5",
        description: "Rich and moist chocolate cake with a creamy chocolate frosting.",
        price: 229.99, // Converted from 4.99 USD to PHP
        imageUrl: "img/chocolate-cake.jpg"
    },
    {
        productName: "Plain ",
        category: "Desserts",
        ratings: "4.8/5",
        description: "Creamy plain cake with a graham cracker crust.",
        price: 259.49, // Converted from 5.49 USD to PHP
        imageUrl: "img/plain-cake.jpg"
    },
    {
        productName: "Stawberry Cake",
        category: "Desserts",
        ratings: "4.9/5",
        description: "Rich and moist chocolate cake with a creamy chocolate frosting.",
        price: 229.99, // Converted from 4.99 USD to PHP
        imageUrl: "img/strawberry-cake.jpg"
    },
    {
        productName: "Mocha Cake",
        category: "Desserts",
        ratings: "4.9/5",
        description: "Rich and moist chocolate cake with a creamy chocolate frosting.",
        price: 229.99, // Converted from 4.99 USD to PHP
        imageUrl: "img/mocha-cake.jpg"
    },
    {
        productName: "Cheesecake",
        category: "Desserts",
        ratings: "4.8/5",
        description: "Creamy cheesecake with a graham cracker crust.",
        price: 259.49, // Converted from 5.49 USD to PHP
        imageUrl: "img/cheesecake.jpg"
    },
    {
        productName: "Ube Cake",
        category: "Desserts",
        ratings: "4.8/5",
        description: "Creamy ube cake with a graham cracker crust.",
        price: 259.49, // Converted from 5.49 USD to PHP
        imageUrl: "img/ube-cake.jpg"
    },
    {
        productName: "Brownie",
        category: "Desserts",
        ratings: "4.7/5",
        description: "Decadent chocolate brownie with a fudgy center.",
        price: 146.99, // Converted from 2.99 USD to PHP
        imageUrl: "img/brownie.jpg"
    },
    {
        productName: "Strawberry Banana Smoothie",
        category: "Shakes",
        ratings: "4.8/5",
        description: "Refreshing smoothie made with strawberries, bananas, and yogurt.",
        price: 229.99, // Converted from 4.99 USD to PHP
        imageUrl: "img/strawberry-banana-smoothie.jpg"
    },
    {
        productName: "Chocolate Milkshake",
        category: "Shakes",
        ratings: "4.7/5",
        description: "Creamy chocolate milkshake made with rich chocolate ice cream.",
        price: 259.49, // Converted from 5.49 USD to PHP
        imageUrl: "img/chocolate-milkshake.jpg"
    },
    {
        productName: "Vanilla Milkshake",
        category: "Shakes",
        ratings: "4.6/5",
        description: "Classic vanilla milkshake made with creamy vanilla ice cream.",
        price: 259.49, // Converted from 5.49 USD to PHP
        imageUrl: "img/vanilla-milkshake.jpg"
    }
];

const cartProducts = [
    {
        productName: "Cappuccino",
        category: "Coffee",
        ratings: "4.7/5",
        description: "Smooth and creamy cappuccino topped with a layer of frothed milk.",
        price: 219.49, // Converted from 4.49 USD to PHP
        imageUrl: "img/cappuccino.jpg"
    },
    {
        productName: "Croissant",
        category: "Pastry",
        ratings: "4.8/5",
        description: "Buttery and flaky croissant baked to perfection.",
        price: 122.49, // Converted from 2.49 USD to PHP
        imageUrl: "img/croissant.jpg"
    },
    {
        productName: "Chocolate Milkshake",
        category: "Shakes",
        ratings: "4.7/5",
        description: "Creamy chocolate milkshake made with rich chocolate ice cream.",
        price: 259.49, // Converted from 5.49 USD to PHP
        imageUrl: "img/chocolate-milkshake.jpg"
    },
];