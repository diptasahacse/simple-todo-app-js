function createList(value) {
    // let li = document.createElement('li');
    // li.setAttribute('list-group-item m-1 border rounded d-flex justify-content-between');
    // let div = document.createElement('div');
    // div.setAttribute('d-flex');
    // let tickLogoIcon = document.createElement('span');
    // tickLogoIcon.setAttribute('me-1 text-primary');
    // let



    let listItem = `
    
    `;
    let li = document.createElement('li');
    let classesToAdd = ['single-item', 'list-group-item', 'm-1', 'border', 'rounded', 'd-flex', 'justify-content-between'];
    li.classList.add(...classesToAdd);

    let innerLi = `
    <div class="d-flex">
                            <span class="me-1 text-primary"><i class="fa-solid fa-circle-check"></i></span>
                            <span>${value}</span>
                        </div>

                        <button class="border-0 bg-transparent text-danger delete-button">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
    `;
    li.innerHTML = innerLi;
    return li;
}

// Add
document.getElementById('add-button').addEventListener('click', function() {
    let li = createList(document.getElementById('input-field').value);
    document.getElementById('allList').appendChild(li);

});

// let deleteButton = document.getElementsByClassName('delete-button');
// for (const deleteBtn of deleteButton) {
//     deleteBtn.addEventListener('click', function() {
//         let targetList = deleteBtn.parentNode;
//         let parent = targetList.parentNode;
//         parent.removeChild(targetList, true)

//     });

// }

//Add Hover Effect
// let deleteButton = document.getElementsByClassName('delete-button');
// for (const deleteBtn of deleteButton) {
//     deleteBtn.addEventListener('mouseenter', function() {
//         let targetList = deleteBtn.parentNode;
//         targetList.classList.add("border-danger");
//     });
//     deleteBtn.addEventListener('mouseleave', function() {
//         let targetList = deleteBtn.parentNode;
//         targetList.classList.remove("border-danger");
//     });

// }
document.getElementById('allList').addEventListener('click', function(event) {
    let liClass = event.target.parentNode.parentNode.getAttribute('class');
    let li = event.target.parentNode.parentNode;
    if (liClass.includes("single-item")) {
        li.parentNode.removeChild(li);
    }

});