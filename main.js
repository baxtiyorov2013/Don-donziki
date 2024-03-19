let tanlov = prompt("Iltmos raqamlardan birini tanleng:" + "\n" + "0) Qog'oz" + "\n" + "1) Qaychi" + "\n" + "2) Qubuq")
let random = Math.floor(Math.random() * 3)

if (random == 0) {
    alert("Kampyter Qaychi ni tanladi")
}

if (random == 1) {
    alert("Kampyter Qubuq ni tanladi")
}

if (random == 2) {
    alert("Kampyter Qoq'oz ni tanladi")
}


if (tanlov == 0) {
    if (random == 0) {
        alert("Kampyter g'alaba qozondi")
    }else {
        alert("Siz g'alaba qozondingiz")
    }
}

if (tanlov == 1) {
    if (random == 1) {
        alert("Kampyter g'alaba qozondi")
    }else {
        alert("Siz g'alaba qozondingiz")
    }
}

if (tanlov == 2) {
    if (random == 2) {
        alert("Kampyter g'alaba qozondi")
    }else {
        alert("Siz g'alaba qozondingiz")
    }
}

