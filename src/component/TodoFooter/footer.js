/**
 * Created by Thinkpad on 2017/7/28.
 */
import React from  'react'
import './footer.scss'
class  TodoFooter  extends React.Component{
    render(){
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox"  />
                </label>
                <span>
                    <span>已经完成0</span>/全部2
                </span>
                <button className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }

}
export  default TodoFooter