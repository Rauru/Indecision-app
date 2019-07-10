class IndecisionApp extends React.Component{
    render(){
        const title = 'iNDECISION'
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['this one', 'thing two', 'thing three'];
        return (
            <div>
            <Header title={title} subtitle={subtitle}/>
            <Action/>
            <Options options={options}/>
            <AddOption/>
            </div>
        );
    }
}

class Header extends React.Component {

    render(){
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }

}

class Action extends React.Component {
    handlePick(){
        alert('handlepick')
    }
    render(){
        return(
            <div>
                <button onClick={this.handlePick} >What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component{

    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll(){
        console.log(this.props.options);
    }
    render(){
        return(
            <div>
                <button onClick = {this.handleRemoveAll}>Remove All</button>
                {this.props.options.map((value, index) => <Option key={index} optionText = {value}/> )}
                <Option options={this.props.options}/>
            </div>
        );
    }
}


class Option extends React.Component{
    render(){
        return(
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

class AddOption extends React.Component{

    handleAddOptions(e){
        e.preventDefault();

        const option = e.target.elements.option.value;

        if(option){
            alert('option');
        }
    }
    render(){
        return(
            <div>
            <form onSubmit={this.handleAddOptions}>
                <input type='text' name='option'/>
                <button onClick ={this.handleAddOption}>Add option</button>

             </form>
            </div>
        );
    }
}



ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));