const endPointAPITransp = 'http://192.168.0.78:3001/vibra/api/transportadora-cnpj';

// Aguarde até que todo o conteúdo da página esteja carregado
document.addEventListener('DOMContentLoaded', function() {
  
    // Busque o elemento de input pelo seu ID
    const cnpjField = document.getElementById('cnpj');
  
    // Adicione um evento de 'input' ou 'change' para capturar o valor quando ele mudar
    cnpjField.addEventListener('input', function() {
      
      // Obtenha o valor atual do campo
      const cnpjValue = cnpjField.value;
  
      // Remova caracteres não numéricos
      const sanitizedCnpj = cnpjValue.replace(/\D/g, '');
  
      // Atualize os cabeçalhos
      const headers = {
        'cnpj': sanitizedCnpj
      };
  
      // Agora você pode usar 'headers' como quiser
      console.log(headers);

      const requestOptions = {
        method: 'GET',
        headers: headers
    };

    async function getBuscarTransp() {
        try {
            const res = await fetch(endPointAPITransp, requestOptions);
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            const cnpj = await res.json();
            console.table(cnpj);
            var nomeTransportador = document.getElementById('nome-transportador')
            nomeTransportador.value = cnpj.transportadora_nome_sap
        } catch (error) {
            console.error("Ocorreu um erro na solicitação:", error);
        }
    }
    
    var cnpjTransportador = document.getElementById('cnpj');
    cnpjTransportador.addEventListener("focusout", () => getBuscarTransp(cnpjTransportador.value))
    getBuscarTransp();
    });
  });

$("#cnpj").mask("99.999.999/9999-99");


