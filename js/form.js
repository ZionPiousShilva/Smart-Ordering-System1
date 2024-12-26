const scriptURL = 'https://script.google.com/macros/s/AKfycbxdnm6lw2f5fhUShRrbUAOUZTSV28t0LG9rxnLL-P0r1wztpRoWpqpj5qcF6nt9we30MA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you For Visiting ZAVASAR! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})