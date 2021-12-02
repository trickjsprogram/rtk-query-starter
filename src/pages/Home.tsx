import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./Home.css";

const data = [
  {
    name: "Adam Marcus",
    email: "adam123@gmail.com",
    contact: "83673677367635",
    id: 1,
  },
  {
    name: "Tom Cruise",
    email: "tom@gmail.com",
    contact: "83786646476",
    id: 2,
  },
  {
    name: "James Bond",
    email: "james@gmail.com",
    contact: "9484785787",
    id: 3,
  },
];

const Home = () => {
  const handleDelete = async (id: any) => {
    if (window.confirm("Are you sure that you wanted to delete that user ?")) {
      toast.success("Contact Deleted Successfully");
    }
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <h2>Redux Toolkit RTK Query CRUD with React and JSON Server </h2>
      <Link to="/add">
        <button className="btn btn-add">Add Contact</button>
      </Link>
      <br />
      <br />
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>ID</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Email</th>
            <th style={{ textAlign: "center" }}>Contact</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item: any, index: any) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.contact}</td>
                  <td>
                    <Link to={`/update/${item.id}`}>
                      <button className="btn btn-edit">Edit</button>
                    </Link>
                    <button
                      className="btn btn-delete"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                    <Link to={`/view/${item.id}`}>
                      <button className="btn btn-view">View</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
