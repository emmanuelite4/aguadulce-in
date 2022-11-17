import { Button, Form, Select, Typography } from "antd";
import styles from "./Member.module.css";
import { addRoleToUser } from "../../libs/contracts";

const { Text, Title } = Typography;
const { useForm } = Form;

type MemberAccountInfoProps = {
  address: string;
};

export function MemberAccountInfo(props: MemberAccountInfoProps) {
  const { address } = props;

  return (
    <div className={styles.account_info}>
      <Title level={3}>{address}</Title>
      <Text>Account Address</Text>
    </div>
  );
}

type MemberRoleProps = {
  roleType?: string;
  isActive: boolean;
  onChangeStatus: () => void;
};

export function MemberRole(props: MemberRoleProps) {
  const { roleType, isActive, onChangeStatus } = props;

  if (!roleType)
    return (
      <Typography.Text type={"danger"}>
        No role attached to user
      </Typography.Text>
    );

  return (
    <div className={styles.member_role}>
      <Text>
        Role: <strong>{roleType || "No role yet"}</strong>
      </Text>
      <br />
      <Text>
        <strong>Is Active:</strong> {isActive.toString()}
      </Text>
      <Button
        size={"small"}
        style={{ marginLeft: 20 }}
        danger={isActive}
        onClick={onChangeStatus}
      >
        {isActive ? "Disabled" : "Enabled"}
      </Button>
    </div>
  );
}

type AddRoleFormProps = {
  roles: string[];
  onSuccess: () => void;
  address: string;
};

export function AddRoleForm({ roles, onSuccess, address }: AddRoleFormProps) {
  const [form] = useForm();
  const handleAddRole = () => {
    const id = form.getFieldValue("role");
    addRoleToUser(address, id).then(() => {
      onSuccess();
    });
  };
  return (
    <div>
      <Title level={3}>Add role to user</Title>

      <Form form={form} layout={"inline"} onFinish={handleAddRole}>
        <Form.Item name={"role"}>
          <Select
            options={roles.map((item, index) => ({
              label: item,
              value: index,
            }))}
            placeholder={"Select a role..."}
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType={"submit"} type={"primary"}>
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
