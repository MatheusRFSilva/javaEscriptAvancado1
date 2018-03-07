class NegociacaoController {

    constructor(){
      let $ = document.querySelector.bind(document);
      this._inputQuantidade = $('#quantidade');
      this._inputData = $('#data');
      this._inputValor = $('#valor');
    }

  adiciona(event){
    event.preventDefault();

    //let helper = new DateHelper();


    let negociacao =  new Negociacao(
        DateHelper.textoParaData(this._inputData.value),
        this._inputQuantidade.value,
        this._inputValor.value

    );

    console.log(negociacao);
    console.log(DateHelper.dataParaTexto(negociacao.data));



  }
}
