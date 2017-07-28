/**
 * Created by Thinkpad on 2017/7/28.
 */
//头部组件
import React from  'react'
import './header.scss'
class  TodoHeader  extends React.Component{
    render(){
        return (
            <div className="todo-header">
                <input type="text" placeholder="请输入任务名称，按enter结束"/>
            </div>
        )
    }

}
export  default TodoHeader