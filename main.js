// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBXoMelPG9Q4NIsTNZVhyBdZhCLsWf_ENg",
    authDomain: "contactform-863ec.firebaseapp.com",
    databaseURL: "https://contactform-863ec.firebaseio.com",
    projectId: "contactform-863ec",
    storageBucket: "contactform-863ec.appspot.com",
    messagingSenderId: "600353572104"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for a form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

//SubmitForm
function submitForm(e) {
 e.preventDefault();

// Get values
var name = getInputVal('name');
var company = getInputVal('company');
var email = getInputVal('email');
var phone = getInputVal('phone');
var message = getInputVal('message');

saveMessage(name, company, email, phone, message);

//Show alert
document.querySelector('.alert').style.display = 'block';

//Hide alert after 3 seconds
setTimeout(function(){
	document.querySelector('.alert').style.display = 'none';
}, 3000);

//Clear form
document.getElementById('contactForm').reset();

}

// Function to get form values
function getInputVal(id) {
 return document.getElementById(id).value;
}

function saveMessage(name, comapny, email, phone, message){
	var newMessagesRef = messagesRef.push();
	newMessagesRef.set({
		name: name,
		company: company,
		email: email,
		phone: phone,
		message: message
	})
}