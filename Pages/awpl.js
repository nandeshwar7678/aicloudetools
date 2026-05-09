// ======================
// CATEGORY FILTER
// ======================

function filterProducts(category, element) {

    const products =
        document.querySelectorAll(".product-card");

    const categories =
        document.querySelectorAll(".sidebar li");


    // REMOVE ACTIVE

    categories.forEach((item) => {

        item.classList.remove("active");

    });


    // ADD ACTIVE

    if (element) {

        element.classList.add("active");

    }


    // FILTER PRODUCTS

    products.forEach((product) => {

        if (category === "all") {

            product.style.display = "block";

        }

        else if (product.dataset.category === category) {

            product.style.display = "block";

        }

        else {

            product.style.display = "none";

        }

    });

}



// ======================
// AUTO PRODUCT COUNT
// ======================

function updateCounts() {

    // ALL PRODUCTS

    const allProducts =
        document.querySelectorAll(".product-card").length;

    document.getElementById("all-count").innerText =
        allProducts;


    // WELLNESS

    const wellnessProducts =
        document.querySelectorAll(
            '.product-card[data-category="wellness"]'
        ).length;

    document.getElementById("wellness-count").innerText =
        wellnessProducts;


    // HOMECARE

    const homecareProducts =
        document.querySelectorAll(
            '.product-card[data-category="homecare"]'
        ).length;

    document.getElementById("homecare-count").innerText =
        homecareProducts;


    // ORALCARE

    const oralcareProducts =
        document.querySelectorAll(
            '.product-card[data-category="oralcare"]'
        ).length;

    document.getElementById("oralcare-count").innerText =
        oralcareProducts;

}


// PAGE LOAD

updateCounts();



// ======================
// CONTACT POPUP
// ======================

// OPEN

function openContactPopup() {

    document.getElementById("contactPopup")
        .style.display = "flex";

}


// CLOSE

function closeContactPopup() {

    document.getElementById("contactPopup")
        .style.display = "none";

}



// ======================
// SEND MESSAGE
// ======================

async function sendMessage() {

    const userType =
        document.getElementById("userType").value;

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const phone =
        document.getElementById("phone").value;

    const message =
        document.getElementById("message").value;


    // VALIDATION

    if(!userType || !name || !email || !phone || !message) {

        alert("Please fill all fields");

        return;

    }


    // CLOSE POPUP

    closeContactPopup();


    // RESET FORM

    document.getElementById("userType").value = "";

    document.getElementById("name").value = "";

    document.getElementById("email").value = "";

    document.getElementById("phone").value = "";

    document.getElementById("message").value = "";


    const data = {

        userType,
        name,
        email,
        phone,
        message

    };


    try {

        const response = await fetch(
            "http://localhost:5000/contact",
            {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(data)

            }
        );


        const result = await response.json();

        console.log(result);

    }

    catch (error) {

        console.log(error);

        alert("Server Error");

    }

}