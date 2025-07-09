let itemArr = [
    {
        itemCode: "B1001",
        itemNAme: "Classic Burger (Large)",
        price: 1500.00,
        discount: 15,
        image: "/assets/images/burger/Burger - 1.jpg",
        category: "Burger"
    },
    {
        itemCode: "B1002",
        itemNAme: "Classic Burger (Regular)",
        price: 1600.00,
        discount: 0,
        image: "/assets/images/burger/Burger - 2.jpg",
        category: "Burger"
    },
    {
        itemCode: "B1003",
        itemNAme: "Turkey Burger",
        price: 1400.00,
        discount: 0,
        image: "/assets/images/burger/Burger - 3.jpg",
        category: "Burger"
    },
    {
        itemCode: "B1004",
        itemNAme: "Chicken Burger (Large)",
        price: 800.00,
        discount: 20,
        image: "/assets/images/burger/Burger - 4.jpg",
        category: "Burger"
    },
    {
        itemCode: "B1005",
        itemNAme: "Chicken Burger (Regular)",
        price: 1000.00,
        discount: 0,
        image: "/assets/images/burger/Burger - 5.jpg",
        category: "Burger"
    },
    {
        itemCode: "B1006",
        itemNAme: "Cheese Burger (Large)",
        price: 750.00,
        discount: 0,
        image: "/assets/images/burger/Burger - 6.jpg",
        category: "Burger"
    },
    {
        itemCode: "B1007",
        itemNAme: "Classic Burger (Large)",
        price: 600.00,
        discount: 0,
        image: "/assets/images/burger/Burger - 7.jpg",
        category: "Burger"
    },
    {
        itemCode: "B1008",
        itemNAme: "Bacon Burger",
        price: 650.00,
        discount: 0,
        image: "/assets/images/burger/Burger - 8.jpg",
        category: "Burger"
    },
    {
        itemCode: "B1009",
        itemNAme: "Shawarma Burger",
        price: 800.00,
        discount: 0,
        image: "/assets/images/burger/Burger - 9.jpg",
        category: "Burger"
    },
    {
        itemCode: "B1010",
        itemNAme: "Olive Burger",
        price: 1800.00,
        discount: 0,
        image: "/assets/images/burger/Burger - 10.jpg",
        category: "Burger"
    },
    {
        itemCode: "B1011",
        itemNAme: "Double- Cheese Burger",
        price: 1250.00,
        discount: 20,
        image: "/assets/images/burger/Burger - 11.jpg",
        category: "Burger"
    },
    {
        itemCode: "B1012",
        itemNAme: "Crispy Chicken Burger (Regular)",
        price: 1200.00,
        discount: 0,
        image: "/assets/images/burger/Burger - 12.jpg",
        category: "Burger"
    },
    {
        itemCode: "B1013",
        itemNAme: "Crispy Chicken Burger (Large)",
        price: 1600.00,
        discount: 10,
        image: "/assets/images/burger/Burger - 13.jpg",
        category: "Burger"
    },
    {
        itemCode: "B1014",
        itemNAme: "Paneer Burger",
        price: 900.00,
        discount: 0,
        image: "/assets/images/burger/Burger - 14.jpg",
        category: "Burger"
    },
    // Submarines
    {
        itemCode: "B1015",
        itemNAme: "Crispy Chicken Submarine (Large)",
        price: 2000.00,
        discount: 0,
        image: "/assets/images/submarine/Submarine - 1.jpg",
        category: "Submarines"
    },
    {
        itemCode: "B1016",
        itemNAme: "Crispy Chicken Submarine (Regular)",
        price: 1500.00,
        discount: 0,
        image: "/assets/images/submarine/Submarine - 2.jpg",
        category: "Submarines"
    },
    {
        itemCode: "B1017",
        itemNAme: "Chicken Submarine (Large)",
        price: 1800.00,
        discount: 3,
        image: "/assets/images/submarine/Submarine - 3.jpg",
        category: "Submarines"
    },
    {
        itemCode: "B1018",
        itemNAme: "Chicken Submarine (Regular)",
        price: 1400.00,
        discount: 0,
        image: "/assets/images/submarine/Submarine - 4.jpg",
        category: "Submarines"
    },
    {
        itemCode: "B1019",
        itemNAme: "Grinder Submarine",
        price: 2300.00,
        discount: 0,
        image: "/assets/images/submarine/Submarine - 5.jpg",
        category: "Submarines"
    },
    {
        itemCode: "B1020",
        itemNAme: "Cheese Submarine",
        price: 2200.00,
        discount: 0,
        image: "/assets/images/submarine/Submarine - 6.jpg",
        category: "Submarines"
    },
    {
        itemCode: "B1021",
        itemNAme: "Double Cheese n Chicken Submarine",
        price: 1900.00,
        discount: 0,
        image: "/assets/images/submarine/Submarine - 7.jpg",
        category: "Submarines"
    },
    {
        itemCode: "B1022",
        itemNAme: "Special Horgie Submarine",
        price: 2800.00,
        discount: 0,
        image: "/assets/images/submarine/Submarine - 8.jpg",
        category: "Submarines"
    },
    {
        itemCode: "B1023",
        itemNAme: "MOS Special Submarine",
        price: 3000.00,
        discount: 0,
        image: "/assets/images/submarine/Submarine - 9.jpg",
        category: "Submarines"
    },
    // Fries
    {
        itemCode: "B1024",
        itemNAme: "Steak Fries (Large)",
        price: 1200.00,
        discount: 0,
        image: "/assets/images/Fries/Fries - 1.jpg",
        category: "Fries"
    },
    {
        itemCode: "B1025",
        itemNAme: "Steak Fries (Medium)",
        price: 600.00,
        discount: 0,
        image: "/assets/images/Fries/Fries - 2.jpg",
        category: "Fries"
    },
    {
        itemCode: "B1026",
        itemNAme: "French Fries (Large)",
        price: 800.00,
        discount: 0,
        image: "/assets/images/Fries/Fries - 3.jpg",
        category: "Fries"
    },
    {
        itemCode: "B1027",
        itemNAme: "French Fries (Medium)",
        price: 650.00,
        discount: 0,
        image: "/assets/images/Fries/Fries - 4.jpg",
        category: "Fries"
    },
    {
        itemCode: "B1028",
        itemNAme: "French Fries (Small)",
        price: 450.00,
        discount: 0,
        image: "/assets/images/Fries/Fries - 5.jpg",
        category: "Fries"
    },
    {
        itemCode: "B1029",
        itemNAme: "Sweet Potato Fries (Large)",
        price: 600.00,
        discount: 0,
        image: "/assets/images/Fries/Fries - 6.jpg",
        category: "Fries"
    },
    // Pasta
    {
        itemCode: "B1030",
        itemNAme: "Chicken n Cheese Pasta",
        price: 1600.00,
        discount: 15,
        image: "/assets/images/Pasta/pasta - 1.jpg",
        category: "Pasta"
    },
    {
        itemCode: "B1031",
        itemNAme: "Chicken Penne Pasta",
        price: 1700.00,
        discount: 0,
        image: "/assets/images/Pasta/pasta - 2.jpg",
        category: "Pasta"
    },
    {
        itemCode: "B1032",
        itemNAme: "Ground Turkey Pasta Bake",
        price: 2900.00,
        discount: 10,
        image: "/assets/images/Pasta/pasta - 3.jpg",
        category: "Pasta"
    },
    {
        itemCode: "B1033",
        itemNAme: "Creamy Shrimp Pasta",
        price: 2000.00,
        discount: 0,
        image: "/assets/images/Pasta/pasta - 4.jpg",
        category: "Pasta"
    },
    {
        itemCode: "B1034",
        itemNAme: "Lemon Butter Pasta",
        price: 1950.00,
        discount: 0,
        image: "/assets/images/Pasta/pasta - 5.jpg",
        category: "Pasta"
    },
    {
        itemCode: "B1035",
        itemNAme: "Tagliatelle Pasta",
        price: 2400.00,
        discount: 1,
        image: "/assets/images/Pasta/pasta - 6.jpg",
        category: "Pasta"
    },
    {
        itemCode: "B1036",
        itemNAme: "Baked Ravioli",
        price: 2000.00,
        discount: 1,
        image: "/assets/images/Pasta/pasta - 7.jpg",
        category: "Pasta"
    },
    // Chicken
    {
        itemCode: "B1037",
        itemNAme: "Fried Chicken (Small)",
        price: 1200.00,
        discount: 0,
        image: "/assets/images/Chicken/chiken - 1.jpg",
        category: "Chicken"
    },
    {
        itemCode: "B1038",
        itemNAme: "Fried Chicken (Regular)",
        price: 2300.00,
        discount: 10,
        image: "/assets/images/Chicken/chiken - 2.jpg",
        category: "Chicken"
    },
    {
        itemCode: "B1039",
        itemNAme: "Fried Chicken (Large)",
        price: 3100.00,
        discount: 5,
        image: "/assets/images/Chicken/chiken - 3.jpg",
        category: "Chicken"
    },
    {
        itemCode: "B1040",
        itemNAme: "Hot Wings (Large)",
        price: 2400.00,
        discount: 0,
        image: "/assets/images/Chicken/chiken - 4.jpg",
        category: "Chicken"
    },
    {
        itemCode: "B1041",
        itemNAme: "Devilled Chicken (Large)",
        price: 900.00,
        discount: 0,
        image: "/assets/images/Chicken/chiken - 5.jpg",
        category: "Chicken"
    },
    {
        itemCode: "B1042",
        itemNAme: "BBQ Chicken (Regular)",
        price: 2100.00,
        discount: 0,
        image: "/assets/images/Chicken/chiken - 6.jpg",
        category: "Chicken"
    },
    // Beverages
    {
        itemCode: "B1043",
        itemNAme: "Pepsi (330ml)",
        price: 990.00,
        discount: 5,
        image: "Images/Items Images/Beverages/Pepsi.jpg",
        category: "Beverages"
    },
    {
        itemCode: "B1044",
        itemNAme: "Coca-Cola (330ml)",
        price: 1230.00,
        discount: 0,
        image: "Images/Items Images/Beverages/Coke.jpg",
        category: "Beverages"
    },
    {
        itemCode: "B1045",
        itemNAme: "Sprite (330ml)",
        price: 1500.00,
        discount: 3,
        image: "Images/Items Images/Beverages/Sprite.jpg",
        category: "Beverages"
    },
    {
        itemCode: "B1046",
        itemNAme: "Mirinda (330ml)",
        price: 850.00,
        discount: 7,
        image: "Images/Items Images/Beverages/Mirinda.jpg",
        category: "Beverages"
    }
];

