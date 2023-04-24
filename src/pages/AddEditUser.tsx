import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./AddEditUser.css";

const initialState = {
  name: "",
  email: "",
  contact: "",
};

const AddEditUser = () => {
  const [formValue, setFormValue] = useState(initialState);
  const [editMode, setEditMode] = useState(false);
  const { name, email, contact } = formValue;
  const navigate = useNavigate();
  const { id } = useParams();
  
  const {data,error, isFetching, isLoading } = useContactQuery(id!);
  
  useEffect(() => {
    if(error) {
      toast.error("Something went Wrog")
    }
  }, [error]);

  useEffect(() => {
    if (id) {
      setEditMode(true);
    } else {
      setEditMode(false);
    }
  }, [id]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!name && !email && !contact) {
      toast.error("Please provide value into each input field");
    } else {
      if (!editMode) {
        navigate("/");
        toast.success("Contact Added Successfully");
      } else {
        navigate("/");
        setEditMode(false);
        toast.success("Contact Updated Successfully");
      }
    }
  };

  const handleInputChange = (e: any) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name..."
          value={name || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Your Email..."
          value={email || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="contact">Contact</label>
        <input
          type="text"
          id="contact"
          name="contact"
          placeholder="Your Contact No. ..."
          value={contact || ""}
          onChange={handleInputChange}
        />

        <input type="submit" value={id ? "Update" : "Save"} />
      </form>
    </div>
  );
};

export default AddEditUser;
