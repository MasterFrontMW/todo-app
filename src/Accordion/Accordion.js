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
  const accordionTitles =
    accordionHTMLSection.querySelectorAll(".accordion-title");

  accordionTitles.forEach((accordionTitle) => {
    const accordionItemContent = accordionTitle.nextElementSibling;
    
    const accordionItemContentRect = accordionItemContent.getBoundingClientRect();
    const maxHeight = accordionItemContentRect.height;
    console.log("this is height from RECT  " + maxHeight);
    
    const handleAccordionCollapse = () => {
  
      // const accordionItemContentScroll = accordionItemContent.scrollHeight;
      // console.log("this is height from SCROLL  " +  accordionItemContentScroll);

      console.log(accordionItemContent);
      console.log(accordionItemContent.style.maxHeight);
      
      
      const accordionItemContentRect = accordionItemContent.getBoundingClientRect();
      const maxHeight = accordionItemContentRect.height;
      console.log("this is height from RECT  " + maxHeight);
      
      accordionTitle.classList.toggle("active");
      if (accordionTitle.classList.contains("active")) {
        
        const accordionItemContentRect = accordionItemContent.getBoundingClientRect();
        const maxHeight = accordionItemContentRect.height;
        console.log("this is height from RECT  " + maxHeight);
        
        // console.log(accordionItemContent.style.maxHeight + " this is max HEIGHT before");
        
        // const accordionItemContentScroll = accordionItemContent.scrollHeight;
        // accordionItemContent.style.maxHeight = accordionItemContentScroll +"px";
        
        // console.log(accordionItemContent.style.maxHeight + " this is max HEIGHT after");
      }
      else {
        // accordionItemContent.style.maxHeight = 0;  
      }
    };

    accordionTitle.addEventListener("click", handleAccordionCollapse);
  });
};
