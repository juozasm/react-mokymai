import React, { PureComponent } from 'react'

export function Name(props) {
    console.log('rendered')
const div = <span>abc</span> 
return div
}

export default class Text extends PureComponent {
    componentDidMount(){
        console.log('tekstas mounted')
    }
    componentDidUpdate(){
        console.log('tekstas updated')
    }
    componentWillUnmount(){
        console.log('tekstas unmounting')
    }

    // shouldComponentUpdate(nextProps){
    //     // {} !== {} Json formate stringas
    //     return JSON.stringify(nextProps) !== JSON.stringify(this.props)
    // }

    render() {
        return (
            <p className={this.props.className}>Tekstas {this.props.children} </p>
        )
    }
}

