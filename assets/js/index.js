
// Placeholder style fix
const style = document.createElement('style');
style.textContent = `
            .placeholder-light::placeholder {
                color: rgba(255, 255, 255, 0.7) !important;
            }
            .form-control:focus {
                background-color: rgba(255, 255, 255, 0.3) !important;
                border-color: #ffc107 !important;
                box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.25) !important;
            }
        `;
document.head.appendChild(style);

// Login verification
let cachier = [
    {
        userName: "cashier1",
        password: "ca123"
    },
    {
        userName: "cashier2",
        password: "ca456"
    }
];

let admin = {
    userName: "admin",
    password: "admin123"
};

// Login function
function signIn() {
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("pass").value;

    let isExist = false;

    for (let i = 0; i < cachier.length; i++) {
        if (userName == cachier[i].userName && password == cachier[i].password) {
            isExist = true;
            Swal.fire({
                icon: "success",
                title: "Welcome!",
                text: "Login successful. Redirecting...",
                timer: 1500,
                showConfirmButton: false
            }).then(() => {
                window.location.assign("home.html");
            });
            return;
        }
    }

    if (userName == admin.userName && password == admin.password) {
        isExist = true;
        Swal.fire({
            icon: "success",
            title: "Welcome Admin!",
            text: "Login successful. Redirecting...",
            timer: 1500,
            showConfirmButton: false
        }).then(() => {
            window.location.assign("home.html");
        });
        return;
    }

    if (!isExist) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Wrong Username or Password!",
            confirmButtonColor: "#ffc107"
        });
    }
}

// Enter key support
document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        signIn();
    }
});

