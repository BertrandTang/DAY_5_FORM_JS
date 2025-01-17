document.addEventListener('DOMContentLoaded', () => {

const nameInput = document.querySelector("#name");
const minChara3 = document.querySelector(".minChara3");
const emptyName = document.querySelector(".emptyName");

nameInput.addEventListener("input", function () {
    if (nameInput.validity.valueMissing) {
        toggleVisibility(emptyName, true);
        toggleVisibility(minChara3, false);
    } else if (!nameInput.validity.valid) {
        toggleVisibility(minChara3, true);
        toggleVisibility(emptyName, false);
    } else {
        toggleVisibility(minChara3, false);
        toggleVisibility(emptyName, false);
    }
});

const emailInput = document.querySelector("#email");
const invalidEmail = document.querySelector(".invalidEmail");
const emptyMail = document.querySelector(".emptyMail");

// Pb avec la regex
emailInput.addEventListener("input", function () {
    if (emailInput.validity.valueMissing) {
        toggleVisibility(emptyMail, true);
        toggleVisibility(invalidEmail, false);
    } else if (!validateEmail(emailInput.value)) { // Validation manuelle
        toggleVisibility(invalidEmail, true);
        toggleVisibility(emptyMail, false);
    } else {
        toggleVisibility(invalidEmail, false);
        toggleVisibility(emptyMail, false);
    }
});

const messageTextArea = document.querySelector("#message");
const minChara10 = document.querySelector(".minChara10");
const emptyMessage = document.querySelector(".emptyMessage");

messageTextArea.addEventListener("input", function () {
    if (messageTextArea.validity.valueMissing) {
        toggleVisibility(emptyMessage, true);
        toggleVisibility(minChara10, false);
    } else if (!messageTextArea.validity.valid) {
        toggleVisibility(minChara10, true);
        toggleVisibility(emptyMessage, false);
    } else {
        toggleVisibility(minChara10, false);
        toggleVisibility(emptyMessage, false);
    }
});

const selectDropDown = document.querySelector("#review");
const emptySelection = document.querySelector(".emptySelection");

selectDropDown.addEventListener("change", function () {
    if (selectDropDown.value === "0") {
        toggleVisibility(emptySelection, true);
    } else if (!selectDropDown.validity.valid) {
        toggleVisibility(emptySelection, false);
    } else {
        toggleVisibility(emptySelection, false);
    }
});

const feedbackForm = document.querySelector("#feedbackForm");
const formSent = document.querySelector(".formSent");

feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let formIsValid = true;

    // Vérification de l'input name
    if (nameInput.validity.valueMissing) {
        toggleVisibility(emptyName, true);
        toggleVisibility(minChara3, false);
        formIsValid = false;
    } else if (!nameInput.validity.valid) {
        toggleVisibility(minChara3, true);
        toggleVisibility(emptyName, false);
        formIsValid = false;
    } else {
        toggleVisibility(minChara3, false);
        toggleVisibility(emptyName, false);
    }

    // Vérification de l'input email
    if (emailInput.validity.valueMissing) {
        toggleVisibility(emptyMail, true);
        toggleVisibility(invalidEmail, false);
        formIsValid = false;
    } else if (!emailInput.validity.valid) {
        toggleVisibility(invalidEmail, true);
        toggleVisibility(emptyMail, false);
        formIsValid = false;
    } else {
        toggleVisibility(invalidEmail, false);
        toggleVisibility(emptyMail, false);
    }

    // Vérification du text area message
    if (messageTextArea.validity.valueMissing) {
        toggleVisibility(emptyMessage, true);
        toggleVisibility(minChara10, false);
        formIsValid = false;
    } else if (!messageTextArea.validity.valid) {
        toggleVisibility(minChara10, true);
        toggleVisibility(emptyMessage, false);
        formIsValid = false;
    } else {
        toggleVisibility(minChara10, false);
        toggleVisibility(emptyMessage, false);
    }

    // Vérification du select
    if (selectDropDown.value === "0") {
        toggleVisibility(emptySelection, true);
        formIsValid = false;
    } else {
        toggleVisibility(emptySelection, false);
    }

    // Si tous les champs sont valides, on envoie le message de
    if (formIsValid) {
        toggleVisibility(formSent, true);
        feedbackForm.reset()
    } else {
    }
});

// Fonction qui toggle les messages d'erreurs
function toggleVisibility(element, visible) {
    if (visible) {
        element.classList.remove("hidden");
        element.classList.add("visible");
    } else {
        element.classList.remove("visible");
        element.classList.add("hidden");
    }
}

// Fonction validatrice d'email manuel
function validateEmail(email) { 
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
    return emailPattern.test(email);
}

});