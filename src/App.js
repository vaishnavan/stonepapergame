import React from 'react';
import ResultInfo from "./ResultInfo";
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 10,
      ran: "",
      id: "",
      temp: Math.floor(Math.random() * 3 + 1),
      userPoint: 0,
      pcPoint: 0,
      roundLimit: 10,
      roundWinner: ""
    };

    this.choice = this.choice.bind(this);
    this.lottery = this.lottery.bind(this);
  }


  choice = event => {
    this.setState({
      id: event.target.id
    });
  };

  lottery = event => {
    const id = event.target.id;
    const temp = Math.floor(Math.random() * 3 + 1);
    let ran,
      roundWinner,
      userPoint = this.state.userPoint,
      pcPoint = this.state.pcPoint;

    if (temp === 1) ran = "paper";

    if (temp === 2) ran = "stone";

    if (temp === 3) ran = "scissors";

    if (
      (id === "paper" && ran === "stone") ||
      (id === "stone" && ran === "scissors") ||
      (id === "scissors" && ran === "paper")
    ) {
      userPoint += 1;
      roundWinner = "User";
    } else if (id === ran) {
      roundWinner = "Draw";
    } else {
      pcPoint += 1;
      roundWinner = "PC";
    }

    if(userPoint > 10 || pcPoint > 10 || userPoint === 10 ){
      roundWinner="user win Game Over"
      userPoint = 0;
      pcPoint = 0;
      ran="";
      
    }else if(userPoint > 10 || pcPoint > 10 || pcPoint === 10 ){
      roundWinner="PC win Game Over"
      userPoint = 0;
      pcPoint = 0;
      ran="";
    }

    this.setState(prevState => ({
      ...prevState,
      id,
      temp,
      userPoint,
      pcPoint,
      roundWinner,
      ran
    }));
  };

    render(){
      return(
        <div className="main_head">
          <div className="points_table">
                <div className="points">
                    <h4>User</h4>
                    <p>{`${this.state.userPoint}`}</p>
                </div>
                <div className="points">
                    <h4>Robot</h4>
                    <p>{`${this.state.pcPoint}`}</p>
                </div>
          </div>
          <div className="game_control">
            <div className="game_img">
              <img src="image/paper.png" onClick={this.lottery} alt="paper" id="paper" />
            </div>
            <div className="game_img">
              <img src="image/stone.png" onClick={this.lottery} alt="stone" id="stone" />
            </div>
            <div className="game_img">
              <img src="image/scissor.png" onClick={this.lottery} alt="scissors" id="scissors" />
            </div>
          </div>
          <ResultInfo
            id={this.state.id}
            ran={this.state.ran}
            roundWinner={this.state.roundWinner}
          />
        </div>
      )
    }
}

export default App;
