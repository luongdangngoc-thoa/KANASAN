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

const facets_disclosure = document.querySelectorAll(".facets__disclosure");
facets_disclosure.forEach((faq) => {
    faq.addEventListener("click", (event) => {
      if (window.innerWidth < 750) {  
        console.log('window.innerWidth', window.innerWidth)
        const facets_list_filter = faq.querySelector('.facets_list_test');
        if(facets_list_filter) {
            facets_list_filter.classList.toggle('filter-hidden');
        }
      }
    });
  });
