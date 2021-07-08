import React from 'react';

interface Props {
    name: String
}

interface State {
    name: String,
    age: number,
    address: {
        mobile: string
    }
}

class ClassComponent extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        console.log('constructor call');
        this.state = {
            name: 'Joy',
            age: 15,
            address: {
                mobile: '0904123123'
            }
        }
    }

    componentDidUpdate() {
        console.log('component did update')
    }

    componentWillUnmount() {
        console.log('will unmount');
    }

    componentWillMount() {
        console.log('component Will mount')
    }

    componentDidMount() {
        console.log('componennt did mount');
    }

    updateMobile = () => {
        // const { name, age, address: { mobile } } = this.state;

        var newState = this.state;
        newState.address.mobile = '9999999';

        this.setState(newState);

        // this.setState(
        //     (s) => ({
        //         ...s,
        //         age: age + 1
        //     })
        // )
    }
    
    render() {
        return (
            <div className="App">
                Hello <b>{this.state.name}</b>
                <br/>
                age: <b>{this.state.age}</b>
                <div>
                    Mobile: <b>{this.state.address.mobile}</b>
                </div>

                <button
                    onClick={this.updateMobile}
                >UPdate mobile</button>
            </div>
        )
    }

}

export default ClassComponent
