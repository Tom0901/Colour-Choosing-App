//Select the Button// 

const button = document.querySelector('button'); 

// add event listener (mousemove)// 

button.addEventListener('mousemove', (e)=>{
	document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}); 
//click event listener// 


button.addEventListener('click', (e)=>{

button.textContent= `rgb(${e.offsetX}, ${e.offsetY}, 40)`
  
}); 

