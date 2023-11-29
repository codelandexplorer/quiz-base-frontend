

const openModalBtn = document.getElementById('lamp-btn');
const modal = document.getElementById('myModal');
const closeModalBtn = document.querySelector('.close');
const answerItems = document.querySelectorAll('.answer-item');

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

openModalBtn.addEventListener('click', openModal);

closeModalBtn.addEventListener('click', closeModal);


window.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModal();
    }
  });



window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
      closeModal();
    }
  });


  function toggleActiveClass() {
    answerItems.forEach(item => {
        item.addEventListener('click', function() { 
            answerItems.forEach(answerItem => {
                answerItem.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
}
toggleActiveClass();
  