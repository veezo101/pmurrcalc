const revCalculateButton = document.getElementById("revCalculateButton");
const calculateButton = document.getElementById("calculateButton");
const darkmodeSwitch = document.getElementById("darkModeSwitch");

if (calculateButton) {
    calculateButton.addEventListener("click", function () {

        console.log("Calc button pressed!");

        var baseRRInput = document.getElementById("baseRR");
        var baseRR = parseFloat(baseRRInput.value);
        if (isNaN(baseRR)) {
            event.preventDefault(); // Prevent form submission
            alert("Please enter a valid base RR!");
            // Reset any previous value
            document.getElementById("totalRR").innerHTML = "";
            return;
        }


        var explorerRank = document.getElementById("explorerRank").value;
        var levelEntered = parseInt(document.getElementById("level").value);
        if (levelEntered < 1 || levelEntered > 100 || levelEntered == "" || isNaN(levelEntered)) {
            event.preventDefault(); // Prevent form submission
            alert("Please enter a level between 1 and 100.");
            // Reset any previous value
            document.getElementById("totalRR").innerHTML = "";
            return;
        }

        var level = levelEntered * 0.1 || 0;
        var heldItems = document.querySelector('input[name="heldItem"]:checked');
        var fb = document.getElementById("fb").checked;
        var inviting = document.querySelector('input[name="inviting"]:checked');
        var gift = document.getElementById("gift").checked;

        var totalRR = 0;

        totalRR += baseRR;
        if (explorerRank === "normal") {
            totalRR += 0;
        }
        else if (explorerRank === "bronze") {
            totalRR += 2;
        }
        else if (explorerRank === "silver") {
            totalRR += 4.5;
        }
        else if (explorerRank === "gold") {
            totalRR += 7.5;
        }
        else if (explorerRank === "diamond") {
            totalRR += 9;
        }
        else if (explorerRank === "super") {
            totalRR += 9.5;
        }
        else if (explorerRank === "ultra") {
            totalRR += 10;
        }
        else if (explorerRank === "hyper") {
            totalRR += 10.5;
        }
        else if (explorerRank === "master") {
            totalRR += 11;
        }
        else if (explorerRank === "master-star") {
            totalRR += 11.5;
        }
        else if (explorerRank === "master-double-star") {
            totalRR += 12;
        }
        else if (explorerRank === "master-triple-star") {
            totalRR += 13;
        }
        else if (explorerRank === "guildmaster") {
            totalRR += 15;
        }
        else {
            totalRR += 0;
        }

        if (heldItems) {
            if (heldItems.value === "noheld") {
                totalRR += 0;
            }
            else if (heldItems.value === "soothe") {
                totalRR += 1;
            }
            else if (heldItems.value === "affinity") {
                totalRR += 10;
            }
            else if (heldItems.value === "amber") {
                totalRR += 17;
            }
            else if (heldItems.value === "gm") {
                totalRR += 24;
            }
            else {
                totalRR += 0;
            }
        }

        if (inviting) {
            if (inviting.value === "invitingnormal") {
                totalRR += 25;
            }
            else if (inviting.value === "invitingshiny") {
                totalRR += 35;
            }
            else {
                totalRR += 0;
            }
        }

        if (fb) {
            totalRR += 10;
        }

        totalRR += level;
        if (!(Number.isInteger(totalRR))) {
            totalRR = totalRR.toFixed(2);
        }
        document.getElementById("totalRR").innerHTML = "Total Recruitment Rate: <br> <span style='font-size: 48px'>" + totalRR + "%</span>";
        if (gift) {
            if (baseRR >= 0) {
                document.getElementById("totalRR").innerHTML = "Total Recruitment Rate: <br> <span style='font-size: 48px'>" + "Guaranteed</span>";
            }
            else {
                // Nothing happens
            }
        }
        if (totalRR) {
            document.getElementById("totalRR").scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the element
        }

        console.log("Calc button exit!");
    });
}

