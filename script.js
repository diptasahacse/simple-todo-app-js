function createList(value) {
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
    document.getElementById('input-field').value = '';

});

// let deleteButton = document.getElementsByClassName('delete-button');
// for (const deleteBtn of deleteButton) {
//     deleteBtn.addEventListener('click', function() {
//         let targetList = deleteBtn.parentNode;
//         let parent = targetList.parentNode;
//         parent.removeChild(targetList, true)

//     });

// }

//Add Hover Effect on Delete button
document.getElementById('allList').addEventListener('mousemove', function(event) {


    // add border
    let deleteIconClass = event.target.parentNode.getAttribute('class');
    let li = event.target.parentNode.parentNode;
    if (deleteIconClass.includes('delete-button')) {
        li.classList.add("border-danger");
    } else {
        // // Remove Border
        // let a = event.target.getAttribute('class');
        // console.log(a);
        // console.log(a.includes('single-item'));
    }



});

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

// Delete Button
document.getElementById('allList').addEventListener('click', function(event) {
    let liClass = event.target.parentNode.parentNode.getAttribute('class');
    let li = event.target.parentNode.parentNode;
    if (event.target.getAttribute('class') != null) {
        if (liClass.includes("single-item")) {
            li.parentNode.removeChild(li);
        }
    }

});