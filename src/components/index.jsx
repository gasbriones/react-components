import  React from 'react'
import ReactDOM from 'react-dom'

export default class Color extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            color:'blue'
        };
        this._colors = props.colors;

        this._handleChange = this._handleChange.bind(this);
    }

    componentWillMount(){
        document.querySelector('body').style = 'background:yellow'

    }

    componentDidMount(){
        document.querySelector('body').style = 'background:green'
    }

    _handleChange(event){
        this.setState({
            color:event.target.value
        })
    }

    render (){
        
        return(
            <div>
                <select onChange={this._handleChange}>
                    {this._colors.map((color)=>{
                        return <option value={color}>{color}</option>;
                    })}
                </select>
                <div>{this.state.color}</div>
            </div>
        );
    }
}

ReactDOM.render(<Color colors={['amarillo','rojo']}/>, document.querySelector('#example'));
