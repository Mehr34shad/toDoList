import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from "uuid";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: uuidv4(),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='ویرایش کار'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            ویرایش
          </button>
        </>
      ) : (
        <div id='inp'>
          <input
            placeholder='کار جدید'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          >
            
          </input>
          {/* <button onClick={handleSubmit} className='todo-button'> */}
            <i onClick={handleSubmit} className='todo-button' class="fa fa-plus" aria-hidden="true"></i>
          {/* </button> */}
        </div>
      )}
    </form>
  );
}

export default TodoForm;