// Cart array
let cartArr = [];
let totalPrice = 0;

// Load items by category
function loadItems(category) {
    const itemCards = document.getElementById('itemCards');
    let setBody = "";

    // Update active category button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    const filteredItems = category === 'All' ? itemArr : itemArr.filter(item => item.category === category);

    filteredItems.forEach((item, index) => {
        const discountedPrice = item.price - (item.price * item.discount / 100);

        setBody += `
                    <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div class="card item-card border-0 shadow rounded-4 h-100">
                            <div class="position-relative">
                                <img src="${item.image}" class="card-img-top rounded-top-4" alt="${item.itemNAme}" style="height: 200px; object-fit: cover;">
                                ${item.discount > 0 ? `
                                    <span class="position-absolute top-0 end-0 discount-badge text-white px-3 py-1 rounded-pill m-2 small fw-bold">
                                        ${item.discount}% OFF
                                    </span>
                                ` : ''}
                            </div>
                            <div class="card-body p-4">
                                <h5 class="card-title fw-bold text-dark mb-2">${item.itemNAme}</h5>
                                <p class="text-muted small mb-3">${item.itemCode}</p>
                                
                                <div class="d-flex justify-content-between align-items-center mb-3">
                                    <div>
                                        ${item.discount > 0 ? `
                                            <span class="text-decoration-line-through text-muted small">LKR ${item.price.toFixed(2)}</span><br>
                                            <span class="text-success fw-bold">LKR ${discountedPrice.toFixed(2)}</span>
                                        ` : `
                                            <span class="fw-bold text-primary">LKR ${item.price.toFixed(2)}</span>
                                        `}
                                    </div>
                                    <span class="price-badge text-white px-3 py-1 rounded-pill small fw-bold">
                                        ${item.category}
                                    </span>
                                </div>
                                
                                <button onclick="addToCart('${item.itemCode}')" 
                                    class="add-to-cart-btn btn text-white w-100 py-2 rounded-3 fw-semibold">
                                    <i class="bi bi-cart-plus me-2"></i>Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                `;
    });

    itemCards.innerHTML = setBody;
}

