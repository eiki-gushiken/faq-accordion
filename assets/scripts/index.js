const faqs = document.querySelectorAll('.faq')
const questions = document.querySelectorAll('.question')

questions.forEach((item, index) => {
    item.addEventListener('click', () => faqs[index].classList.contains('active') ? faqs[index].classList.remove('active') : faqs[index].classList.add('active'))
})