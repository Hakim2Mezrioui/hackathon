import { Fragment, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import {
  faEdit,
  faPlusCircle,
  faTrashAlt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Checkbox from "@material-ui/core/Checkbox";
import { useHttp } from "../useHttp/useHttp";

// import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [usersFiltred, setUsersFiltred] = useState([]);
  const { loading, sendRequest } = useHttp();
  const [searchVal, setSearchVal] = useState("");

  const handleDelete = (id) => {
    console.log(id);
  };

  const handleSearch = (e) => {
    setSearchVal(e.target.value);
    const usersF = users.filter((user) => {
      if (
        user.fullName &&
        user.fullName.toLowerCase().includes(e.target.value.toLowerCase())
      ) {
        return user;
      }
    });

    console.log(usersF);

    setUsersFiltred([...usersF]);
  };

  const applyDate = (data) => {
    setUsers([...data.data]);
  };

  const handleAddNew = () => {};

  useEffect(() => {
    const request = { url: "http://127.0.0.1:8000/api/users" };
    sendRequest(request, applyDate);
  }, []);

  const columns = [
    {
      name: "Full name",
      selector: (row) => row.fullName,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Date of birth",
      selector: (row) => row.dateOfBirth,
      sortable: true,
    },
    {
      cell: (row) => (
        <Fragment>
          <button
            onClick={() => handleDelete(row.id)}
            className="btn btn-danger btn-sm"
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
          &nbsp;
          <button
            onClick={() => {}}
            className="btn btn-warning btn-sm text-white"
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
        </Fragment>
      ),
    },
  ];
  return (
    <Fragment>
      <div className="container px-5">
        <div className="my-5 w-50">
          {/* <label>Search</label> */}
          <span
            className={`searchField`}
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <input
              placeholder="Search..."
              onChange={handleSearch}
              className="form-control me-3"
            />
            <button onClick={handleAddNew} className="btn btn-success">
              <FontAwesomeIcon icon={faPlusCircle} />
            </button>
          </span>
        </div>
        <DataTable
          columns={columns}
          data={
            usersFiltred.length > 0
              ? usersFiltred
              : searchVal.length > 0
              ? []
              : users
          }
          pagination
          sortIcon={<ArrowDownward />}
          selectableRowsComponent={Checkbox}
        />
      </div>
    </Fragment>
  );
};

export default Users;
