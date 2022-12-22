import "./Accordion.css";

export const Accordion = () => {
  return `<div class="accordion-wrapper">
      
      <div class="accordion-item"> 
      <div class="accordion-title"><h3>Accordion 1 Title</h3> </div>
      <div class="accordion-content"><p>This is the content of 1st Accordion </br>This is the content of 1st Accordion </br>This is the content of 1st Accordion </br>This is the content of 1st Accordion </br>This is the content of 1st Accordion </br>This is the content of 1st Accordion </br> e</p></div>
      </div>
      <div class="accordion-item"> 
      <div class="accordion-title"><h3>Accordion 2 Title </h3> </div>
      <div class="accordion-content"><p>This is the content of 2nd Accordion</p></div>
      </div>
      <div class="accordion-item"> 
      <div class="accordion-title"><h3>Accordion 3 Title</h3> </div>
      <div class="accordion-content"><p>This is the content of 3rd Accordion</p></div>
      </div>
    </div>`;
};

export const accordionCollapse = (accordionHTMLSection) => {
  const accoridonItems =
    accordionHTMLSection.querySelectorAll(".accordion-item");

  accoridonItems.forEach((accordionItem) => {
    const accordionItemContentHeight = accordionItem
      .querySelector(".accordion-content")
      .getBoundingClientRect().height;
    const accordionItemHeight = accordionItem.getBoundingClientRect().height;

    console.log("this is height before handle", {
      accordionItemContentHeight,
      accordionItemHeight,
    });

    const handleAccordionCollapse = () => {
      accordionItem.classList.toggle("active");
      if (accordionTitle.classList.contains("active")) {
        const accordionItemContentRect =
          accordionItemContent.getBoundingClientRect();
        const maxHeight = accordionItemContentRect.height;
        console.log("this is height from RECT  " + maxHeight);
      }
    };

    accordionTitle.addEventListener("click", handleAccordionCollapse);
  });
};
