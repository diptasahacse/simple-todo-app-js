// Add
document.getElementById('add-button').addEventListener('click', function() {
    console.log(document.getElementById('input-field').value);

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
let deleteButton = document.getElementsByClassName('delete-button');
for (const deleteBtn of deleteButton) {
    deleteBtn.addEventListener('mouseenter', function() {
        let targetList = deleteBtn.parentNode;
        targetList.classList.add("border-danger");
    });
    deleteBtn.addEventListener('mouseleave', function() {
        let targetList = deleteBtn.parentNode;
        targetList.classList.remove("border-danger");
    });

}