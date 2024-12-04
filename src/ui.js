class UI{
    constructor(firstSelect,secondSelect){
        this.firstSelect=firstSelect;
        this.secondSelect=secondSelect;
        this.outputFirst=document.getElementById('outputFirst');
        this.outputSecond=document.getElementById('outputSecond');
        this.outputResult=document.getElementById('outputResult');


    }
    changeFirst(){
this.outputFirst.textContent=this.firstSelect.options[firstSelect.selectedIndex].textContent
    }
    changeSecond(){
        this.outputSecond.textContent=this.secondtSelect.options[secondtSelect.selectedIndex].textContent

    }
    displayResult(result){
    this.outputResult.value=result;
    }
}