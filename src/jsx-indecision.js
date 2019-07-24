console.log('app is running!')


const state ={
    title: 'Indecision App',
    body: 'contents',
    toggle: false,
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        this.state.options.push(option);
        e.target.elements.option.value = '';
    }

    renderApp();
};

const removeArray = () =>
{
    this.state.options=[];
    renderApp();
}
const onMakeDecision = () =>{
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
    console.log(randomNum);
}

const renderApp = () =>{
    const template = 
    <div>
        <h1>{this.state.title}</h1>
        <button disabled={this.state.options.length ==0} onClick ={onMakeDecision}>What should I do?</button>
        <button onClick = {removeArray}>Remove All</button>
        <p>{this.state.options.length > 0 ? 'Here are your options': 'No options'}</p>
        <form onSubmit={onFormSubmit}>
            <input type='text' name='option'/>
            <button>Add option</button>

        </form>


        <ol>
            {
            this.state.options.map((options) => {
                return <li key={options}>{options}</li>
            })
            }
        </ol>

    </div>;

    ReactDOM.render(template, appRoot);
};


const appRoot = document.getElementById('app');

renderApp();
