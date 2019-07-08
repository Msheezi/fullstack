import { connect } from 'react-redux'
import Splash from './splash'


const mapStateToProps = (state, ownProps) => ({
    history: ownProps.history
})



const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Splash)