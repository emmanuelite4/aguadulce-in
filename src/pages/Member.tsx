import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { changeRoleStatus, getMemberRoles } from "../libs/contracts";
import {
  AddRoleForm,
  MemberAccountInfo,
  MemberRole,
} from "../components/Member/Member";
import { Role } from "../types/role";
import { useGetRoles } from "../hooks/roles";
import { Divider } from "antd";

export default function Member() {
  const { id } = useParams();
  const [role, setRole] = useState<Role>();
  const { roles } = useGetRoles();

  const handleRoleChange = async () => {
    if (!id) return;
    changeRoleStatus(id, !role?.isActive).then(() => {
      handleGetRoleDetails();
    });
  };

  const handleGetRoleDetails = () => {
    if (!id) return;
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
    handleGetRoleDetails();
  }, [id]);

  return (
    <div>
      <MemberAccountInfo address={id!} />
      <br />

      <MemberRole
        roleType={role?.roleType}
        isActive={!!role?.isActive}
        onChangeStatus={handleRoleChange}
      />

      <Divider />

      {id && (
        <AddRoleForm
          roles={roles}
          onSuccess={handleGetRoleDetails}
          address={id!}
        />
      )}
    </div>
  );
}
