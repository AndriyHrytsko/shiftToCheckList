const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
const button = document.querySelector('.addTaskButton');
const textInput = document.querySelector('.addNewTaskBlock input[type="text"]');
const conteiner = document.querySelector('.inbox');
let lastChecked;

function handleCheck(e) {
  // Check if they had the shift key down
  // AND check that they are checking it
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // go ahead and do what we please
    // loop over every single checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('Starting to check them in between!');
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

function addElement() {
  let div = document.createElement("div");
  div.classList.add("item");
  let input = document.createElement("input");
  input.setAttribute('type', 'checkbox');

  div.appendChild(input);

  let p = document.createElement("p");
  p.innerHTML = textInput.value;
  div.appendChild(p);

  conteiner.appendChild(div);
}

button.addEventListener('click', addElement);