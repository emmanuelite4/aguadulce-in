import { useEffect, useState } from "react";
import { getMembers } from "../libs/contract";
import { List, Typography } from "antd";

export default function Members() {
  const [members, setMemebers] = useState<string[]>([]);

  useEffect(() => {
    getMembers()
      .then((res) => {
        console.log(res);
        setMemebers(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <List
        dataSource={members}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text>{item}</Typography.Text>
          </List.Item>
        )}
      />
    </div>
  );
}
