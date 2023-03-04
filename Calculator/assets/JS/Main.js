function criaCalculadora(){
    return{

        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        btnDelete: document.querySelector('.btn-del'),
        btnIgual: document.querySelector('btn-eq'),
        
        
        inicia: function(){
            this.buttonClick();
            this.pressEnter();
        },

        pressEnter(){
            addEventListener('keyup', e =>{
                if (e.keyCode === 13){
                    this.doIt();
                }
            });
        },

        delDisplay(){
            this.display.value= this.display.value.slice(0, -1);
        },
        
        clearDisplay(){
            this.display.value = ' '
        },

        doIt(){
            let conta = this.display.value;

            try{
                conta = eval(conta);

                if(!conta){
                    alert('Conta invalida');
                    return;
                }
                this.display.value= String(conta);
            } catch(e){
                alert('Conta invalida');
                return;
            }
        },
        
        

        buttonClick(){
            document.addEventListener('click', function(e){
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnToDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')){
                    this.delDisplay();
                }
                if(el.classList.contains('btn-eq')){
                    this.doIt();
                }
            }.bind(this));
        },
        btnToDisplay(valor){
            this.display.value += valor;
            this.display.focus();
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();