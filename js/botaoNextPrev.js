document.addEventListener('DOMContentLoaded', function() {
    const nextButton1 = document.querySelector('.next-1');
    const prevButton1 = document.querySelector('.prev-1');
    const pageSolicitacao = document.querySelector('.page-solicitacao');
    const pageNovoAgendamento = document.querySelector('.page-novo-agendamento');
  
    nextButton1.addEventListener('click', function() {
      let valid = validateForm(pageSolicitacao);
      if (valid) {
        pageSolicitacao.classList.add('hidden');
        pageNovoAgendamento.classList.remove('hidden');
      } else {
        alert("Preencha todos os campos obrigatórios na primeira página.");
      }
    });
  
    prevButton1.addEventListener('click', function() {
      pageSolicitacao.classList.remove('hidden');
      pageNovoAgendamento.classList.add('hidden');
    });
  
    function validateForm(page) {
      let valid = true;
      const requiredFields = page.querySelectorAll('[required]');
      requiredFields.forEach(function(field) {
        if (!field.value) {
          valid = false;
        }
      });
      return valid;
    }
  });