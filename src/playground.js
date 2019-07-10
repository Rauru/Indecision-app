//Basic Arrow Function
const fullName = 'Jhon Snowden'
const getFirstName = (fullName) => { return fullName.split(' ')[0]};


//Advanved arrow function
const multiplier = {
    numbers: [1,2,3,4,5],
    multipyBy: 2,
    multiply(){
        return this.numbers.map((number) => this.multipyBy * number );
    }
}

console.log(multiplier.multiply());

//render stuff

   
let count = 0;
const addOne = () => {
    count ++;
    renderapp();
};

const minusOne = () =>{
    count --;
    renderapp();
}

const reset = () =>{
    count = 0;
    renderapp();
}



const renderapp = () =>{
    const template2 = 
    <div>
        <h1>Count: {count}</h1>
        <button onClick ={addOne}>+1</button>
        <button onClick ={minusOne }>-1</button>
        <button onClick ={reset }>reset</button>
    </div>
    

    ReactDOM.render(template2, appRoot);
};

renderapp();

