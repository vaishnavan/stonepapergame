import React from 'react';
import './result.css';

class ResultInfo extends React.Component {


  render(props) {
    return (
      <>
       
       <div className="main_result_container">
            <div className="result_img">
                <div className="info">Your choice: {`${this.props.id}`}</div>
                {this.props.id === 'paper' && <img src="image/paper.png" alt="paper" />}
                {this.props.id === 'stone' && <img src="image/stone.png" alt="stone" />}
                {this.props.id === 'scissors' && <img src="image/scissor.png" alt="scissors" />}
            </div>
            <div className="result_img">
                <div className="info">Computer choice: {`${this.props.ran}`}</div>
                {this.props.ran === 'paper' && <img src="image/paper.png" alt="paper" />}
                {this.props.ran === 'stone' && <img src="image/stone.png" alt="stone" />}
                {this.props.ran === 'scissors' && <img src="image/scissor.png" alt="scissors" />}
            </div>
            <div className="result_img">
                <div className="info">Round winner: {`${this.props.roundWinner}`}</div>
                {this.props.roundWinner === 'User' && <img src="https://www.pngitem.com/pimgs/m/375-3757223_free-icon-download-people-avatar-icon-transparent-background.png" alt="paper" />}
                {this.props.roundWinner === 'PC' && <img src="http://whitesbelfast.com/wp-content/uploads/2020/01/printable-coloring-pages-robots-from-future-robots-coloring.jpg" alt="stone" />}
                {this.props.roundWinner === 'Draw' && <img src="https://pngimage.net/wp-content/uploads/2018/06/signe-%C3%A9gal-png-4.png" alt="scissors" />}
                {this.props.roundWinner === 'user win Game Over' && <img src="https://pngimg.com/uploads/game_over/game_over_PNG56.png" alt="no" />}
                {this.props.roundWinner === 'PC win Game Over' && <img src="https://pngimg.com/uploads/game_over/game_over_PNG56.png" alt="no" />} 
            </div>
       </div>
        <div></div>
        <div></div>
      </>
    );
  }
}
export default ResultInfo;