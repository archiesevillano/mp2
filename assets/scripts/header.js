import { loadLocalSource } from "./resources.js";

//Show/Hide the notification box when profile is clicked
export const profileDropdown = () => {
    const dropDown = document.querySelector(".profile-drop-down");

    if (dropDown.style.display == "block") {
        dropDown.style.display = "none";
    }
    else {
        dropDown.style.display = "block";
    }
}

export const notificationDropDown = () => {
    const notificationBox = document.querySelector(".notification-box");

    if (notificationBox.style.display == "flex") {
        notificationBox.style.display = "none";
    }
    else {
        notificationBox.style.display = "flex";
    }
}

export const messageDropDown = () => {
    const messageBox = document.querySelector(".messages-box");

    if (messageBox.style.display == "flex") {
        messageBox.style.display = "none";
    }
    else {
        messageBox.style.display = "flex";
    }
}

const user_profile = document.querySelector("#user-profile-button");
user_profile.addEventListener("click", profileDropdown);

const notificationBtn = document.querySelector(".notification-btn");
notificationBtn.addEventListener("click", notificationDropDown);


const messageBtn = document.querySelector(".message-btn");
messageBtn.addEventListener("click", messageDropDown);

const my_profile = document.querySelector("#my-profile");
my_profile.addEventListener('click', () => {
    const profileBox = document.querySelector(".profile-box");
    const overlay = document.querySelector(".modal-overlay");

    profileBox.classList.add('active');
    overlay.classList.add("active");

});

const searchBox = document.querySelector("#searchQueryInput");
const resultBox = document.querySelector(".search-result");
const inputResult = document.querySelector(".first-result-item");

const searchData = async e => {
    const loadedData = await loadLocalSource("json", "users.json");
    const searchInput = e.target.value;

    if (searchInput != "") {
        while (resultBox.childElementCount != 1) {
            resultBox.removeChild(resultBox.lastElementChild);
        }
        inputResult.style.display = "block";
        inputResult.textContent = e.target.value;
        const result = loadedData.users.filter((user) => {
            const fullname = `${user.Firstname} ${user.Middlename} ${user.Lastname}`;

            return fullname.toLowerCase().includes(searchInput.toLowerCase());
        });

        result.forEach(item => {
            if (result.length <= 10) {
                const matchedItem = document.createElement('li');
                matchedItem.textContent = `${item.Firstname} ${item.Middlename} ${item.Lastname}`;
                resultBox.appendChild(matchedItem);
            }
        });

        resultBox.style.display = "block";
    }
    else {
        resultBox.style.display = "none";
        inputResult.style.display = "none";
    }
}


searchBox.addEventListener('focus', searchData);
searchBox.addEventListener('keyup', searchData);
searchBox.addEventListener('focus', searchData);



