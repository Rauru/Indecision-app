class IndecisionApp extends React.Component{

    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.state = {
            options: props.options
        };
    }
    handleDeleteOptions(){
        
        this.setState(()=>({
            options:[]
        }));
    }

    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOptions(option){
        if(!option){
            return 'Enter valid value';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This option already exist'
        }else{

            this.setState((prevState) => ({ 
                     options: prevState.options.concat([option])  
            }));
        }
    }

    render(){
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
            <Header/>
            <Action 
                hasOptions={this.state.options.length > 0} 
                handlePick = {this.handlePick}
            />
            <Options 
                options={this.state.options}
                hanldeDeleteOptions={this.handleDeleteOptions}
            />
            <AddOption
                handleAddOptions = {this.handleAddOptions}
            />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
        return (
            <div>
                <h1>{props.title}</h1>
                {props.subtitle && <h2>{props.subtitle}</h2>}
            </div>
        );
}

Header.defaultProps = {
    title: 'iNDECISION'
};

const Action = (props)=>{
    return(
        <div>
            <button onClick={props.handlePick} 
            disabled={!props.hasOptions}
            >
            What should I do?
            </button>
        </div>
    );
}

const Options = (props) =>{
    return(
        <div>
            <button onClick = {props.hanldeDeleteOptions}>Remove All</button>
            {props.options.map((value, index) => <Option key={index} optionText = {value}/> )}
            <Option options={props.options}/>
        </div>
    );

}

const Option = (props) =>{
    return(
        <div>
            {props.optionText}
        </div>
    );
}


class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOptions(e){
        e.preventDefault();

        const option = e.target.elements.option.value;
        const error = this.props.handleAddOptions(option);
        
        this.setState(()=>({
             error 
        }));
    }
    render(){
        return(
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOptions}>
                <input type='text' name='option'/>
                <button >Add option</button>

             </form>
            </div>
        );
    }
}

const User = (props) =>{
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age} </p> 
        </div>
    );
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));