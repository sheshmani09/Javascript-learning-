
const form = document.querySelector('form')
// this will give empty value
// const height =  parseInt(document.querySelector('#height').value)

form.addEventListener('submit',(e)=>{
    e.preventDefault()
  const hieght =  parseInt(document.querySelector('#hieght').value)
  const weight =  parseInt(document.querySelector('#weight').value)
  //if you get this values bfore form you will get empty value as soon as page reloads
  
    const result = document.querySelector('#result')

    if (hieght <= 0 ||isNaN(hieght)) {
        result.innerHTML = "please give a valid height"
    }else if (weight <= 0 ||isNaN(weight)) {
        result.innerHTML = "please give a valid weight"
    }else{
      const bmi =  (weight / ((hieght*hieght)/10000)).toFixed(2)

      if (bmi < 18.6) {
        result.innerHTML = `<span>${bmi}</span> <br> you are under weight`
      } else if (bmi >= 18.6 && bmi<= 24.9) {
        result.innerHTML = `<span>${bmi}</span> <br> Congrats you are Normal`
      }else if(bmi>24.9){
        result.innerHTML = `<span>${bmi}</span> <br> you are over weight`
      }
    }
  
})