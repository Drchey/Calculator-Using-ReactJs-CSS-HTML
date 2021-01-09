import React from "react";
import "./clear.css";

const Clear = props => (<div className ="clear" onClick={props.handleClear}>{props.children}</div>);
export default Clear;  

