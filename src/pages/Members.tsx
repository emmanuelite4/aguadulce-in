import { useEffect, useState } from "react";
import { getMembers } from "../libs/contracts";
import { List } from "antd";
import { Link } from "react-router-dom";

export default function Members() {
  const [members, setMembers] = useState<string[]>([]);

  useEffect(() => {
    getMembers()
      .then((res) => {
        setMembers(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <List
        dataSource={members}
        renderItem={(item) => (
          <List.Item>
            <Link to={"/member/" + item}>{item}</Link>
          </List.Item>
        )}
      />
    </div>
  );
}
