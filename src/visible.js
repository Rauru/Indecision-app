

class Toggle extends React.Component{

    constructor(props){
        super(props);
        this.onToggle = this.onToggle.bind(this);
        this.state = {
            title: 'Indecision App',
            body: 'contents',
            toggle: false,
            options: []
        };
    }
    

    onToggle(){
        
        this.setState((prevState) => {
            return{
                toggle: !prevState.toggle
            };
        });
    }
    
    render(){
        return (
        <div>
            <h1>hello</h1>
            <h1>{this.state.title}</h1>
            { this.state.toggle && <p>{this.state.body} </p> }
            <button onClick={this.onToggle}> toggle</button>
            <p>{this.state.options.length > 0 ? 'Here are your options': 'No options'}</p>
        </div> 
        );
    
    }

}

ReactDOM.render(<Toggle/>, document.getElementById('app'));
//renderApp();