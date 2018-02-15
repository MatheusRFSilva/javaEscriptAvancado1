class NegociacaoController {

    constructor(){
      let $ = document.querySelector.bind(document);
      this._inputQuantidade = $('#quantidade');
      this._inputData = $('#data');
      this._inputValor = $('#valor');
    }

  adiciona(event){
    event.preventDefault();

    let data = new Date (this._inputData.value.split('-'));
    console.log(data);
/*
    let negociacao =  new Negociacao(
        this._inputData.value,
        this._inputQuantidade.value,
        this._inputValor.value

    );
*/
    //console.log(negociacao);


  }
}
