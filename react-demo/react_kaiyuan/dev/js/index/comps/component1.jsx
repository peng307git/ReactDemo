/**
 * Created by Administrator on 2016/11/17.
 */
//es6
import React from "react"
class Comp1 extends React.Component{
  //构造函数
  constructor(...args){
    super(...args);
  }
  //覆盖父类的渲染方法
  render() {
    return (
      <div className = "index">
        hello react
      </div>
    );
  }
}
export default Comp1;