import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spin } from "antd";
import { Card } from "antd";

const ShowRequest = () => {
  const { userId } = useParams();

  const [mentee, setMentee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setMentee(data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [userId]);


  // for find one of the object's value
  // for(const property in mentee){
  //   console.log(`${mentee[property]}`)
  // }

  return (
    <div align="center">
      <div>
        {error && <div>{error}</div>}
        {loading && <Spin size="large" />}
        {mentee && (
          <div>
            <Card
              title={<h1>YOUR number {userId} REQUEST:</h1>}
              extra={<a href={`/request/${userId}`}>call</a>}
              style={{ width: 500 }}
            >
              <p>{mentee.name}</p>
              <p>{mentee.email}</p>
              <p>{mentee.address.city}</p>
              <p>{mentee.phone}</p>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowRequest;
