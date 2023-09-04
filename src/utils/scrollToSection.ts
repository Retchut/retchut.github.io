const PAGE_OFFSET = window.innerHeight;

function scrollToSection(num : number){
    window.scrollTo({
      top : num * PAGE_OFFSET,
      left : 0,
      behavior: 'smooth'
    })
}

export {scrollToSection};