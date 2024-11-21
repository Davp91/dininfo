document.addEventListener("DOMContentLoaded", function () {
    const userList = document.getElementById("user-list");
    const addUserForm = document.getElementById("add-user-form");
    const newUserInput = document.getElementById("new-user-name");

    // Fjern bruker
    userList.addEventListener("click", function (event) {
        if (event.target.classList.contains("remove-user-btn")) {
            const userItem = event.target.parentElement;
            userList.removeChild(userItem);
        }
    });

    // Legg til ny bruker
    addUserForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const userName = newUserInput.value.trim();
        if (userName) {
            const newUserItem = document.createElement("li");
            newUserItem.classList.add("list-group-item");
            newUserItem.innerHTML = `
                <strong>${userName}:</strong> Har fått tilgang.
                <button class="btn btn-danger btn-sm float-end remove-user-btn">Fjern</button>
            `;
            userList.appendChild(newUserItem);
            newUserInput.value = ""; 
        }
    });
});
