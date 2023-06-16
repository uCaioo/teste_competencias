const agreeCheckbox = document.getElementById('agree-checkbox');
const continueButton = document.getElementById('continue-button');

agreeCheckbox.addEventListener('change', function() {
  continueButton.disabled = !agreeCheckbox.checked;
});

continueButton.addEventListener('click', function() {
  window.location.href = "form.html";
});