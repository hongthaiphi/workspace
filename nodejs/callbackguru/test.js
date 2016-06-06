var allUserData = [];
function logStuff(userData) {
    if (typeof userData === "string") {
        console.log(userData);
    }
    else if (typeof userData === "object") {
        for (var item in userData) {
            console.log(item + ":" + userData[item]);
        }
    }
}


function getInput(options, callback) {
    allUserData.push(options);
    if (typeof callback === "function") {
        callback(options);
    }
}

getInput({ name: "Rich", specially: "JavaScript" }, 12);