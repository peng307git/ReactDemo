/**
 * Created by qiangxl on 2017/4/12.
 */
/**
 * Created by chkui on 2016/11/17.
 */

//jsx
/*
 var React = require('react');
 var ReactDOM = require('react-dom');
 var Comp1 = require('./component1.jsx');
 require('../../../style/index/index.css');

 ReactDOM.render(
 <div className="main">
 react jsx demo:
 <Comp1 />
 </div>,
 document.getElementById('comp')
 );
 */

//es2015
import React from 'react';
import ReactDOM from 'react-dom';
import Comp1 from './jsx_3.jsx' /*切记，大写是变量小写是标签*/
import style from '../../../style/index/index.css'
const num = [1,2,3,4,5,5,5,9,11];
const List = num.map( (num) =>
    <li> {num} </li>
);
    ReactDOM.render(
        <ul> { List } </ul>,
        document.getElementById('comp')
    );