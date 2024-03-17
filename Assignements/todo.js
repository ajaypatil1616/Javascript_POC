document.addEventListener("DOMContentLoaded", function () {
  const taskForm = document.getElementById("taskForm");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  taskForm.addEventListener("submit", function (event) {
    event.preventDefault();//does not submit the data ,basically prevent the data from submitting
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
                <td>${taskText}</td>
                <td><button class="delete">Delete</button></td>
            `;
      taskList.appendChild(newRow);
      taskInput.value = "";
    }
  });

  taskList.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete")) {
      event.target.parentNode.parentNode.remove();
    }
  });
});
