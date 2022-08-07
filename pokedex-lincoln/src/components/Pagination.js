import React from "react";

const Pagination = (props) =>{


const {page, totalPages, onLeftClick, onRightClick} = props


return(<div className="pagination-container">

        <button onClick={onLeftClick} className='button-left'><div>⬅️</div></button>
        <div className="div-pagination"> {page} de {totalPages}</div>
        <button onClick={onRightClick} className='button-right'><div>➡️</div></button>
</div>)




}

export default Pagination