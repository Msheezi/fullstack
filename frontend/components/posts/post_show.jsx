import React from 'react'


export default class PostShow extends React.Component {
    constructor(props){
        super(props)
    }


    componentDidMount(){
        this.props.fetchPost(props.match.params.id)
    }

    render(){


    }

}