import data from './data.json' assert {type:'json'}



let example = ``


const dkey = Object.keys(data)
let reccout = 0

function recurssion(){
    for (let i in dkey){
        if (example.includes(dkey[i])){
            example = example.replace(dkey[i], data[dkey[i]])
            reccout++
            recurssion()
            reccout--
        }
    }
    if(reccout == 0){
        console.log(example)
    }

}

//recurssion(example)
//document.addEventListener("DOMContentLoaded", function(event) {})

const submitted = document.getElementById('submitted')

//submitted.style = ("background-color: red;")


submitted.addEventListener('click',()=>{
    const datainput = document.getElementById('datainput').value
    example = datainput
    recurssion(example)

    document.getElementsByClassName('answer')[0].innerHTML = example
})