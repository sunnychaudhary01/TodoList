const Button = document.querySelector('#Btn');


Button.addEventListener('click',() =>{
    const inputBox = document.getElementById('inpuB');
    if(inputBox.value === ' '){
        alert("Enter some task")
    }else{
        addTask(inputBox.value) 
    }
    inputBox.value = " "
    
})

function addTask(value) {  
    const li = document.createElement('li')
    li.innerText = `${value}`

    const ul =  document.querySelector('#myUl');
    ul.appendChild(li)

    const div2 = document.createElement('div')
    div2.innerHTML = 'X'
    div2.style.position = 'relative'
    div2.style.top = '4px'
    div2.style.height = '35px'
    div2.style.width =  '35px'
    div2.style.borderRadius = '50%'
    div2.style.backgroundColor = 'orange'
    div2.style.color =  'white'
    div2.style.fontSize =  '28px'
    div2.style.paddingTop =  '2.5px'
    div2.style.fontWeight =  'bolder'
    div2.style.textAlign =  'center'
    div2.style.fontFamily =  'arial'
    ul.appendChild(div2)

    const div = document.createElement('div')
    div.innerHTML = 'Done'
    div.style.backgroundColor = 'orange'
    div.style.color = 'white'
    div.style.display = 'inline-block'
    div.style.position = 'relative' 
    div.style.left = '670px'
    div.style.bottom = '26px'
    div.style.fontSize = '25px' 
    div.style.borderRadius = '25px' 
    div.style.width = '100px' 
    div.style.height = '35px' 
    div.style.textAlign = 'center' 
    div.style.paddingTop = '3.95px' 
    div.style.fontWeight =  'bolder'
    ul.appendChild(div)
    
    let task = 1;
    div.addEventListener('click',() =>{
        if (task == 1) {
            li.style.textDecoration = "line-through";             
            task = 0
        } else {
            li.style.textDecoration = "none";
            task = 1
        }

    })    
    
    div2.addEventListener('click',() =>{
        ul.removeChild(div2)
        ul.removeChild(li)
        ul.removeChild(div)
    })    
    console.log(ul);
    
}
