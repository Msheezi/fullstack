

import React from 'react'


export default class Splash extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {

        return  (
        <div className="splash-main">
            <div className="splash-img">
               <img src="./assets/bridgesmaller.jpg"/>
            </div>
            <div className="splash-txt">
                <h3>The global network for photographers</h3>
                <br/>
                <h1> Discover and share the world's best photos</h1>
                <p>Get inspired with incredible photos from diverse styles and genres 
                from around the world. <br/>
                We're not guided by fads - just great photography.
                </p>

                <button className="splash-button" onClick={() => this.props.history.push("/signup")}>Sign Up</button>
            </div>
        </div>


        )
        
    }

}