// Add to cart function
function addToCart(itemCode) {
    const item = itemArr.find(item => item.itemCode === itemCode);
    if (!item) return;

    const existingItem = cartArr.find(cartItem => cartItem.itemCode === itemCode);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartArr.push({
            ...item,
            quantity: 1
        });
    }

    updateCart();

    // Show success notification
    Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'Added to cart!',
        showConfirmButton: false,
        timer: 1500
    });
}

// Update cart display
function updateCart() {
    updateDesktopCart();
    updateMobileCart();
    updateCartCount();
    calculateTotal();
}

// Update desktop cart
function updateDesktopCart() {
    const cartAdding = document.getElementById('cartAdding');

    if (cartArr.length === 0) {
        cartAdding.innerHTML = `
                    <div class="text-center py-5">
                        <i class="bi bi-cart-x display-4 text-muted opacity-50"></i>
                        <p class="text-muted mt-3">Your cart is empty</p>
                        <p class="small text-muted">Add items from the menu to get started</p>
                    </div>
                `;
        return;
    }

    let setBody = "";
    cartArr.forEach((item, index) => {
        const discountedPrice = item.price - (item.price * item.discount / 100);
        const itemTotal = discountedPrice * item.quantity;

        setBody += `
                    <div class="cart-item rounded-3 p-3 mb-3">
                        <div class="d-flex justify-content-between align-items-start">
                            <div class="flex-grow-1">
                                <h6 class="fw-bold mb-1 me-2">${item.itemNAme}</h6>
                                <p class="text-muted small mb-2">LKR ${discountedPrice.toFixed(2)} each</p>
                                <p class="fw-bold text-primary mb-0">LKR ${itemTotal.toFixed(2)}</p>
                            </div>
                            <div class="text-end">
                                <div class="d-flex align-items-center mb-2">
                                    <button onclick="decreaseQuantity(${index})" class="btn btn-outline-secondary btn-sm rounded-circle me-2" style="width: 30px; height: 30px; padding: 0;">
                                        <i class="bi bi-dash"></i>
                                    </button>
                                    <span class="fw-bold px-2">${item.quantity}</span>
                                    <button onclick="increaseQuantity(${index})" class="btn btn-outline-secondary btn-sm rounded-circle ms-2" style="width: 30px; height: 30px; padding: 0;">
                                        <i class="bi bi-plus"></i>
                                    </button>
                                </div>
                                <button onclick="removeFromCart(${index})" class="btn btn-outline-danger btn-sm">
                                    <i class="bi bi-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `;
    });

    cartAdding.innerHTML = setBody;
}

