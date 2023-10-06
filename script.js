document.getElementById("calculateButton").addEventListener("click", function () {

    var baseRRInput = document.getElementById("baseRR");
    var baseRR = parseFloat(baseRRInput.value) || 0;

    var explorerRank = document.getElementById("explorerRank").value;
    var levelEntered = parseInt(document.getElementById("level").value);
    if (levelEntered < 1 || levelEntered > 100 || levelEntered == "" || isNaN(levelEntered)) {
        event.preventDefault(); // Prevent form submission
        alert("Please enter a level between 1 and 100.");
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

    if(inviting) {
        if(inviting.value === "invitingnormal") {
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
    if(!(Number.isInteger(totalRR)))
    {
        totalRR = totalRR.toFixed(2);
    }
    document.getElementById("totalRR").innerHTML = "Total Recruitment Rate: <br> <span style='font-size: 48px'>" + totalRR +"%</span>";
    if (gift) {
        if(baseRR>=0) {
            document.getElementById("totalRR").innerHTML = "Total Recruitment Rate: <br> <span style='font-size: 48px'>" + "Guaranteed</span>";
        }
        else {
            // Nothing happens
        }
    }
});
document.getElementById("darkModeSwitch").addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");
});

// Function to retrieve and display the last modified date
function displayLastUpdated() {
    var lastUpdated = new Date(document.lastModified);
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = lastUpdated.toLocaleDateString('en-US', options);
    document.getElementById('lastUpdated').textContent = 'Last Updated: ' + formattedDate;
}
window.onload = displayLastUpdated;