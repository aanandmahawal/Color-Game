
document.body.addEventListener("click", (event)=>{
  
  const circle = document.createElement('div')
  circle.className = 'circle';
  circle.textContent = 'Hi';
  
  const x = event.clientX;
  const y = event.clientY;

  circle.style.left = `${x-25}px`
  circle.style.top= `${y-25}px`


  const color = ["violet", "indigo", "blue", "green" , "yellow" , "orange", "red"];
  circle.style.backgroundColor = color[Math.floor(Math.random()*color.length)];

  const messages = ['Rohit', 'Virat', 'Welcome', 'Hey there', 'Dhoni'];
  circle.textContent = messages[Math.floor(Math.random() * messages.length)];
  

  document.body.appendChild(circle);

  setTimeout(()=>{
    circle.remove();
  } ,5000)

})
