import React from 'react';

export default class Users extends React.Component {
    constructor (props){
        super(props); //asigna props a la clase padre (buscar mas info)
        this.state = {
            url: props.api,
            data: {}
        }
    }

    //Será montado
    componentWillMount(){
       this.getData(this.state.url);
    }

    getData = (url) =>{
        fetch(url).then(response => {
            return response.json();
        } ).then(dataInfo => {
            this.setState({
                data:dataInfo
            })
        }).catch(error => {
            console.log('Error: ',error);
        })
    };

    render () {
        return (
            <div>
                <select>
                    {
                        Array.from(this.state.data).map((item,key) => {
                            return <option key={key}>{item.name}</option>
                        })
                    }
                </select>
            </div>
        );
    }

}