function addClass(element: HTMLElement, toAdd: string): void {
	element.classList.add(toAdd);
}

function removeClass(element: HTMLElement, toRemove: string): void {
	element.classList.remove(toRemove);
}

export { addClass, removeClass };
