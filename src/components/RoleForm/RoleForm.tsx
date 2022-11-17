import { Button, Form, Input } from "antd";
import { addRoleType } from "../../libs/contracts";

const { useForm } = Form;

type Props = {
  onSuccess: () => void;
};

export default function RoleForm(props: Props) {
  const { onSuccess } = props;
  const [form] = useForm();

  const handleSubmit = () => {
    addRoleType(form.getFieldValue("role")).then(() => {
      onSuccess();
      form.resetFields();
    });
  };
  return (
    <Form layout={"inline"} form={form} onFinish={handleSubmit}>
      <Form.Item name={"role"}>
        <Input placeholder={"Enter role"} />
      </Form.Item>
      <Form.Item>
        <Button htmlType={"submit"} type={"primary"}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
