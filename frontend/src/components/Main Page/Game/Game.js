import React from 'react';
import './Game.css';
import triviaphoto from './istockphoto-973102672-170667a.jpg'

class BuildQuizLink extends React.Component {
    render() {
        return (
            <div className="Game">
                <div className="image-container">
                    <img src={triviaphoto} alt='ai photo'/>
                </div>
                <h2>{this.props.game}</h2>
            </div>)
    }
}

export default BuildQuizLink;