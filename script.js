let input = document.querySelector(".input");
let saveBtn = document.querySelector(".save-btn");
let taskDetail = document.querySelector(".Task-Detail");

let taskItem_Arr = [];

let id = 0;

saveBtn.addEventListener("click", (event) => {
  addTask();
});

// Add-Task
function addTask() {
  let taskItem = document.createElement("div");
  taskItem.classList.add("Task");
  taskItem.id = id;
  taskItem.innerHTML = `
        <div class="taskFirst">
            <input type="checkbox" id="${id}" class="checkbox" name="check" value="true">
            <p class="taskText">${input.value}</p>
        </div>
        <p class="taskState" id="${id}" >in progress</p>
        <button class="taskDelete" id="${id}"><i class="fa-solid fa-trash"></i></button>
    `;
  id++;
  taskDetail.append(taskItem);
  taskItem_Arr.push(taskItem);

  input.value = "";

  deleteTask();    
  completeTask();
}

// Delete-Task
function deleteTask() {
  if (taskItem_Arr.length >= 1) {
    let taskDetail_s = document.querySelectorAll(".Task");
    let taskDelete = document.querySelectorAll(".taskDelete");

    for (let el of taskDelete) {
      el.addEventListener("click", () => {
        for (let taskEl of taskDetail_s) {
          if (taskEl.id == el.id) {
            taskEl.style.display = "none";
          }
        }
      });
    }
  }
}


// Complete-Task
function completeTask() {
  if (taskItem_Arr.length >= 1) {
    let taskState = document.querySelectorAll(".taskState");
    let taskCom = document.querySelectorAll(".checkbox");

    for (let el of taskCom) {
      el.addEventListener("change",(event)=>{
        for (let taskEl of taskState) {
          if (taskEl.id == el.id) {
            if (el.checked) {
                taskEl.innerText="Completed";
                taskEl.style.color="rgb(28, 180, 64)";
            }else{
                taskEl.innerText="in progress";
                taskEl.style.color="rgb(159, 32, 32)";
            }
          }
        }
      });
    }
  }
}
