/* 

id="cardFeedback"
id="cvcFeedback"
id="amountFeedback"
id="nameFeedback"
id="lastNameFeedback"
id="cityFeedback"
id="stateFeedback"
id="nameFeedback"

id="card"
id="cvc"
id="amount"
id="firstName"
id="lastName"
id="city"
id="state"
id="postalCode"
id="visa"
id="mastercard"
id="dinersClub"
id="paypal"
id="message"
id="btnCancel"
id="btnSend" 

*/


let formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    let errors = {}

   /*  let rgxValidPassword = /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/; */

    let cardFeedback = document.querySelector('#cardFeedback');
    let cvcFeedback = document.querySelector('#cvcFeedback');
    let amountFeedback = document.querySelector('#amountFeedback');
    let nameFeedback = document.querySelector('#nameFeedback');
    let lastNameFeedback = document.querySelector('#lastNameFeedback');
    let cityFeedback = document.querySelector('#cityFeedback');
    let stateFeedback = document.querySelector('#stateFeedback');
    let postalCodeFeedback = document.querySelector('#postalCodeFeedback');
    let messageFeedback = document.querySelector('#messageFeedback');

    /* let { username, password } = evento.target; */
    let { card, cvc, amount, firstName, lastName, city, state, postalCode, visa, mastercard, dinersClub, paypal, message } = evento.target;
console.log(card.value);
  /*   if (username.value === '') {
        errors['username'] = 'Username no puede estar vacio';
        username.classList.add('is-invalid');
    } else {
        username.classList.remove('is-invalid');
        delete errors['username'];
    } */

    if (card.value === '') {
        errors['card'] = 'card no puede estar vacio';
        card.classList.add('is-invalid');
    } else {
        card.classList.remove('is-invalid');
        delete errors['card'];
    }

    if (cvc.value === '') {
        errors['cvc'] = 'cvc no puede estar vacio';
        cvc.classList.add('is-invalid');
    } else {
        cvc.classList.remove('is-invalid');
        delete errors['cvc'];
    }

    if (amount.value === '') {
        errors['amount'] = 'amount no puede estar vacio';
        amount.classList.add('is-invalid');
    } else {
        amount.classList.remove('is-invalid');
        delete errors['amount'];
    }

    if (firstName.value === '') {
        errors['firstName'] = 'firstName no puede estar vacio';
        firstName.classList.add('is-invalid');
    } else {
        firstName.classList.remove('is-invalid');
        delete errors['firstName'];
    }
    
    if (lastName.value === '') {
        errors['lastName'] = 'lastName no puede estar vacio';
        lastName.classList.add('is-invalid');
    } else {
        lastName.classList.remove('is-invalid');
        delete errors['lastName'];
    }

    if (city.value === '') {
        errors['city'] = 'city no puede estar vacio';
        city.classList.add('is-invalid');
    } else {
        city.classList.remove('is-invalid');
        delete errors['city'];
    }

    if (state.value === '') {
        errors['state'] = 'state no puede estar vacio';
        state.classList.add('is-invalid');
    } else {
        state.classList.remove('is-invalid');
        delete errors['state'];
    }

    if (postalCode.value === '') {
        errors['postalCode'] = 'postalCode no puede estar vacio';
        postalCode.classList.add('is-invalid');
    } else {
        postalCode.classList.remove('is-invalid');
        delete errors['postalCode'];
    }

    if (postalCode.value === '') {
        errors['postalCode'] = 'postalCode no puede estar vacio';
        postalCode.classList.add('is-invalid');
    } else {
        postalCode.classList.remove('is-invalid');
        delete errors['postalCode'];
    }

    

    /* if (password.value === '') {
        errors['password'] = 'Password no puede estar vacio';
        password.classList.add('is-invalid');
    } else if (!rgxValidPassword.test(password.value)) {
        errors['password'] = 'Password debe contener mayuscula, minusculas, numeros y un minimo de 8 caracteres';
        password.classList.add('is-invalid');
    } else {
        password.classList.remove('is-invalid');
        delete errors['password'];
    } */


    if (errors['card'] || errors['cvc'] || errors['amount'] || errors['firstName'] || errors['lastName'] || errors['city'] || errors['state'] || errors['postalCode'] || errors['message']) 
    {
        console.log(errors);
        if (errors['card']) {
            let alert = document.querySelector('#alert');
            alert.classList.remove("invalid-feedback");
        }
        else{
            alert.classList.add("invalid-feedback");
        }
        if (errors['card']) cardFeedback.innerHTML = errors['card'];
        if (errors['cvc']) cvcFeedback.innerHTML = errors['cvc'];
        if (errors['amount']) amountFeedback.innerHTML = errors['amount'];
        if (errors['firstName']) firstNameFeedback.innerHTML = errors['firstName'];
        if (errors['lastName']) lastNameFeedback.innerHTML = errors['lastName'];
        if (errors['city']) cityFeedback.innerHTML = errors['city'];
        if (errors['state']) stateFeedback.innerHTML = errors['state'];
        if (errors['postalCode']) postalCodeFeedback.innerHTML = errors['postalCode'];     
        if (errors['message']) messageFeedback.innerHTML = errors['message'];
       
    } else {
        evento.target.submit();
    }

});

let visa = document.getElementById("visa");
console.log(visa);