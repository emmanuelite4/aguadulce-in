import { Divider, List, Typography } from "antd";
import { getRoleTypes } from "../libs/contract";
import { useEffect, useState } from "react";
import RoleForm from "../components/RoleForm/RoleForm";

export default function Home() {
  const [roleTypes, setRoleTypes] = useState<string[]>([]);

  const handleFetchRole = () => {
    getRoleTypes().then((res: string[]) => {
      setRoleTypes(res);
    });
  };

  useEffect(() => {
    handleFetchRole();
  }, []);

  return (
    <div>
      <List
        dataSource={roleTypes}
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
