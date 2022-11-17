import styles from "./Header.module.css";
import { Typography } from "antd";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={styles.root}>
      <Typography.Title level={3}>Role Manager</Typography.Title>
      <div className={styles.actions}>
        <Link to={"/members"}>Members</Link>
        <Link to={"/"}>Roles</Link>
      </div>
    </div>
  );
}
