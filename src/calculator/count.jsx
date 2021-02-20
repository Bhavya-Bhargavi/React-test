import React from 'react';


class Count extends React.Component{
    constructor(props){
        super(props);
    this.state={    //object
        count: 0
    };
}
//buttonclick =(e) =>{
   // this.setState({                  //object sets the value
      //  count : this.state.count +1
   // }, ()=>{                                    //arrow callback function
   //     console.log(this.state.count);
   // })
    //this.state.count = this.state.count +1;
    //console.log("number");                            //outside setstate function
//}
buttonclick =(e) =>{
     this.setState(prevState =>({
        count:  prevState.count +1
    }))
}
buttonfive(){
    this.buttonclick();
    this.buttonclick();
    this.buttonclick();
}
    render(){
        return(
            <div>
            <button onClick= { () => this.buttonfive()}>Count {this.state.count}</button>
            <p>you entered : {this.state.count} times</p>
            </div>
        );
    }
}
export default Count;