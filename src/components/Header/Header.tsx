import styles from "./Header.module.css";
import { Typography } from "antd";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={styles.root}>
      <Typography.Title level={3}>Role Manager</Typography.Title>
      <div className={styles.actions}>
        <Link to={"/members"} data-testid={"member"}>
          Members
        </Link>
        <Link to={"/"} data-testid={"roles"}>
          Roles
        </Link>
      </div>
    </div>
  );
}
