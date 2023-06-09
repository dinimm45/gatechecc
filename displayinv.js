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

function showCodes() {
  const phoneNumber = document.getElementById("phoneNumber").value;
  const codesList = document.getElementById("codesList");
  codesList.innerHTML = ""; // Clear previous list
  const advertisement = document.getElementById("ads");

  advertisement.style.display = "none";

  db.collection("codes")
    .where("phoneNumber", "==", phoneNumber)
    .get()
    .then((querySnapshot) => {
      if (querySnapshot.empty) {
        // No codes found for the provided phone number
        document.getElementById("errorMessage").style.display = "block";
      } else {
        querySnapshot.forEach((doc) => {
          const code = doc.data().code;
          const listItem = document.createElement("li");
          listItem.className = "code-item";

          const cardDiv = document.createElement("div");
          cardDiv.className = "card";

          const cardBodyDiv = document.createElement("div");
          cardBodyDiv.className = "card-body";

          const codeSpan = document.createElement("span");
          codeSpan.textContent = code;
          codeSpan.className = "mr-3";

          const wlcTxt =
            "You are cordially invited to my event! kindly visit the website https://gatechecc.com/guest and enter the following code:";
          const wlcTxt2 =
            " .We look forward to your presence at this extraordinary gathering.";

          const copyButton = document.createElement("button");
          copyButton.className = "btn btn-secondary";
          copyButton.textContent =
            doc.data().copyCount > 0
              ? `Copied ${doc.data().copyCount} times`
              : "Copy";

          copyButton.addEventListener("click", () => {
            copyCode(code, copyButton, wlcTxt, wlcTxt2, doc.id);
          });

          cardBodyDiv.appendChild(codeSpan);
          cardBodyDiv.appendChild(copyButton);
          cardDiv.appendChild(cardBodyDiv);
          listItem.appendChild(cardDiv);
          codesList.appendChild(listItem);
        });

        document.getElementById("errorMessage").style.display = "none";
      }
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
}

function copyCode(code, button, wlcTxt, wlcTxt2, docId) {
  const baseUrl = "https://gatechecc.com/guest.html"; // The URL of the page where the second script is used.
  const linkToCopy = `${baseUrl}?code=${code}`; // Appends the code as a query parameter.

  navigator.clipboard
    .writeText(
      `${wlcTxt}${code}${wlcTxt2} Follow this link to view the QR Code and Image: ${linkToCopy}`
    )
    .then(() => {
      // Update Firestore with the incremented copy count
      db.collection("codes")
        .doc(docId)
        .update({
          copyCount: firebase.firestore.FieldValue.increment(1),
        })
        .then(() => {
          // Fetch the updated document to get the new copy count
          db.collection("codes")
            .doc(docId)
            .get()
            .then((doc) => {
              button.textContent = `Copied ${doc.data().copyCount} times`;
            })
            .catch((error) => {
              console.log("Error fetching updated document: ", error);
            });
        })
        .catch((error) => {
          console.log("Error updating document: ", error);
        });
    })
    .catch((error) => {
      console.log("Error copying code: ", error);
    });
}
