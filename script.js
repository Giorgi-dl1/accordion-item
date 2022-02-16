const headers = document.querySelectorAll('.accordion-item-header');
headers.forEach(header => {
    header.addEventListener('click',event =>{
        const activeHeader = document.querySelector('.accordion-item-header.active');
        if(activeHeader && activeHeader !== header){
            activeHeader.classList.toggle('active');
            activeHeader.nextElementSibling.style.maxHeight=0;
        }
        header.classList.toggle('active');
        const body= header.nextElementSibling;
        if(header.classList.contains('active')){
            body.style.maxHeight = body.scrollHeight + 'px';
        }else{
            body.style.maxHeight=0;
        }
    })
});