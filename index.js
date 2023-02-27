
const Quote = ()=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c2ef3d4ebemsh6ac5ccfdd0d074bp1bc0a7jsn3d510ecc97fc',
            'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
        }
    };
    
    fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
        .then(response => response.json())
        .then(response => {
            console.log(response.content)
       
                document.getElementById("Quote").innerHTML = response.content;
                document.getElementById("Person").innerHTML = " " + response.originator.name + " ";   
        })
        .catch(err => console.error(err));
}
let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    Quote();
})

    
   
      





