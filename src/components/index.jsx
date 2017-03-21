import  React from 'react'
import ReactDOM from 'react-dom'

export default class Name extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>Bienvenido: {this.props.name} </div>
        );
    }

}


ReactDOM.render(<Name name={'Alejandro'}/>, document.querySelector('#example'));
