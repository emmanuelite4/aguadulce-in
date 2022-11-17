import { Divider, List, Typography } from "antd";
import RoleForm from "../components/RoleForm/RoleForm";
import { useGetRoles } from "../hooks/roles";

export default function Home() {
  const { roles, handleFetchRole } = useGetRoles();

  return (
    <div>
      <List
        dataSource={roles}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text>{item}</Typography.Text>
          </List.Item>
        )}
      />
      <Divider />
      <div>
        <Typography.Title level={5}>Create Role</Typography.Title>
        <RoleForm onSuccess={handleFetchRole} />
      </div>
    </div>
  );
}
