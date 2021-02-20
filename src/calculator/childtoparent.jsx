import React from 'react';

 class Childtoparent extends React.Component{
    state={

    }
     getdata=(name,age)=>{
         this.setState({
            age : age,
            name:name
         })
console.log(name,age);
     }
     render(){
         return(
             <div className="send-data">
            <Child onChange={this.getdata}/>
            <p>age:{this.state.age}</p>
            <p>name:{this.state.name}</p>
            <SubChild name ={this.state.name} age={this.state.age}/>
             </div>
           
         )
        
     }

}


class Child extends React.Component{
    state={
        age : 10,
        name : 'bhavya'
    }

    onClicklistener =()=>{
        this.props.onChange(this.state.name,this.state.age)
    }
    render(){
        return(
           <div>
               
               <p>hi </p>
               <button onClick={this.onClicklistener}>Send Data</button>
           </div>
        )
       
    }
}

class SubChild extends React.Component{
    
    render(){
        return(
           <div>
              subchild:
              <p>name: {this.props.name}</p>
              <p>age: {this.props.age}</p>
           </div>
        )
       
    }
}

export default Childtoparent;