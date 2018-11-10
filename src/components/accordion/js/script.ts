const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', toggleAccordion);

const accordionHeaders: any = accordion.querySelectorAll('.item__header');

function toggleAccordion(e: any) {
	const itemHeader = e.target.closest('.item__header');
	if (itemHeader) {
		itemHeader.parentNode.classList.toggle('item--open');
		toggleOtherItems(itemHeader);
	}
}

function toggleOtherItems(accordionHeader: any) {
	accordionHeaders.forEach((header: any) => {
		if (header != accordionHeader) {
			header.parentNode.classList.remove('item--open');
		}
	});
}