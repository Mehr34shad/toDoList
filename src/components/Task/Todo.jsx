import React, { Fragment } from "react";

const Todo = ({ text, isCompleted, deleted, completed }) => {
    return (
        <Fragment>
            <div
                className={`todo-indicator ${
                    isCompleted ? "bg-success" : "bg-warning"
                }`}
            ></div>
            <div className="widget-content p-0">
                <div className="widget-content-wrapper">
                    <div className="widget-content-right flex1">
                            {isCompleted ?  <div className="widget-heading bg-green"> <del className="animat ">{text}</del> </div> : text}
                    </div>
                    <div className="widget-content-left">
                        {" "}
                        <button
                            className="border-0 btn-transition btn"
                            onClick={completed}
                        >
                            {" "}
                            <i className="fa fa-check"></i>
                        </button>{" "}
                        <button
                            className="border-0 btn-transition btn"
                            onClick={deleted}
                        >
                            {" "}
                            <i className="fa fa-trash"></i>{" "}
                        </button>{" "}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Todo;
