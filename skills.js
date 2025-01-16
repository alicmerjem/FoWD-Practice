function allowDrop(event) {
    event.preventDefault();
}

// Handle the drop event and append the dropped element to the drop area
function drop(event) {
    event.preventDefault();

    // Get the ID of the dragged element
    const draggedElementId = event.dataTransfer.getData("text");
    const draggedElement = document.getElementById(draggedElementId);

    // Append the dragged skill to the drop area
    const dropArea = document.getElementById("skills");
    dropArea.appendChild(draggedElement);

    // Optionally, reorder skills (Append at the end or reorder as needed)
    dropArea.appendChild(draggedElement);
}

// Handle the dragstart event to store the dragged element's ID
const skills = document.querySelectorAll(".skill");
skills.forEach(skill => {
    skill.addEventListener("dragstart", function(event) {
        event.dataTransfer.setData("text", event.target.id);
    });
});