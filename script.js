const scriptURL = 'https://script.google.com/macros/s/AKfycbwP5vi3Oxny7wduPfpiyPB-4AdTOnm7VNcFLuXa5-mlfJiAzHQi/exec'

const form = document.forms['google-sheet']

 form.addEventListener('submit', e  => {
  e.preventDefault()

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})


  .then(response => alert("Sent data"))
  .catch(error => console.error('error', error. message))

}) 