document.addEventListener("DOMContentLoaded", function () {
    const personalInfoList = document.getElementById("personal-info-list");
    const taxInfoList = document.getElementById("tax-info-list");
    const addInfoForm = document.getElementById("add-info-form");
    const newInfoLabel = document.getElementById("new-info-label");
    const newInfoValue = document.getElementById("new-info-value");

    // Redigerer eksisterende info
    document.body.addEventListener("click", function (event) {
        if (event.target.classList.contains("edit-btn")) {
            const listItem = event.target.parentElement;
            const infoSpan = listItem.querySelector(".info");
            const currentValue = infoSpan.textContent;

            const input = document.createElement("input");
            input.type = "text";
            input.className = "form-control d-inline w-75";
            input.value = currentValue;

            const saveButton = document.createElement("button");
            saveButton.className = "btn btn-sm btn-success float-end";
            saveButton.textContent = "Lagre";

            listItem.replaceChild(input, infoSpan);
            listItem.replaceChild(saveButton, event.target);

            saveButton.addEventListener("click", function () {
                infoSpan.textContent = input.value;
                listItem.replaceChild(infoSpan, input);
                listItem.replaceChild(event.target, saveButton);
            });
        }
    });

    // Legg til info
    addInfoForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const label = newInfoLabel.value.trim();
        const value = newInfoValue.value.trim();

        if (label && value) {
            const newItem = document.createElement("li");
            newItem.className = "list-group-item";
            newItem.innerHTML = `
                <strong>${label}:</strong> <span class="info">${value}</span>
                <button class="btn btn-sm btn-secondary float-end edit-btn">Rediger</button>
            `;
            personalInfoList.appendChild(newItem);
            newInfoLabel.value = "";
            newInfoValue.value = "";
        }
    });
});
