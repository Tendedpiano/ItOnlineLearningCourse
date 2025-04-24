window.onload = addElement;

function addElement() {
    const newSection = document.createElement("section");

    const newContent = document.createTextNode("Hi there and greetings!");

    newSection.appendChild(newContent);

    const currentSection = document.querySelector("#chapter-section");
    document.body.insertBefore(newSection, currentSection)
}