// Update mobile cart
function updateMobileCart() {
    const mobileCartItems = document.getElementById('mobileCartItems');

    if (cartArr.length === 0) {
        mobileCartItems.innerHTML = `
                    <div class="text-center py-5">
                        <i class="bi bi-cart-x display-4 text-muted opacity-50"></i>
                        <p class="text-muted mt-3">Your cart is empty</p>
                    </div>
                `;
        return;
    }

    let setBody = "";
    cartArr.forEach((item, index) => {
        const discountedPrice = item.price - (item.price * item.discount / 100);
        const itemTotal = discountedPrice * item.quantity;

        setBody += `
                    <div class="border rounded-3 p-3 mb-3">
                        <div class="d-flex justify-content-between align-items-start">
                            <div class="flex-grow-1">
                                <h6 class="fw-bold mb-1">${item.itemNAme}</h6>
                                <p class="text-muted small mb-2">LKR ${discountedPrice.toFixed(2)} each</p>
                                <p class="fw-bold text-primary mb-0">LKR ${itemTotal.toFixed(2)}</p>
                            </div>
                            <div class="text-end">
                                <div class="d-flex align-items-center mb-2">
                                    <button onclick="decreaseQuantity(${index})" class="btn btn-outline-secondary btn-sm">-</button>
                                    <span class="fw-bold px-3">${item.quantity}</span>
                                    <button onclick="increaseQuantity(${index})" class="btn btn-outline-secondary btn-sm">+</button>
                                </div>
                                <button onclick="removeFromCart(${index})" class="btn btn-outline-danger btn-sm">
                                    <i class="bi bi-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `;
    });

    mobileCartItems.innerHTML = setBody;
}

