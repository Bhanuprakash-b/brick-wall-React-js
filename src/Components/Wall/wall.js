import React from "react";
import './style.css';
import Brick from "../Brick/Brick.js";


class Wall extends React.Component{

constructor(props){
    super(props);
    this.state ={
        bricks: [1,2,3,4]
    };
}
 
addMore =() => {
    const newBricksArray =[ ...this.state.bricks]
    newBricksArray.push(newBricksArray.length+1);
     
    this.setState({
        bricks: newBricksArray
    });

};
//override method
//render returns what is being displayed on the browser
    render=()=>{
        return(
            <div className="wall-container">
                {
                    this.state.bricks.map( (brick)=>{
                        return <Brick key={brick} name ={brick}/>
                    })
                }
                
               
                    
                <button onClick={this.addMore}>ADD MORE</button>
            </div>
        );

    };
}

export default Wall;