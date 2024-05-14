import React, { useState } from 'react';

function TodoRow(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li className="list-item" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {isHovered && (
        <input type="radio" name="" id="" className='checkbox' />
      )}
      <span className='item-name'>
      {props.item}
      </span>
      <div className='icons'>
        <i className="fa-solid fa-xmark icon-delete" 
          onClick={e => {
            props.deleteItem(props.index);
          }}
        ></i>
      </div> 
    </li>
  );
}

export default TodoRow;