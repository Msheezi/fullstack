import React from 'react'
import { connect } from 'react-redux'


 class Splash extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {

        return  (
        <div className="splash-main">
            <div className="splash-img">
                    <img src="https://mypx-dev.s3-us-west-1.amazonaws.com/bridgesmaller.jpg"/>
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

const mapStateToProps = (state, ownProps) => ({
    history: ownProps.history
})



const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Splash)