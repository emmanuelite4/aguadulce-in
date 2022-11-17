import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { changeRoleStatus, getMemberRoles } from "../libs/contract";
import { MemberAccountInfo, MemberRole } from "../components/Member/Member";
import { Role } from "../types/role";
import { Typography } from "antd";

export default function Member() {
  const { id } = useParams();
  const [role, setRole] = useState<Role>();

  const handleRoleChange = async () => {
    if (!id) return;
    changeRoleStatus(id, !role?.isActive).then(() => {
      handleGetRoleDetails(id);
    });
  };

  const handleGetRoleDetails = (id: string) => {
    getMemberRoles(id)
      .then((res) => {
        const { isActive, roleType } = res;
        setRole({ isActive, roleType });
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
      <MemberAccountInfo address={id!} />
      <br />
      {role?.roleType ? (
        <MemberRole
          roleType={role.roleType}
          isActive={role.isActive}
          onChangeStatus={handleRoleChange}
        />
      ) : (
        <Typography.Text type={"danger"}>
          No role attached to user
        </Typography.Text>
      )}
    </div>
  );
}
