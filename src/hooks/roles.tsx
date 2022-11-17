import { getRoleTypes } from "../libs/contract";
import { useEffect, useState } from "react";

export const useGetRoles = () => {
  const [roleTypes, setRoleTypes] = useState<string[]>([]);

  const handleFetchRole = () => {
    getRoleTypes().then((res: string[]) => {
      setRoleTypes(res);
    });
  };

  useEffect(() => {
    handleFetchRole();
  }, []);

  return { roles: roleTypes, handleFetchRole };
};