// Update cart count
function updateCartCount() {
    const count = cartArr.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartItemCount').textContent = count;
}

// Calculate total
function calculateTotal() {
    totalPrice = cartArr.reduce((sum, item) => {
        const discountedPrice = item.price - (item.price * item.discount / 100);
        return sum + (discountedPrice * item.quantity);
    }, 0);

    document.getElementById('totalPrice').textContent = `LKR ${totalPrice.toFixed(2)}`;
    document.getElementById('mobileTotal').textContent = `LKR ${totalPrice.toFixed(2)}`;
    document.getElementById('mobileTotalPrice').textContent = `LKR ${totalPrice.toFixed(2)}`;
}

// Quantity management
function increaseQuantity(index) {
    cartArr[index].quantity += 1;
    updateCart();
}

function decreaseQuantity(index) {
    if (cartArr[index].quantity > 1) {
        cartArr[index].quantity -= 1;
    } else {
        cartArr.splice(index, 1);
    }
    updateCart();
}

function removeFromCart(index) {
    cartArr.splice(index, 1);
    updateCart();
}

// Clear cart
function clearCart() {
    Swal.fire({
        title: 'Clear Cart?',
        text: 'Are you sure you want to remove all items from your cart?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#dc3545',
        cancelButtonColor: '#6c757d',
        confirmButtonText: 'Yes, clear it!'
    }).then((result) => {
        if (result.isConfirmed) {
            cartArr = [];
            updateCart();
            Swal.fire('Cleared!', 'Your cart has been cleared.', 'success');
        }
    });
}

// Calculate change
function calculatingChange() {
    const cash = parseFloat(document.getElementById('cash').value) || 0;
    const change = cash - totalPrice;
    document.getElementById('change').textContent = `LKR ${Math.max(0, change).toFixed(2)}`;
}

function calculatingMobileChange() {
    const cash = parseFloat(document.getElementById('mobileCash').value) || 0;
    const change = cash - totalPrice;
    document.getElementById('mobileChange').textContent = `LKR ${Math.max(0, change).toFixed(2)}`;
}