if (revCalculateButton) {
    revCalculateButton.addEventListener("click", function () {

        console.log("Rev Calc button pressed!");

        var totalRR = document.getElementById("totalRR");
        var totalRR = parseFloat(totalRR.value);
        if (isNaN(totalRR)) {
            event.preventDefault(); // Prevent form submission
            alert("Please enter a valid visible (total) RR!");
            // Reset any previous value
            document.getElementById("baseRR").innerHTML = "";
            return;
        }

        var explorerRank = document.getElementById("explorerRank").value;
        var levelEntered = parseInt(document.getElementById("level").value);
        if (levelEntered < 1 || levelEntered > 100 || levelEntered == "" || isNaN(levelEntered)) {
            event.preventDefault(); // Prevent form submission
            alert("Please enter a level between 1 and 100.");
            // Reset any previous value
            document.getElementById("baseRR").innerHTML = "";
            return;
        }

        var level = levelEntered * 0.1 || 0;
        var heldItems = document.querySelector('input[name="heldItem"]:checked');
        var fb = document.getElementById("fb").checked;
        var inviting = document.querySelector('input[name="inviting"]:checked');

        var baseRR = totalRR;

        if (explorerRank === "normal") {
            baseRR -= 0;
        }
        else if (explorerRank === "bronze") {
            baseRR -= 2;
        }
        else if (explorerRank === "silver") {
            baseRR -= 4.5;
        }
        else if (explorerRank === "gold") {
            baseRR -= 7.5;
        }
        else if (explorerRank === "diamond") {
            baseRR -= 9;
        }
        else if (explorerRank === "super") {
            baseRR -= 9.5;
        }
        else if (explorerRank === "ultra") {
            baseRR -= 10;
        }
        else if (explorerRank === "hyper") {
            baseRR -= 10.5;
        }
        else if (explorerRank === "master") {
            baseRR -= 11;
        }
        else if (explorerRank === "master-star") {
            baseRR -= 11.5;
        }
        else if (explorerRank === "master-double-star") {
            baseRR -= 12;
        }
        else if (explorerRank === "master-triple-star") {
            baseRR -= 13;
        }
        else if (explorerRank === "guildmaster") {
            baseRR -= 15;
        }
        else {
            baseRR -= 0;
        }

        baseRR -= level;

        if (heldItems) {
            if (heldItems.value === "noheld") {
                baseRR -= 0;
            }
            else if (heldItems.value === "soothe") {
                baseRR -= 1;
            }
            else if (heldItems.value === "affinity") {
                baseRR -= 10;
            }
            else if (heldItems.value === "amber") {
                baseRR -= 17;
            }
            else if (heldItems.value === "gm") {
                baseRR -= 24;
            }
            else {
                baseRR -= 0;
            }
        }

        if (fb) {
            baseRR -= 10;
        }

        if (inviting) {
            if (inviting.value === "invitingnormal") {
                baseRR -= 25;
            }
            else if (inviting.value === "invitingshiny") {
                baseRR -= 35;
            }
            else {
                baseRR -= 0;
            }
        }

        if (!(Number.isInteger(baseRR))) {
            baseRR = baseRR.toFixed(2);
        }
        document.getElementById("baseRR").innerHTML = "Base Recruitment Rate: <br> <span style='font-size: 48px'>" + baseRR + "%</span>";

        if (baseRR) {
            document.getElementById("baseRR").scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the element
        }
        console.log("Rev Calc Button exit!");
    });
}

if (darkmodeSwitch) {
    darkmodeSwitch.addEventListener("change", function () {
        document.body.classList.toggle("dark-mode");
    });
}

// Function to retrieve and display the last modified date
function displayLastUpdated() {
    var lastUpdated = new Date(document.lastModified);
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = lastUpdated.toLocaleDateString('en-US', options);
    document.getElementById('lastUpdated').textContent = 'Last Updated: ' + formattedDate;
}
window.onload = displayLastUpdated;