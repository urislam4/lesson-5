const som = document.querySelector('#som');
const eur = document.querySelector('#eur');
// console.log(som);
// console.log(usd);

// som.addEventListener('input', () => {
//     const request = new XMLHttpRequest ()
//     request.open('GET','post.json')
//     request.setRequestHeader('Content-Type', 'application/json')
//     request.send()

//     request.addEventListener('load', ()=>{
//         const data = JSON.parse(request.response);
//         usd.value = (som.value / data.usd).toFixed(2)
//     })
// })

const conveter = (elem,target,isTrue) =>{
    elem.addEventListener('input', () =>{
    const request = new XMLHttpRequest ()
    request.open('GET','post.json')
    request.setRequestHeader('Content-Type', 'application/json')
    request.send()
    request.addEventListener('load', () =>{
    const data = JSON.parse(request.response);
    isTrue ?
        target.value = (elem.value / data.eur).toFixed(2)
    :
        target.value = (elem.value * data.eur).toFixed(2)
    
    elem.value === ''? (target.value = ''):null
    })
 })
}
conveter(som,eur,true)
conveter(eur,som)