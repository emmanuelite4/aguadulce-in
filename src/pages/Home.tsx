import { Button, Form, Input, List } from "antd";
import { addRoleType, getRoleTypes } from "../libs/contract";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const { useForm } = Form;

export default function Home() {
  const [form] = useForm();
  const [roleTypes, setRoleTypes] = useState<string[]>([]);

  useEffect(() => {
    getRoleTypes().then((res: string[]) => {
      setRoleTypes(res);
    });
  }, []);

  return (
    <div>
      <Form
        layout={"inline"}
        form={form}
        onFinish={() => {
          addRoleType(form.getFieldValue("role"));
        }}
      >
        <Form.Item name={"role"}>
          <Input placeholder={"Enter role"} />
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
            <Link to={"role/" + item}>{item}</Link>
          </List.Item>
        )}
      />
    </div>
  );
}
