const manageClick = (n) => {
  let element = callElements(n);
  element.classList.toggle("display")
};


const about = document.querySelector(".about")
const contact = document.querySelector(".contact")
const callElements = m => (m === 1 ? about : contact);

