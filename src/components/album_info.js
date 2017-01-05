import React from 'react';

export default(props) => {
  const imgStyle ={
    height: '100px',
    width: '100px'
  }

  return(
    <div className="panel panel-default">
      <div className="panel-heading">
        <h4 className="panel-title">{props.title} - {props.artist}</h4>
      </div>
      <div className="panel-body">
        <img src={props.image} style={imgStyle}/>
      </div>
    </div>
  )
}
