// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD-e_171y9kifCgevAMRElGKnHghxzdM7A",
  authDomain: "eventsdb-b6aaf.firebaseapp.com",
  projectId: "eventsdb-b6aaf",
  storageBucket: "eventsdb-b6aaf.appspot.com",
  messagingSenderId: "995789907234",
  appId: "1:995789907234:web:54edcc689b1c894594717b",
  measurementId: "G-J0DC7YW8J4",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function showQRCode() {
  const qrCodeInput = document.getElementById("qrCode");
  const qrCodeText = qrCodeInput.value.trim();
  const qrCodeContainer = document.getElementById("qrCodeContainer");
  const qrCodeCard = document.getElementById("qrCodeCard");
  const cardImage = document.getElementById("cardImage");
  const qrCodeImage = document.getElementById("qrCodeImage");
  const qrCodeTextElement = document.getElementById("qrCodeText");
  const advertisement = document.getElementById("ads");

  advertisement.style.display = "none";
  $("html, body").animate({ scrollTop: $(document).height() }, 1000);

  db.collection("codes")
    .where("code", "==", qrCodeText)
    .get()
    .then((querySnapshot) => {
      qrCodeContainer.style.display = "block";
      if (querySnapshot.empty) {
        // No matching code found
        qrCodeCard.style.display = "none";
        document.getElementById("errorMessage").style.display = "block";
      } else {
        const doc = querySnapshot.docs[0];
        const codeData = doc.data();
        const imageUrl = codeData.image; // <-- This is the Firebase Storage URL

        // Use the URL directly
        cardImage.src = imageUrl;

        // Generate QR code
        const qrCode = new QRCode(document.createElement("div"), {
          text: qrCodeText,
          width: 58,
          height: 58,
        });

        // Clear previous QR code
        qrCodeImage.innerHTML = "";

        // Append the QR code to the qrCodeImage container
        qrCodeImage.appendChild(qrCode._el);

        qrCodeCard.style.display = "block";
        document.getElementById("errorMessage").style.display = "none";
      }
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const codeParam = urlParams.get("code");

  if (codeParam) {
    document.getElementById("qrCode").value = codeParam;
    showQRCode();
  }
});
