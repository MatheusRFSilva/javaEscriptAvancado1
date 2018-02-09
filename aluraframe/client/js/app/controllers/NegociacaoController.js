class NegociacaoController {


  adiciona(event){
    event.preventDefault();
    let $ = document.querySelector.bind(document);
    let inputQuantidade = $('#quantidade');
    let inputData = $('#data');
    let inputValor = $('#valor');

    console.log(inputData.value);
    console.log(inputQuantidade.value);
    console.log(inputValor.value);
  }
}
