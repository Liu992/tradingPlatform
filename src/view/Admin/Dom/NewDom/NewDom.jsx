import React, { Component } from 'react';
import './NewDom.scss';

class NewDom extends Component {
  render() {
    return (
      <div className="newdom">
        <div className="newdom-from">
          <h2>英文标题</h2>
          <input type="text"/>
          <h2>英文描述</h2>
          <textarea name="" id="" cols="30" rows="2"></textarea>
          <h2>英文关键字</h2>
          <textarea name="" id="" cols="30" rows="2"></textarea>
          <h2>英文内容</h2>
          <div className="btn">
            <a href="javascript:;"><i></i><span>Normal text</span><b></b></a>
            <a href="javascript:;">
              <b>Bold</b><i>Italic</i><u>Underline</u>
            </a>
            <br/>
            <a href="#">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </a>
            <a href="#">
              <i></i>
            </a>
            <a href="#">
              <i></i>
            </a>
          </div>
          <textarea className="write" name="" id="" cols="30" rows="12"></textarea>

          <h2>中文标题</h2>
          <input type="text"/>
          <h2>中文描述</h2>
          <textarea name="" id="" cols="30" rows="2"></textarea>
          <h2>中文关键字</h2>
          <textarea name="" id="" cols="30" rows="2"></textarea>
          <h2>中文内容</h2>
          <div className="btn">
            <a href="javascript:;"><i></i><span>Normal text</span><b></b></a>
            <a href="javascript:;">
              <b>Bold</b><i>Italic</i><u>Underline</u>
            </a>
            <br/>
            <a href="#">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </a>
            <a href="#">
              <i></i>
            </a>
            <a href="#">
              <i></i>
            </a>
          </div>
          <textarea className="write" name="" id="" cols="30" rows="12"></textarea>


          <h2>Ko title</h2>
          <input type="text"/>
          <h2>Ko desc</h2>
          <textarea name="" id="" cols="30" rows="2"></textarea>
          <h2>Ko keywords</h2>
          <textarea name="" id="" cols="30" rows="2"></textarea>
          <h2>Ko body</h2>
          <div className="btn">
            <a href="javascript:;"><i></i><span>Normal text</span><b></b></a>
            <a href="javascript:;">
              <b>Bold</b><i>Italic</i><u>Underline</u>
            </a>
            <br/>
            <a href="#">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </a>
            <a href="#">
              <i></i>
            </a>
            <a href="#">
              <i></i>
            </a>
          </div>
          <textarea className="write" name="" id="" cols="30" rows="12"></textarea>
          <h2>索引键</h2>
          <input type="text" placeholder="文章连接URL键值"/>
          <h2>是否登陆查阅</h2>
          <div className="setup">
            <input type="checkbox"/>
            <button>创建文档</button>
          </div>
        </div>
      </div>
    )
  }
}

export default NewDom