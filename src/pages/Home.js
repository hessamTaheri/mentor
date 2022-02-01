import React, { useEffect, useState } from "react";
import { Card, Avatar } from "antd";
import { HeartOutlined, GoogleOutlined } from "@ant-design/icons";

const Home = () => {
  const { Meta } = Card;

  const tabListNoTitle = [
    {
      key: "Info",
      tab: "Info",
    },
    {
      key: "schedule",
      tab: "schedule",
    },
    {
      key: "description",
      tab: "description",
    },
  ];

  const [activeTabKey2, setActiveTabKey2] = useState("Info");

  const onTab2Change = (key) => {
    setActiveTabKey2(key);
  };
  const [mentors, setMentees] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setMentees(data.map(data.name))
        console.log(data.name);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const contentListNoTitle = {
    Info: <p>{mentors}</p>,
    schedule: <p>schedule content</p>,
    description: <p>description content</p>,
  };

  return (
    <>
      <Card
        style={{ width: "100%" }}
        tabList={tabListNoTitle}
        activeTabKey={activeTabKey2}
        tabBarExtraContent={<button>mark</button>}
        onTabChange={(key) => {
          onTab2Change(key);
        }}
      >
        <Meta avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />} />
        {contentListNoTitle[activeTabKey2]}
      </Card>
      <br />
      <br />
      {/* {mentors.map((mentee) => console.log(mentee.id))} */}
    </>
  );
};

export default Home;
