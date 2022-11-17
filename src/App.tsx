import { useEffect, useState } from "react";
import "./App.css";
import { getContractType, initialContract } from "./libs/contract";
import { Button, Form, Input, List, Typography } from "antd";

function App() {
  const [count, setCount] = useState(0);
  const [roleTypes, setRoleTypes] = useState<string[]>([]);

  useEffect(() => {
    initialContract().then(async (res) => {
      const roles = await getContractType();
      setRoleTypes(roles);
    });
  }, []);

  return (
    <div className="App">
      <Form layout={"inline"}>
        <Form.Item>
          <Input placeholder={"Enter role"} name={"role"} />
        </Form.Item>
        <Form.Item>
          <Button htmlType={"submit"}>Submit</Button>
        </Form.Item>
      </Form>
      <List
        bordered
        dataSource={roleTypes}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text mark>{item}</Typography.Text>
          </List.Item>
        )}
      />
    </div>
  );
}

export default App;
