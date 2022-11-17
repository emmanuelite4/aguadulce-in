import { useParams } from "react-router-dom";
import { Button, Typography } from "antd";
import { useEffect, useState } from "react";
import { changeRoleStatus, getMemberRoles } from "../libs/contract";

const { Text } = Typography;

export default function Member() {
  const { id } = useParams();
  const [role, setRole] = useState<{
    activationTime: string;
    isActive: boolean;
    roleType: string;
  }>();

  const handleRoleChange = async () => {
    if (!id) return;
    changeRoleStatus(id, !role?.isActive).then(() => {
      handleGetRoleDetails(id);
    });
  };

  const handleGetRoleDetails = (id: string) => {
    getMemberRoles(id)
      .then((res) => {
        const { activationTime, isActive, roleType } = res;
        setRole({ activationTime, isActive, roleType });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (id) {
      handleGetRoleDetails(id);
    }
  }, [id]);
  return (
    <div>
      <div>
        <Text>
          <strong>Account Address:</strong>
          {id}
        </Text>
      </div>
      <div>
        <Text>
          <strong>Role:</strong> {role?.roleType || "No role yet"}
        </Text>
        <br />
        <Text>
          <strong>Is Active:</strong> {role?.isActive.toString()}
        </Text>
        <Button
          size={"small"}
          style={{ marginLeft: 20 }}
          danger={role?.isActive}
          onClick={handleRoleChange}
        >
          {role?.isActive ? "Disabled" : "Enabled"}
        </Button>
      </div>
    </div>
  );
}
