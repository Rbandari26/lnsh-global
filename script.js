document.getElementById("contactForm").addEventListener("submit", function(e){
e.preventDefault();

fetch("https://script.google.com/macros/s/AKfycbxyz123456/exec", {
method: "POST",
body: JSON.stringify({
name: document.getElementById("name").value,
email: document.getElementById("email").value,
message: document.getElementById("message").value
})
})
.then(() => {
alert("✅ Inquiry Sent Successfully!");
})
.catch(() => {
alert("❌ Error sending message");
});
});