// All Item Array (keeping original data structure)
let itemArr = [
    {
        itemCode: "B1001",
        itemNAme: "Classic Burger (Large)",
        price: 1500.00,
        discount: 15,
        image: "/assets/images/burger/Burger - 1.jpg"
    },
    {
        itemCode: "B1002",
        itemNAme: "Classic Burger (Regular)",
        price: 1600.00,
        discount: 0,
        image: "/assets/images/burger/Burger - 2.jpg"
    },
    {
        itemCode: "B1003",
        itemNAme: "Turkey Burger",
        price: 1400.00,
        discount: 0,
        image: "/assets/images/burger/Burger - 3.jpg"
    },
    {
        itemCode: "B1004",
        itemNAme: "Chicken Burger (Large)",
        price: 800.00,
        discount: 20,
        image: "/assets/images/burger/Burger - 4.jpg"
    },
    {
        itemCode: "B1005",
        itemNAme: "Chicken Burger (Regular)",
        price: 1000.00,
        discount: 0,
        image: "/assets/images/burger/Burger - 5.jpg"
    },
    {
        itemCode: "B1006",
        itemNAme: "Cheese Burger (Large)",
        price: 750.00,
        discount: 0,
        image:"/assets/images/burger/Burger - 6.jpg"
    },
    {
        itemCode: "B1007",
        itemNAme: "Classic Burger (Large)",
        price: 600.00,
        discount: 0,
        image: "/assets/images/burger/Burger - 7.jpg"
    },
    {
        itemCode: "B1008",
        itemNAme: "Bacon Burger",
        price: 650.00,
        discount: 0,
        image: "/assets/images/burger/Burger - 8.jpg"
    },
    {
        itemCode: "B1009",
        itemNAme: "Shawarma Burger",
        price: 800.00,
        discount: 0,
        image: "/assets/images/burger/Burger - 9.jpg"
    },
    {
        itemCode: "B1010",
        itemNAme: "Olive Burger",
        price: 1800.00,
        discount: 0,
        image: "/assets/images/burger/Burger - 10.jpg"
    },
    {
        itemCode: "B1011",
        itemNAme: "Double- Cheese Burger",
        price: 1250.00,
        discount: 20,
        image: "/assets/images/burger/Burger - 11.jpg"
    },
    {
        itemCode: "B1012",
        itemNAme: "Crispy Chicken Burger (Regular)",
        price: 1200.00,
        discount: 0,
        image: "/assets/images/burger/Burger - 12.jpg"
    },
    {
        itemCode: "B1013",
        itemNAme: "Crispy Chicken Burger (Large)",
        price: 1600.00,
        discount: 10,
        image: "/assets/images/burger/Burger - 13.jpg"
    },
    {
        itemCode: "B1014",
        itemNAme: "Paneer Burger",
        price: 900.00,
        discount: 0,
        image: "/assets/images/burger/Burger - 14.jpg"
    },
    // Submarines
    {
        itemCode: "B1015",
        itemNAme: "Crispy Chicken Submarine (Large)",
        price: 2000.00,
        discount: 0,
        image: "/assets/images/submarine/Submarine - 1.jpg"
    },
    {
        itemCode: "B1016",
        itemNAme: "Crispy Chicken Submarine (Regular)",
        price: 1500.00,
        discount: 0,
        image: "/assets/images/submarine/Submarine - 2.jpg"
    },
    {
        itemCode: "B1017",
        itemNAme: "Chicken Submarine (Large)",
        price: 1800.00,
        discount: 3,
        image: "/assets/images/submarine/Submarine - 3.jpg"
    },
    {
        itemCode: "B1018",
        itemNAme: "Chicken Submarine (Regular)",
        price: 1400.00,
        discount: 0,
        image: "/assets/images/submarine/Submarine - 4.jpg"
    },
    {
        itemCode: "B1019",
        itemNAme: "Grinder Submarine",
        price: 2300.00,
        discount: 0,
        image: "/assets/images/submarine/Submarine - 5.jpg"
    },
    {
        itemCode: "B1020",
        itemNAme: "Cheese Submarine",
        price: 2200.00,
        discount: 0,
        image: "/assets/images/submarine/Submarine - 6.jpg"
    },
    {
        itemCode: "B1021",
        itemNAme: "Double Cheese n Chicken Submarine",
        price: 1900.00,
        discount: 0,
        image: "/assets/images/submarine/Submarine - 7.jpg"
    },
    {
        itemCode: "B1022",
        itemNAme: "Special Horgie Submarine",
        price: 2800.00,
        discount: 0,
        image:"/assets/images/submarine/Submarine - 8.jpg"
    },
    {
        itemCode: "B1023",
        itemNAme: "MOS Special Submarine",
        price: 3000.00,
        discount: 0,
        image: "/assets/images/submarine/Submarine - 9.jpg"
    },
    // Fries
    {
        itemCode: "B1024",
        itemNAme: "Steak Fries (Large)",
        price: 1200.00,
        discount: 0,
        image: "/assets/images/Fries/Fries - 1.jpg"
    },
    {
        itemCode: "B1025",
        itemNAme: "Steak Fries (Medium)",
        price: 600.00,
        discount: 0,
        image: "/assets/images/Fries/Fries - 2.jpg"
    },
    {
        itemCode: "B1026",
        itemNAme: "French Fries (Large)",
        price: 800.00,
        discount: 0,
        image: "/assets/images/Fries/Fries - 3.jpg"
    },
    {
        itemCode: "B1027",
        itemNAme: "French Fries (Medium)",
        price: 650.00,
        discount: 0,
        image: "/assets/images/Fries/Fries - 4.jpg"
    },
    {
        itemCode: "B1028",
        itemNAme: "French Fries (Small)",
        price: 450.00,
        discount: 0,
        image: "/assets/images/Fries/Fries - 5.jpg"
    },
    {
        itemCode: "B1029",
        itemNAme: "Sweet Potato Fries (Large)",
        price: 600.00,
        discount: 0,
        image: "/assets/images/Fries/Fries - 6.jpg"
    },
    // Pasta
    {
        itemCode: "B1030",
        itemNAme: "Chicken n Cheese Pasta",
        price: 1600.00,
        discount: 15,
        image: "/assets/images/Pasta/pasta - 1.jpg"
    },
    {
        itemCode: "B1031",
        itemNAme: "Chicken Penne Pasta",
        price: 1700.00,
        discount: 0,
        image: "/assets/images/Pasta/pasta - 2.jpg"
    },
    {
        itemCode: "B1032",
        itemNAme: "Ground Turkey Pasta Bake",
        price: 2900.00,
        discount: 10,
        image: "/assets/images/Pasta/pasta - 3.jpg"
    },
    {
        itemCode: "B1033",
        itemNAme: "Creamy Shrimp Pasta",
        price: 2000.00,
        discount: 0,
        image: "/assets/images/Pasta/pasta - 4.jpg"
    },
    {
        itemCode: "B1034",
        itemNAme: "Lemon Butter Pasta",
        price: 1950.00,
        discount: 0,
        image: "/assets/images/Pasta/pasta - 5.jpg"
    },
    {
        itemCode: "B1035",
        itemNAme: "Tagliatelle Pasta",
        price: 2400.00,
        discount: 1,
        image: "/assets/images/Pasta/pasta - 6.jpg"
    },
    {
        itemCode: "B1036",
        itemNAme: "Baked Ravioli",
        price: 2000.00,
        discount: 1,
        image: "/assets/images/Pasta/pasta - 7.jpg"
    },
    // Chicken
    {
        itemCode: "B1037",
        itemNAme: "Fried Chicken (Small)",
        price: 1200.00,
        discount: 0,
        image: "/assets/images/Chicken/chiken - 1.jpg"
    },
    {
        itemCode: "B1038",
        itemNAme: "Fried Chicken (Regular)",
        price: 2300.00,
        discount: 10,
        image: "/assets/images/Chicken/chiken - 2.jpg"
    },
    {
        itemCode: "B1039",
        itemNAme: "Fried Chicken (Large)",
        price: 3100.00,
        discount: 5,
        image: "/assets/images/Chicken/chiken - 3.jpg"
    },
    {
        itemCode: "B1040",
        itemNAme: "Hot Wings (Large)",
        price: 2400.00,
        discount: 0,
        image: "/assets/images/Chicken/chiken - 4.jpg"
    },
    {
        itemCode: "B1041",
        itemNAme: "Devilled Chicken (Large)",
        price: 900.00,
        discount: 0,
        image: "/assets/images/Chicken/chiken - 5.jpg"
    },
    {
        itemCode: "B1042",
        itemNAme: "BBQ Chicken (Regular)",
        price: 2100.00,
        discount: 0,
        image: "/assets/images/Chicken/chiken - 6.jpg"
    },
    // Beverages
    {
        itemCode: "B1043",
        itemNAme: "Pepsi (330ml)",
        price: 990.00,
        discount: 5,
        image: "Images/Items Images/Beverages/Pepsi.jpg"
    },
    {
        itemCode: "B1044",
        itemNAme: "Coca-Cola (330ml)",
        price: 1230.00,
        discount: 0,
        image: "Images/Items Images/Beverages/Coke.jpg"
    },
    {
        itemCode: "B1045",
        itemNAme: "Sprite (330ml)",
        price: 1500.00,
        discount: 3,
        image: "Images/Items Images/Beverages/Sprite.jpg"
    },
    {
        itemCode: "B1046",
        itemNAme: "Mirinda (330ml)",
        price: 850.00,
        discount: 7,
        image: "Images/Items Images/Beverages/Mirinda.jpg"
    }
];

// Store item array in localStorage for other pages to access
localStorage.setItem('itemArr', JSON.stringify(itemArr));
