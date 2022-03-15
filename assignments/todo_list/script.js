const compBtn = document.querySelector('button#comp');
const pendBtn = document.querySelector('button#pend');
const allbtn = document.querySelector('button#all');
async function fetchtodo(){
    let res=await fetch('https://jsonplaceholder.typicode.com/todos');
    console.log(res)
    let data=await res.json();
    console.log(data)
    allbtn.onclick = function(){
        let output='';
    data.forEach(function(todo,index) {
        output+=`<p key=${todo.id}>
                "userId":  ${todo.userId},<br>
                "id": ${todo.id},<br>
                "title": ${todo.title},<br>
                "completed":  ${todo.completed},<br>
                </p>`
})
    document.querySelector('.todos').innerHTML=output;
    }
    compBtn.onclick = function(){
        let output='';
    data.forEach(function(todo,index) {
        if (todo.completed == true){
        output+=`<p key=${todo.id}>
                "userId":  ${todo.userId},<br>
                "id": ${todo.id},<br>
                "title": ${todo.title},<br>
                "completed":  ${todo.completed},<br>
                </p>`
}})
    document.querySelector('.todos').innerHTML=output;
    }
    pendBtn.onclick = function(){
        let output='';
        data.forEach(function(todo,index) {
            if (todo.completed == false){
            output+=`<p key=${todo.id}>
                  "userId":  ${todo.userId},<br>
                   "id": ${todo.id},<br>
                   "title": ${todo.title},<br>
                  "completed":  ${todo.completed},<br>
                    </p>`
    }})
        document.querySelector('.todos').innerHTML=output;
        }
}
    fetchtodo();