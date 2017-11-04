import React, {PropTypes} from 'react'
import Headers from './common/Header'

class App extends React.Component {
    render(){
        return (
            <div className="container-fluid">
                <Headers/>
                {this.props.children}
            </div>
        )
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
}

export default App