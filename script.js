document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: 'smooth'
        })
    })
})

document.getElementById('topPage').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
})
