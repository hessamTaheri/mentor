import { Result, Button } from 'antd';
import React from "react";

const NotFound = () => {
  return (  
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button href="/" type="primary">Back Home</Button>}
    />
    )
};

export default NotFound;