console.log('app is running!')


const appView ={
    title: 'Indecision App',
    body: 'contents',
    toggle: false,
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        appView.options.push(option);
        e.target.elements.option.value = '';
    }

    renderApp();
};

const removeArray = () =>
{
    appView.options=[];
    renderApp();
}
const onMakeDecision = () =>{
    const randomNum = Math.floor(Math.random() * appView.options.length);
    const option = appView.options[randomNum];
    alert(option);
    console.log(randomNum);
}
const onToggle=() =>{
    if(appView.toggle){
        appView.toggle= false;
    }else{
        appView.toggle=true;
    }
    renderApp();
}
const renderApp = () =>{
    const template = 
    <div>
        <h1>{appView.title}</h1>
        {appView.toggle&& <p>{appView.body} </p> }
        <button disabled={appView.options.length ==0} onClick ={onMakeDecision}>What should I do?</button>
        <button onClick={onToggle}>toggle</button>
        <button onClick = {removeArray}>Remove All</button>
        <p>{appView.options.length > 0 ? 'Here are your options': 'No options'}</p>
        <form onSubmit={onFormSubmit}>
            <input type='text' name='option'/>
            <button>Add option</button>

        </form>


        <ol>
            {
            appView.options.map((options) => {
                return <li key={options}>{options}</li>
            })
            }
        </ol>

    </div>;

    ReactDOM.render(template, appRoot);
};


const appRoot = document.getElementById('app');

renderApp();
