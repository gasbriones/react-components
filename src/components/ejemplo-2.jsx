import  React from 'react'

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
