import { loadOnlineSource } from "./resources.js";
import { BrowserDate } from "./dateUtil.js";

export const populateCities = async () => {
    const ISLAND_GROUP_CODES = ["luzon", "visayas", "mindanao"];
    const cities = document.querySelector(".city-selection");

    ISLAND_GROUP_CODES.forEach(async island => {
        const list = await loadOnlineSource(`https://psgc.gitlab.io/api/island-groups/${island}/cities.json`);

        for (let city of list) {
            const opt = document.createElement("option");
            opt.textContent = city.name;
            cities.appendChild(opt);
        }

    });
}

export const populateProvince = async () => {
    const ISLAND_GROUP_CODES = ["luzon", "visayas", "mindanao"];
    const provinces = document.querySelector(".province-selection");

    ISLAND_GROUP_CODES.forEach(async island => {
        const list = await loadOnlineSource(`https://psgc.gitlab.io/api/island-groups/${island}/regions.json`);

        for (let region of list) {
            const opt = document.createElement("option");
            opt.textContent = region.name;
            provinces.appendChild(opt);
        }

    });
}

export const togglePassword = (textbox, buttonToggle) => {
    buttonToggle.addEventListener('mousedown', () => {
        textbox.type = "text";
        buttonToggle.firstElementChild.className = "fa-regular fa-eye-slash";
    });
    buttonToggle.addEventListener('mouseup', () => {
        textbox.type = "password";
        buttonToggle.firstElementChild.className = "fa-regular fa-eye";
    });
}

export const populateMonths = () => {
    const mos = document.querySelector(".birth-month");
    const dt = new BrowserDate(new Date());

    dt._months.forEach(month => {
        const item = document.createElement('option');
        item.textContent = month.monthName;
        mos.appendChild(item);
    })
}

export const populateDays = () => {
    const day = document.querySelector(".birth-day");

    for (let i = 0; i < 31; i++) {
        const item = document.createElement('option');
        item.textContent = i + 1;
        day.appendChild(item);
    }
}

export const populateYears = () => {
    const year = document.querySelector(".birth-year");

    for (let i = 0; i < 149; i++) {
        const item = document.createElement('option');
        item.textContent = i + 1969;
        year.appendChild(item);
    }
}


// GET AGE FUNC
export const getAge = (month, day, year) => {
    // Declare Variable to get present date
    const today = new Date();
    // Declare variable for formula of present date -1 because january is presented as 0
    const birthdate = new Date(year, month - 1, day);
    // Declare age with today and your birthdate
    let age = today.getFullYear() - birthdate.getFullYear();
    // Declare monthDiff to get difference between today and birthdate
    const monthDiff = today.getMonth() - birthdate.getMonth();
    // if with logical operators to check if value is true or false
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    // return age after function
    return age;
};



export const contentChecker = (content, max) => {
    let newText = "";

    if (content.length > max) {
        for (let i = 0; i < (max - 3); i++) {
            newText += content[i];
        }

        if (newText[newText.length - 1] == " ") {
            let txt = newText.substring(0, newText.length - 1);

            return txt.concat("...");
        }
        else {
            return newText.concat("...");
        }
    }

}

export const noWhiteSpace = text => {
    let newText = "";
    text.forEach(letter => letter != " " ? newText += letter : newText += "");
    return newText;
}

export const generateLoad = () => {
    const loaderDiv = document.createElement('div');
    loaderDiv.classList.add('loader');

    const loaderIcon = document.createElement('i');
    loaderIcon.classList.add('fa-solid', 'fa-spinner', 'fa-spin', 'loader-icon');

    loaderDiv.appendChild(loaderIcon);
    document.body.appendChild(loaderDiv);
}