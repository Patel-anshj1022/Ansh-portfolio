  function toggleMenu() {
  const menuItems = document.querySelector('.menu-items');
  menuItems.classList.toggle('active');
}
function validateForm(event) {
  event.preventDefault();
  
  // Reset error messages
  clearErrors();
  
  let isValid = true;
  
  // Name validation
  const name = document.getElementById('name').value.trim();
  if(name.length < 2) {
    showError('nameError', 'Name must be at least 2 characters');
    isValid = false;
  }
  
  // Email validation
  const email = document.getElementById('email').value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailPattern.test(email)) {
    showError('emailError', 'Please enter a valid email address');
    isValid = false;
  }
  
  // Subject validation
  const subject = document.getElementById('subject').value.trim();
  if(subject.length < 3) {
    showError('subjectError', 'Subject must be at least 3 characters');
    isValid = false;
  }
  
  // Message validation
  const message = document.getElementById('message').value.trim();
  if(message.length < 10) {
    showError('messageError', 'Message must be at least 10 characters');
    isValid = false;
  }
  
  if(isValid) {
    document.getElementById('contactForm').submit();
  }
  
  return isValid;
}

function showError(elementId, message) {
  document.getElementById(elementId).textContent = message;
}

function clearErrors() {
  const errorElements = document.getElementsByClassName('error');
  for(let element of errorElements) {
    element.textContent = '';
  }
}
// Load saved form data on page load
window.onload = function() {
    document.getElementById('name').value = localStorage.getItem('contactForm_name') || '';
    document.getElementById('email').value = localStorage.getItem('contactForm_email') || '';
    document.getElementById('subject').value = localStorage.getItem('contactForm_subject') || '';
    document.getElementById('message').value = localStorage.getItem('contactForm_message') || '';
}

// Save form data to localStorage
function saveFormData() {
    localStorage.setItem('contactForm_name', document.getElementById('name').value);
    localStorage.setItem('contactForm_email', document.getElementById('email').value);
    localStorage.setItem('contactForm_subject', document.getElementById('subject').value);
    localStorage.setItem('contactForm_message', document.getElementById('message').value);
}
// Load saved form data when page loads
window.onload = function() {
  document.getElementById('name').value = localStorage.getItem('name') || '';
  document.getElementById('email').value = localStorage.getItem('email') || '';
  document.getElementById('subject').value = localStorage.getItem('subject') || '';
  document.getElementById('message').value = localStorage.getItem('message') || '';
}

// Save form data to localStorage
function saveFormData() {
  localStorage.setItem('name', document.getElementById('name').value);
  localStorage.setItem('email', document.getElementById('email').value);
  localStorage.setItem('subject', document.getElementById('subject').value);
  localStorage.setItem('message', document.getElementById('message').value);
}
