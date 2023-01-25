import './Accordion.css';

export const Accordion = () => {
  return `<div class="accordion-wrapper">
      
      <div class="accordion-item"> 
      <div class="accordion-title"><h3>Accordion 1 Title</br> Accordion 1 </br> Accordion 1</h3> <div class="accordion-plus-sign"></div> </div>
      <div class="accordion-content"><p>This is the content of 1st Accordion </br>This is the content of 1st Accordion </br>This is the content of 1st Accordion </br>This is the content of 1st Accordion </br>This is the content of 1st Accordion </br>This is the content of 1st Accordion </br> e</p></div>
      </div>
      <div class="accordion-item"> 
      <div class="accordion-title"><h3>Accordion 2 Title </h3><div class="accordion-plus-sign"></div> </div>
      <div class="accordion-content"><p>This is the content of 2nd Accordion</p></div>
      </div>
      <div class="accordion-item"> 
      <div class="accordion-title"><h3>Accordion 3 Title</h3><div class="accordion-plus-sign"></div> </div>
      <div class="accordion-content"><p>This is the content of 3rd Accordion</p></div>
      </div>
    </div>`;
};

export const initializeAccordion = (accordionHTMLSection) => {
  const accordionTitles = accordionHTMLSection.querySelectorAll('.accordion-title');

  accordionTitles.forEach((accordionTitle) => {
    const accordionItemContent = accordionTitle.nextElementSibling;

    const accordionPlusSign = accordionTitle.lastElementChild;
    const body = document.querySelector('body');
    body.style.overflow = 'hidden';

    const handleAccordionCollapse = () => {
      accordionPlusSign.classList.toggle('active');
      accordionTitle.classList.toggle('active');
      if (accordionTitle.classList.contains('active')) {
        const accordionItemContentScroll = accordionItemContent.scrollHeight;
        accordionItemContent.style.maxHeight = `${accordionItemContentScroll}px`;
      } else {
        accordionItemContent.style.maxHeight = 0;
      }
    };

    accordionTitle.addEventListener('click', handleAccordionCollapse);
  });
};
