let plus = document.getElementById('plus')
plus.addEventListener('click', function(event) {
    let text = document.querySelector('h1#counter').innerText
    let num = parseInt(text)
    num++
    document.querySelector('h1#counter').innerText = num
    console.log(num)
  });

  let minus = document.getElementById('minus')
  minus.addEventListener('click', function(event){
    let text = document.querySelector('h1#counter').innerText
    let num = parseInt(text)
    if (num == 0){
        document.querySelector('h1#counter').innerText = num
    }
    else{
       num--
        document.querySelector('h1#counter').innerText = num 
    }
    console.log(num)
  });


let heart = document.getElementById('heart')
heart.addEventListener('click', function(event) {
    let text = document.querySelector('h1#counter').innerText
    let count = parseInt(text)
    let ul = document.querySelector('.likes')
    let num = 0
    //num = num + 1
    ul.innerText = num
    
    let like = document.querySelector('.likes').innerText
    let likes = parseInt(like)
    likes++ 
    document.querySelector('.likes').innerText = likes
    console.log(likes)
  });

let pause = document.getElementById('pause')
pause.addEventListener('click', function(event) {
    let name = document.getElementById('pause').innerText
    if(name == "pause"){
        document.getElementById('pause').innerText = 'resume'
        document.getElementById("plus").disabled = true
        document.getElementById("minus").disabled = true
        document.getElementById("heart").disabled = true
    }
    else{
        document.querySelector('h1#counter').innerText = 0
        document.getElementById('pause').innerText = 'pause'
        document.getElementById("plus").disabled = false
        document.getElementById("minus").disabled = false
        document.getElementById("heart").disabled = false
    }
  });

document.addEventListener("DOMContentLoaded", () => {
    let div = document.createElement('div')
    div.id = 'post-comments'
    document.body.appendChild(div)

    let ul = document.createElement('ul')
    div.appendChild(ul)
    let form = document.querySelector('form')

    const comments = function(words){
        let li = document.createElement('li')
        li.innerHTML = words
        ul.appendChild(li)
    }

    const handleSubmit = function(e){
        e.preventDefault()
        comments(e.target.querySelector('#comment-input').value)
    }

    form.addEventListener("submit", handleSubmit);
});