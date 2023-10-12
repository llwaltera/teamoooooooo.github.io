const yesBTn = document.querySelector('#yesBtn');

yesBTn.addEventListener('click',function () {
    alert('i know you are gonna say yes my pookie wookie bookie dookie cutie patootie booboo bear topped with whipped cream sprinkles and a cherry on top')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover',function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})