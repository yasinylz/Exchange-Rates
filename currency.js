class Currency{
    constructor(firstCurrency,secondCurrency){
        this.firstCurrency=firstCurrency;
        this.secondCurrency=secondCurrency;
        this.url='https://api.exchangeratesapi.io/v1/latest?access_key=bcb7219882d4107b79f876edec536e7c&symbols=';
        this.amount=null;

    }
    exchange(){
        return new Promise((resolve,reject)=>{
            const completeUrl = `${this.url}${this.firstCurrency},${this.secondCurrency}`;

            fetch(completeUrl).then(response=>response.json()).then(data=>{
                const parity=data.rates[this.secondCurrency];
                const Amount=Number(this.amount);
                let total=parity*Amount;
                resolve(total)
            }).catch(err=>reject(err))
        });
       
    }
    changeAmount(amount){
        this.amount=amount;
    }
    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency=newFirstCurrency;
    }
    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency=newSecondCurrency;
    }
}