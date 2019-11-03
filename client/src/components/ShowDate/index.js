import React from "react";

function ShowDate(props) {

  function getText() {
    let para = document.getElementById('test');
    let get = para.className;
    para.innerHTML = get;
  }

  return (
      <div id='test' className={props.testDate} onClick={getText}>
        {JSON.stringify(props.testDate)}
      </div>
  );
  
}

export default ShowDate;
