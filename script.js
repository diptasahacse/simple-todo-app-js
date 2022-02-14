document.getElementById('add-button').addEventListener('click',function(){
    

    // console.log(document.getElementById('input-text').value);
    const li = document.createElement('li');
    li.classList.add('bg-slate-400','rounded','p-1','m-2','flex','justify-between','items-center');

    const span = document.createElement('span');
    span.classList.add('text-white');

    span.innerText = document.getElementById('input-text').value;

    li.appendChild(span);

    document.getElementById('item-list').appendChild(li);
    
});