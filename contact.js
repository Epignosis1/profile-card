const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

// Error elements
const errors = {
  name: document.getElementById("test-contact-error-name"),
  email: document.getElementById("test-contact-error-email"),
  subject: document.getElementById("test-contact-error-subject"),
  message: document.getElementById("test-contact-error-message"),
};

// Clear old errors
for (let key in errors) errors[key].textContent = "";

let isValid = true;

// Validation rules
if (!name.value.trim()) {
  errors.name.textContent = "Full name is required.";
  isValid = false;
}

if (!email.value.trim()) {
  errors.email.textContent = "Email is required.";
  isValid = false;
} else if (!/\S+@\S+\.\S+/.test(email.value)) {
  errors.email.textContent = "Enter a valid email address.";
  isValid = false;
}

if (!subject.value.trim()) {
  errors.subject.textContent = "Subject is required.";
  isValid = false;
}

if (!message.value.trim()) {
  errors.message.textContent = "Message is required.";
  isValid = false;
} else if (message.value.length < 10) {
  errors.message.textContent = "Message must be at least 10 characters.";
  isValid = false;
}

// Success
if (isValid) {
  form.reset();
  successMsg.hidden = false;
}
