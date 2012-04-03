function sidebarCtrl(){
    this.resultado = "";

    this.form = {};
    var  self = this;
    // this.mquadrados = '';
    this.tijolos = [
        {nome:'6 furos 09x14x19',medidas:'09 x 14 x 19',fracao:'35' },
        {nome:'8 furos 09x19x19',medidas:'09 x 19 x 19',fracao:'25' },
        {nome:'8 furos 11.5x19x19',medidas:'11,5 x 19 x 19',fracao:'25' },
        {nome:'12 furos 14x19x19',medidas:'14 x 19 x 19',fracao:'25' }
    ];

    //this.tijolo = '';

    this.calcula = function(){

        try {
            var res = (parseFloat(this.tijoloSelected.fracao) * parseInt(this.mquadrados)).toString();
            if (isNaN(res)) {
                if (this.mquadrados == "" || isNaN(this.mquadrados)){
                    this.resultado = "Entre com o tamanho em m2 (numero apenas)"
                }
            }else
            {
                this.resultado = "Serão necessários " + (Math.round(parseFloat(this.tijoloSelected.fracao) * parseInt(this.mquadrados))).toString()+" tijolos de  "+this.tijoloSelected.nome;
            }

        }
        catch(e){
            if (this.mquadrados == "" || isNaN(this.mquadrados)){
                this.resultado = "Entre com o tamanho em m2 (numero apenas)"
            } else {
                this.resultado = "Escolha um tipo de tijolo";
            }


            // alert('An error has occurred: '+e.message)
        }



        // this.slcTijolo
        //   this.resultado = "calculado em x "+this.form.sel;
    }
}