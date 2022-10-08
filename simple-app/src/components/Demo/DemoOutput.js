import React from "react";
import MyParagrpgh from "./MyParagraph";

const DemoOutput = (props) => {
  console.log('DemoOutput Runnig!!')
  return <MyParagrpgh>{props.show ? 'This is new' : ''}</MyParagrpgh>
}

export default React.memo(DemoOutput);