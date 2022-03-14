let Input = document.querySelector('input');
let btn = document.querySelector('button');
let content = document.querySelector('.todos');
let count =-1
btn.addEventListener('click',function(){
    count +=1;
    let inputcontent =document.createElement('p');
    inputcontent.innerHTML= Input.value
    inputcontent.setAttribute("key",count);
    content.appendChild(inputcontent);

    inputcontent.addEventListener('click',function(){
        content.removeChild(inputcontent);
    })
})