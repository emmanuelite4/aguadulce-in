import { Button, Typography } from "antd";
import styles from "./Member.module.css";

const { Text, Title } = Typography;

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
