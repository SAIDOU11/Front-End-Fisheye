const firstname = document.getElementById("firstname");
const firstnameMessage = document.getElementById("firstnameMessage");
const lastname = document.getElementById("lastname");
const lastnameMessage = document.getElementById("lastnameMessage");
const email = document.getElementById("email");
const emailMessage = document.getElementById("emailMessage");
const message = document.getElementById("message");
const messageMessage = document.getElementById("messageMessage");

const validFirst = () => {
  let firstRegExp = new RegExp(/[a-zA-Z]{2,}/);
  let firstValue = firstname.value;
  let firstTest = firstRegExp.test(firstValue);
  // CONDITION IF ELSE
  if (firstTest) {
    firstnameMessage.textContent = "Prénom Valide";
    firstnameMessage.style.fontSize = "15px";
    firstnameMessage.style.color = "green";
    firstnameMessage.style.marginBottom = "5px";
    return true;
  } else {
    firstnameMessage.textContent = "Veuillez entrez un prénom valide";
    firstnameMessage.style.fontSize = "15px";
    firstnameMessage.style.color = "red";
    firstnameMessage.style.marginBottom = "5px";
    return false;
  }
};

const validLast = () => {
  let lastRegExp = new RegExp(/[a-zA-Z]{2,}/);
  let lastValue = lastname.value;
  let lastTest = lastRegExp.test(lastValue);
  // CONDITION IF ELSE
  if (lastTest) {
    lastnameMessage.textContent = "Nom valide";
    lastnameMessage.style.fontSize = "15px";
    lastnameMessage.style.color = "green";
    lastnameMessage.style.marginBottom = "5px";
    return true;
  } else {
    lastnameMessage.textContent = "Veuillez entrez un nom valide";
    lastnameMessage.style.fontSize = "15px";
    lastnameMessage.style.color = "red";
    lastnameMessage.style.marginBottom = "5px";
    return false;
  }
};

validEmail = () => {
  let emailRegExp = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
    "g"
  );
  let emailValue = email.value;
  let emailTest = emailRegExp.test(emailValue);
  // CONDITION IF ELSE
  if (emailTest) {
    emailMessage.textContent = "Adresse e-mail valide";
    emailMessage.style.fontSize = "15px";
    emailMessage.style.color = "green";
    emailMessage.style.marginBottom = "5px";
    return true;
  } else {
    emailMessage.textContent = "Veuillez entrez une adresse e-mail valide";
    emailMessage.style.fontSize = "15px";
    emailMessage.style.color = "red";
    emailMessage.style.marginBottom = "5px";
    return false;
  }
};

validMessage = () => {
  let messageRegExp = new RegExp(/^[a-z]{10}$/);
  let messageValue = message.value;
  let messageTest = messageRegExp.test(messageValue);
  // CONDITION IF ELSE
  if (messageTest) {
    messageMessage.textContent = "Adresse e-mail valide";
    messageMessage.style.fontSize = "15px";
    messageMessage.style.color = "green";
    messageMessage.style.marginBottom = "5px";
    return true;
  } else {
    messageMessage.textContent = "Veuillez entrez une adresse e-mail valide";
    messageMessage.style.fontSize = "15px";
    messageMessage.style.color = "red";
    messageMessage.style.marginBottom = "5px";
    return false;
  }
};

firstname.addEventListener("keydown", () => {
  console.log("?????????????????");
  validFirst();
});

lastname.addEventListener("keydown", () => {
  validLast();
});
// EVENT FUNCTION ON CHANGE FOR EMAIL ADDRESS
email.addEventListener("keydown", () => {
  validEmail();
});

message.addEventListener("change", () => {
  validMessage();
});
