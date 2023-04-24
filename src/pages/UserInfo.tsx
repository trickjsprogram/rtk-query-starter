import {useEffect} from 'react';
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./UserInfo.css";

const UserInfo = () => {
  const { id } = useParams();
  const {data,error, isFetching, isLoading} = useContactQuery(id!);
  return (
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-header">
          <p>User Contact Detail</p>
        </div>
        <div className="container">
          <strong>ID: </strong>
          <span>1</span>
          <br />
          <br />
          <strong>Name: </strong>
          <span>Test</span>
          <br />
          <br />
          <strong>Email: </strong>
          <span>test@gmail.com</span>
          <br />
          <br />
          <strong>Contact: </strong>
          <span>775675673</span>
          <br />
          <br />
          <Link to="/">
            <button className="btn btn-edit">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
