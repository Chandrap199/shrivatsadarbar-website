function openOrderForm(product) {
    document.getElementById("orderPopup").style.display = "flex";
    document.getElementById("productName").value = product;
}

function closeOrderForm() {
    document.getElementById("orderPopup").style.display = "none";
}

function sendWhatsApp() {

    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("customerPhone").value.trim();
    const email = document.getElementById("customerEmail").value.trim();
    const product = document.getElementById("productName").value;
    const size = document.getElementById("productSize").value;
    const address = document.getElementById("customerAddress").value.trim();
    const message = document.getElementById("customerMessage").value.trim();

    if (name === "" || phone === "" || size === "" || address === "") {
        alert("Please fill Name, Mobile Number, Size and Delivery Address.");
        return;
    }

    // Validate Indian mobile number
    if (!/^[6-9]\d{9}$/.test(phone)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    const text =
`🙏 Jai Shri Krishna

Name: ${name}
Phone: ${phone}
${email ? `Email: ${email}` : ""}

Product: ${product}
📏 Size: ${size}

📍 Delivery Address:
${address}

${message ? `💬 Customer Message:\n${message}\n` : ""}

Please share the price and delivery details.`;

    window.open(
        "https://wa.me/918826196544?text=" + encodeURIComponent(text),
        "_blank"
    );

    // Clear form fields
    document.getElementById("customerName").value = "";
    document.getElementById("customerPhone").value = "";
    document.getElementById("customerEmail").value = "";
    document.getElementById("productName").value = "";
    document.getElementById("productSize").value = "";
    document.getElementById("customerAddress").value = "";
    document.getElementById("customerMessage").value = "";

    closeOrderForm();
}

// Close popup when clicking outside the popup content
window.onclick = function (event) {
    const popup = document.getElementById("orderPopup");

    if (event.target === popup) {
        closeOrderForm();
    }
};
/* ==========================
   Footer Dropdown (Mobile)
========================== */

document.querySelectorAll(".footer-dropdown").forEach((dropdown) => {

    const toggle = dropdown.querySelector(".dropdown-toggle");

    if (!toggle) return;

    toggle.addEventListener("click", () => {

        if (window.innerWidth <= 768) {
            dropdown.classList.toggle("active");
        }

    });

});
