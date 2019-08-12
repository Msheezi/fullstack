import React from 'react'

export default class Comments extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchComments()
    }

    render() {
         const coms = this.props.comments.map(comment => (<li>{comment.body}</li>))
        return (
            <ul>
                {coms}
            </ul>
        )

        // let display = this.props.comments.map(comment => (
        //     <li>comment.body</li>
        // ) )

        // return (
        //     <ul>
        //         {display }
        //     </ul>
        // )
      }
    }
