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

function showEmployers() {
  const companyName = document.getElementById("companyName").value;
  const employersList = document.getElementById("employersList");
  employersList.innerHTML = ""; // Clear previous list
  const advertisement = document.getElementById("ads");

  advertisement.style.display = "none";

  db.collection("companies")
    .doc(companyName)
    .collection("employers")
    .get()
    .then((querySnapshot) => {
      if (querySnapshot.empty) {
        // No employer found for the provided company name
        document.getElementById("errorMessage").style.display = "block";
      } else {
        const employers = [];

        querySnapshot.forEach((doc) => {
          const employer = doc.data();
          employer.id = doc.id; // Store document ID for future use
          employers.push(employer);
        });

        // Sort employers by lastCheckInTime (in descending order)
        employers.sort((a, b) => {
          if (a.lastCheckInTime < b.lastCheckInTime) return 1;
          if (a.lastCheckInTime > b.lastCheckInTime) return -1;
          return 0;
        });

        employers.forEach((employer) => {
          const listItem = document.createElement("li");
          listItem.className = "employer-item";

          const cardDiv = document.createElement("div");
          cardDiv.className = "card";

          const cardBodyDiv = document.createElement("div");
          cardBodyDiv.className = "card-body";

          const employerNameSpan = document.createElement("span");
          employerNameSpan.textContent = `Name: ${employer.firstName} ${employer.lastName}`;
          employerNameSpan.className = "mr-3";
          cardBodyDiv.appendChild(employerNameSpan);

          // Display last check-in time (if it exists) in a human-readable format
          if (employer.lastCheckInTime) {
            const checkInTimeSpan = document.createElement("span");
            checkInTimeSpan.textContent = `Last check-in: ${moment(
              employer.lastCheckInTime.toDate()
            ).fromNow()}`;
            cardBodyDiv.appendChild(checkInTimeSpan);
          }

          // Create dropdowns for check-ins and check-outs
          const checkInDropdown = document.createElement("details");
          const checkInSummary = document.createElement("summary");
          checkInSummary.textContent = "Check-ins";
          checkInDropdown.appendChild(checkInSummary);

          const checkOutDropdown = document.createElement("details");
          const checkOutSummary = document.createElement("summary");
          checkOutSummary.textContent = "Check-outs";
          checkOutDropdown.appendChild(checkOutSummary);

          // Check if checkInTimes and checkOutTimes exist before trying to iterate over them
          if (Array.isArray(employer.checkInTimes)) {
            const checkInList = document.createElement("ul");
            employer.checkInTimes.forEach((checkInTime) => {
              const checkInItem = document.createElement("li");
              checkInItem.textContent = checkInTime.toDate(); // convert to local date/time
              checkInList.appendChild(checkInItem);
            });
            checkInDropdown.appendChild(checkInList);
          }

          if (Array.isArray(employer.checkOutTimes)) {
            const checkOutList = document.createElement("ul");
            employer.checkOutTimes.forEach((checkOutTime) => {
              const checkOutItem = document.createElement("li");
              checkOutItem.textContent = checkOutTime.toDate(); // convert to local date/time
              checkOutList.appendChild(checkOutItem);
            });
            checkOutDropdown.appendChild(checkOutList);
          }

          let totalWorkingHours = 0;

          if (
            Array.isArray(employer.checkInTimes) &&
            Array.isArray(employer.checkOutTimes)
          ) {
            for (let i = 0; i < employer.checkInTimes.length; i++) {
              const checkInTime = employer.checkInTimes[i].toDate();
              const checkOutTime = employer.checkOutTimes[i]
                ? employer.checkOutTimes[i].toDate()
                : new Date(); // Use current time if checkout time is not available

              const workingHours =
                (checkOutTime - checkInTime) / (1000 * 60 * 60); // Convert milliseconds to hours
              totalWorkingHours += workingHours;
            }
          }

          const totalWorkingHoursSpan = document.createElement("span");
          totalWorkingHoursSpan.textContent = ` :Total working hours: ${totalWorkingHours.toFixed(
            2
          )}`;
          cardBodyDiv.appendChild(totalWorkingHoursSpan);

          cardBodyDiv.appendChild(checkInDropdown);
          cardBodyDiv.appendChild(checkOutDropdown);

          cardDiv.appendChild(cardBodyDiv);
          listItem.appendChild(cardDiv);
          employersList.appendChild(listItem);
        });

        document.getElementById("errorMessage").style.display = "none";
      }
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
}
