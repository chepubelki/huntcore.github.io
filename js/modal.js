let sendBtn = document.querySelector('.input__btn');
let form = document.querySelector('.form__wrap');
const emailInput = document.querySelector('.form-modal__email');
let successMsg = document.querySelector('.form__success-message');
let errorMsg = document.querySelector('.form__error-message');
let howWeCanHelp = document.querySelector('.howWeCanHelp');
let subject = '';

document.querySelectorAll('.main-form__tag').forEach(tag => {
   tag.addEventListener('click', () => {
      subject += ` ${tag.textContent.trim()}`;
      tag.classList.add('main-form__tag-checked');
      console.log(tag.classList);
   });
});

emailInput.addEventListener('blur', () => {
   const emailValue = emailInput.value;
   const errorMessage = 'Please enter a valid email address.';

   if (!emailValue.includes('@')) {
      emailInput.classList.add('invalid');
      emailInput.setCustomValidity(errorMessage);
   } else {
      emailInput.classList.remove('invalid');
      emailInput.setCustomValidity('');
   }
});

function sendRequest() {
   let name = document.querySelector('.form-modal__name').value,
      email = document.querySelector('.form-modal__email').value,
      message = document.querySelector('.form-modal__message').value;

   fetch('https://license.darmius.kz/mailsend', {
      mode: 'no-cors',
      method: 'POST',
      headers: {
         'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
         'Content-Type': 'application/x-www-form-urlencoded',
         'Origin': null,
         'Accept-Encoding': 'gzip, deflate, br'
      },
      body: `id=huntcore.com&emailto=info@huntcore.co&name=${name}&email=${email}&subject=${subject}&message=${message}`
   })
      .then((response) => {
         console.log(response.json());
         form.classList.add('form--hidden');
         successMsg.classList.add('form__success-message--visible');
         howWeCanHelp.classList.add('form--hidden');
      })
      .catch((e) => {
         console.log(e);
         errorMsg.classList.add('form__success-message--visible');
      });
}

form.addEventListener('submit', (e) => {
   e.preventDefault();
   sendRequest();
})