const editButton = document.getElementById("edit-btn") as HTMLButtonElement;
const resume = document.getElementById("resume") as HTMLElement;
const editableSections = [
  "name",
  "email",
  "education",
  "work-experience",
  "skills",
];

function enableEditing() {
  editableSections.forEach((id) => {
    const section = document.getElementById(id);
    if (section) {
      section.contentEditable = "true";
      section.style.border = "1px solid #ccc";
    }
  });

  editButton.textContent = "Save Changes";
  editButton.removeEventListener("click", enableEditing);
  editButton.addEventListener("click", saveChanges);
}

function saveChanges() {
  editableSections.forEach((id) => {
    const section = document.getElementById(id);
    if (section) {
      section.contentEditable = "false";
      section.style.border = "none";
    }
  });

  editButton.textContent = "Enable Editing";
  editButton.removeEventListener("click", saveChanges);
  editButton.addEventListener("click", enableEditing);
}

editButton.addEventListener("click", enableEditing);

editableSections.forEach((id) => {
  const section = document.getElementById(id);
  if (section) {
    section.addEventListener("keydown", (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        saveChanges();
      }
    });
  }
});