const btn = document.querySelectorAll('.button')
const body = document.querySelector("body")

btn.forEach((button)=>{
    console.log(button)
    button.addEventListener('click',(eve)=>{
        // console.log(eve);
        // console.log(eve.target);
        switch (eve.target.id) {
            case "green":
                body.style.backgroundColor = 'green'
                break;
            case "red":
                body.style.backgroundColor = 'red'
                break;
            case "blue":
                body.style.backgroundColor = 'blue'
                break;
            case "yellow":
                body.style.backgroundColor = 'yellow'
                break;
        
            default:
                body.style.backgroundColor = 'black'
                break;
        }
        
    })
})
