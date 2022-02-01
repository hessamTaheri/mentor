import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";
import { Spin } from "antd";

const columns = [
  { title: "key", dataIndex: "id", key: "key" },
  { title: "Email", dataIndex: "email", key: "email" },
  { title: "Phone", dataIndex: "phone", key: "phone" },
  { title: "Address", dataIndex: "address", key: "address" },
  { title: "description", dataIndex: "website", key: "description" },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: () => <a>delete</a>,
  },
];

const data = [
  {
    key: 1,
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    description:
      "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
  },
  {
    key: 2,
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    description:
      "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.",
  },
  {
    key: 3,
    name: "Not Expandable",
    age: 29,
    address: "Jiangsu No. 1 Lake Park",
    description: "This not expandable",
  },
  {
    key: 4,
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    description:
      "My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.",
  },
];

const Request = () => {
  const [mentees, setMentees] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setMentees(data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // for make string from address

  //   for(const property of mentees){
  //     const hi = property.address
  //    const addressstring = JSON.stringify(hi)
  //    console.log(addressstring)
  //   }

  return (
    <div align="center">
      <h1>YOUR REQUESTS:</h1>
      <div>
        {error && <div>{error}</div>}
        {loading && (
          <div>
            <Spin size="large" />
          </div>
        )}
        {/* {mentees &&
          mentees.map((mentee) => (
            <Link to={`/request/${mentee.id}`}>{mentee.id}</Link>
          ))} */}
        <Table
          columns={columns}
          expandable={{
            expandedRowRender: (record) => (
              <p style={{ margin: 0 }}>{record.message}</p>
            ),
            rowExpandable: (record) => record.name !== "Not Expandable",
          }}
          dataSource={mentees}
        />
      </div>
    </div>
  );
};
export default Request;