// Print bill
function printBill() {
    if (cartArr.length === 0) {
        Swal.fire('Empty Cart', 'Please add items to your cart before printing the bill.', 'warning');
        return;
    }

    const cash = parseFloat(document.getElementById('cash').value) || parseFloat(document.getElementById('mobileCash').value) || 0;

    if (cash < totalPrice) {
        Swal.fire('Insufficient Cash', 'Please enter sufficient cash amount.', 'error');
        return;
    }

    // Generate bill content
    let billContent = `
                <div style="text-align: center; font-family: monospace;">
                    <h2>MOS BURGER</h2>
                    <p>========================</p>
                    <p>Date: ${new Date().toLocaleDateString()}</p>
                    <p>Time: ${new Date().toLocaleTimeString()}</p>
                    <p>========================</p>
            `;

    cartArr.forEach(item => {
        const discountedPrice = item.price - (item.price * item.discount / 100);
        const itemTotal = discountedPrice * item.quantity;
        billContent += `
                    <p style="text-align: left;">
                        ${item.itemNAme}<br>
                        ${item.quantity} x LKR ${discountedPrice.toFixed(2)} = LKR ${itemTotal.toFixed(2)}
                    </p>
                `;
    });

    const change = cash - totalPrice;
    billContent += `
                    <p>========================</p>
                    <p>Total: LKR ${totalPrice.toFixed(2)}</p>
                    <p>Cash: LKR ${cash.toFixed(2)}</p>
                    <p>Change: LKR ${change.toFixed(2)}</p>
                    <p>========================</p>
                    <p>Thank you for your order!</p>
                </div>
            `;

    // Create and print
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
                <html>
                    <head><title>MOS Burger - Bill</title></head>
                    <body>${billContent}</body>
                </html>
            `);
    printWindow.document.close();
    printWindow.print();

    // Clear cart after successful print
    cartArr = [];
    updateCart();
    document.getElementById('cash').value = '';
    document.getElementById('mobileCash').value = '';
    calculatingChange();
    calculatingMobileChange();

    Swal.fire('Success!', 'Bill printed successfully!', 'success');
}

// Search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const mobileSearchInput = document.getElementById('mobileSearchInput');

    function performSearch(query) {
        const filteredItems = itemArr.filter(item =>
            item.itemNAme.toLowerCase().includes(query.toLowerCase()) ||
            item.itemCode.toLowerCase().includes(query.toLowerCase()) ||
            item.category.toLowerCase().includes(query.toLowerCase())
        );

        const itemCards = document.getElementById('itemCards');
        let setBody = "";

        filteredItems.forEach((item, index) => {
            const discountedPrice = item.price - (item.price * item.discount / 100);

            setBody += `
                        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                            <div class="card item-card border-0 shadow rounded-4 h-100">
                                <div class="position-relative">
                                    <img src="${item.image}" class="card-img-top rounded-top-4" alt="${item.itemNAme}" style="height: 200px; object-fit: cover;">
                                    ${item.discount > 0 ? `
                                        <span class="position-absolute top-0 end-0 discount-badge text-white px-3 py-1 rounded-pill m-2 small fw-bold">
                                            ${item.discount}% OFF
                                        </span>
                                    ` : ''}
                                </div>
                                <div class="card-body p-4">
                                    <h5 class="card-title fw-bold text-dark mb-2">${item.itemNAme}</h5>
                                    <p class="text-muted small mb-3">${item.itemCode}</p>
                                    
                                    <div class="d-flex justify-content-between align-items-center mb-3">
                                        <div>
                                            ${item.discount > 0 ? `
                                                <span class="text-decoration-line-through text-muted small">LKR ${item.price.toFixed(2)}</span><br>
                                                <span class="text-success fw-bold">LKR ${discountedPrice.toFixed(2)}</span>
                                            ` : `
                                                <span class="fw-bold text-primary">LKR ${item.price.toFixed(2)}</span>
                                            `}
                                        </div>
                                        <span class="price-badge text-white px-3 py-1 rounded-pill small fw-bold">
                                            ${item.category}
                                        </span>
                                    </div>
                                    
                                    <button onclick="addToCart('${item.itemCode}')" 
                                        class="add-to-cart-btn btn text-white w-100 py-2 rounded-3 fw-semibold">
                                        <i class="bi bi-cart-plus me-2"></i>Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    `;
        });

        itemCards.innerHTML = setBody || '<div class="col-12 text-center py-5"><p class="text-muted">No items found</p></div>';
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => performSearch(e.target.value));
    }

    if (mobileSearchInput) {
        mobileSearchInput.addEventListener('input', (e) => performSearch(e.target.value));
    }
}

// Initialize page
window.addEventListener('load', function () {
    loadItems('All');
    setupSearch();
    updateCart();

    // Welcome message
    setTimeout(() => {
        console.log('Place Order System loaded successfully!');
    }, 1000);
});