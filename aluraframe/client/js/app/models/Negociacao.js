class Negociacao {
    constructor(data,quantidade,valor){
      this.data = data;
      this.quantidade = quantidade ;
      this.valor = valor;
    }

    /*Metodo (funcao dentro da classe)*/
    obtemVolume(){
      return this.quantidade * this.valor;
    }
}
