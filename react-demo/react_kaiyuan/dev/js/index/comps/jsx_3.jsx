import React from 'react';

class Jsx_3 extends React.Component{
     constructor (props){   /*构造函数*/
        super (props);
        this.state = { date : new Date() };
    }
    componentDidMount () { //组件渲染完成后调用对方法
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount () { //组件使用完成后，这个方法调用，用了清理这个实例自身
        clearInterval(this.timerID);
    }
    tick() { //使用父类React.Component的setState()方法更新state
        this.setState({
            date:new Date()
        });
    }
    render(){
         return (
           <div>
               <h1>hello1111111</h1>
               <h2>{ this.state.date.toLocaleTimeString() }</h2>
           </div>
         );
    }
}
export default Jsx_3;