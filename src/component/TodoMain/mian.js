/**
 * Created by Thinkpad on 2017/7/28.
 */
//主体组件
import React from  'react'
import './main.scss'
class  TodoMain  extends React.Component{
    render(){
        return (
            <ul className="todo-main">
                <li>
                    <label>
                        <input type="checkbox"/>
                        <span>XXXXX</span>
                    </label>
                    <button className="btn btn-danger" style={{display:'none'}}>删除</button>
                </li>
                <li>
                    <label>
                        <input type="checkbox"/>
                        <span>YYYY</span>
                    </label>
                    <button className="btn btn-danger" style={{display:'none'}}>删除</button>
                </li>
            </ul>

        )
    }

}
export  default TodoMain