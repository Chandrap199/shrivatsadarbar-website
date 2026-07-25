function openOrderForm(product) {
    document.getElementById("orderPopup").style.display = "flex";
    document.getElementById("productName").value = product;
}

function closeOrderForm() {
    document.getElementById("orderPopup").style.display = "none";
}

function sendWhatsApp() {

    let name = document.getElementById("customerName").value;
    let phone = document.getElementById("customerPhone").value;
    let email = document.getElementById("customerEmail").value;
    let product = document.getElementById("productName").value;
    let size = document.getElementById("productSize").value;
    let address = document.getElementById("customerAddress").value;
    let message = document.getElementById("customerMessage").value;

    if(name==="" || phone==="" || size==="Select Size"){
        alert("Please fill Name, Mobile Number and Size.");
        return;
    }

    let text =
`🙏 Jai Shri Krishna

Name: ${name}
Phone: ${phone}
Email: ${email}

Product: ${product}
📏 Size: ${size}

📍 Delivery Address:
${address}

💬 Customer Message:
${message}

Please share the price and delivery details.`;

    window.open(
        "https://wa.me/918826196544?text=" + encodeURIComponent(text),
        "_blank"
    );

    closeOrderForm();
}
