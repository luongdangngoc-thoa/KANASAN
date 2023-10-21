if (!customElements.get('show-more-button')) {
  customElements.define(
    'show-more-button',
    class ShowMoreButton extends HTMLElement {
      constructor() {
        super();
        const button = this.querySelector('button');
        button.addEventListener('click', (event) => {
          this.expandShowMore(event);
          const nextElementToFocus = event.target.closest('.parent-display').querySelector('.show-more-item');
          if (nextElementToFocus && !nextElementToFocus.classList.contains('hidden') && nextElementToFocus.querySelector('input')) {
            nextElementToFocus.querySelector('input').focus();
          }
        });
      }
      expandShowMore(event) {
        const parentDisplay = event.target.closest('[id^="Show-More-"]').closest('.parent-display');
        const parentWrap = parentDisplay.querySelector('.parent-wrap');
        this.querySelectorAll('.label-text').forEach((element) => element.classList.toggle('hidden'));
        parentDisplay.querySelectorAll('.show-more-item').forEach((item) => item.classList.toggle('hidden'));
        if (!this.querySelector('.label-show-less')) {
          this.classList.add('hidden');
        }
      }
    }
  );

}

const handleSelectOption = () => {
  let openSelect = false	
  const button = document.querySelector('.button-show');	
  const minus_icon = document.querySelector('.minus-icon');
  const arrow_down_icon = document.querySelector('.arrow-down-icon');

  const selectContainer = document.querySelector('.open-modal');	

  button.addEventListener('click', (event) => {	
      if (openSelect) {	
        arrow_down_icon.style.display = 'none';	
        minus_icon.style.display = 'block';
        selectContainer.style.display = 'grid';	
      } else {	
        arrow_down_icon.style.display = 'block';
        minus_icon.style.display = 'none';
        selectContainer.style.display = 'none';	
      }	

      openSelect = !openSelect;	
  });
}

handleSelectOption()


//  const arrow = document.getElementById('arrow');

// const facets_disclosure = document.querySelectorAll('.facets__disclosure');

// facets_disclosure.forEach((faq) => {
//  const facets_header = faq.querySelector(".facets__header");
//  facets_header.addEventListener("click", () => {
//    const fecets_list = faq.querySelector('.facets_list_test')
//    console.log('fecets_list', fecets_list)
//    fecets_list.classList.toggle('hidden')
//  });
// });
const facets_disclosure = document.querySelectorAll('.facets__disclosure');
facets_disclosure.forEach((faq) => {
 const facets_header = faq.querySelector(".facets__header");
 facets_header.addEventListener("click", () => {
   const facets_list_filter = faq.querySelector('.facets_list_test');
   if(facets_list_filter) {
    facets_list_filter.classList.toggle('hidden')
   }
   
 });

 const ul = faq.querySelector('ul')
 let selected = []; 
 ul.addEventListener('click', event => {
   if (event.target.type === 'checkbox') {
     const checked = faq.querySelectorAll('input[type="checkbox"]:checked')
     selected = Array.from(checked).map(x => x.value)
   }
 })
 

//  const checkboxes = faq.querySelectorAll('input[type="checkbox"]');
//  checkboxes.forEach((checkbox) => {
//    checkbox.addEventListener("change", (e) => {
//        e.stopPropagation()
//    });
//  });

});