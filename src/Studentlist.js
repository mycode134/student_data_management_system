import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import  Pagination   from "./pagination";
import { useAuth } from "./Auth/User";
import './App.css';


let URL = "https://student-data-management-system-backend.onrender.com";
function Studentlist() {
  const [data, setDate] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    fetch(URL, { method: "GET" })
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        console.log(resp);
        setDate(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //Delete Funtionality

  const deleteData = (id) => {
    fetch("https://student-data-management-system-backend.onrender.com/" + id, { method: "DELETE" }).then(
      () => {
        window.location.reload();
      }
    );

  };

  //Edit data

  const editData = (id) => {
    navigate("/edit/" + id);
  };

  //filter Recods
  const[value,setValue]=useState("")
  const filterRecord=async (e)=>{
    e.preventDefault()
    return await axios.get(`https://student-data-management-system-backend.onrender.com?q=${value}`)
    .then((res)=>{
      setDate(res.data)
      setValue("")
    })
  }

  const resetData=()=>{
    fetch(URL, { method: "GET" })
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        console.log(resp);
        setDate(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //sort funtion
  let option=['name','email','clas','roll','mobile_number','blood_group','city']
  const[sort,setSort]=useState("")
  const sortRecords=async (e)=>{
    e.preventDefault()
    let value=e.target.value
    setSort(value)
    return await axios.get(`https://student-data-management-system-backend.onrender.com?_sort=${value}&_order=asc`)
    .then((res)=>{
      setDate(res.data)
      setValue("")
    })
  }

  //pagination functionnalkity
const[page,setPage]=useState(1)
const[recods,setRecods]=useState(7)

//find fr & list
let lr=recods*page//last recods
let fr=lr-recods//first recods

let myData=data.slice(fr,lr)

const updatedPaga=(n)=>{
  setPage(n)
}

//user 

const CurrentUser=useAuth()




  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="card-title">
            <h1>Student List</h1>
            <h2>{CurrentUser?.email?.charAt(0)?.toUpperCase() || ''}</h2>  
          </div>
          <form onSubmit={filterRecord}>
          <div className="mb-3">
          <div id="rights">
          <div className="filter">
          <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}  placeholder="Filter Rocord"  className="filterRecord"/>
          <div className="icon">
         <input type="submit"  id="center-search" value="Search" />

         </div>
         </div>
         
          <input type="reset"  id="center-reset" onClick={resetData}/>
          <Link to="/add" className="add-botten">Add</Link>
          <select value={sort} onChange={sortRecords} className="sortRecords">
          <option>--Choose--</option>
            {option.map((p)=>(
              <option>{p}</option>
            ))}
          </select>
          </div>
          </div>
          </form>
          <div className="card-body">
          <div className="table-responsive">
          <table className="table">

              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Class</th>
                  <th scope="col">Roll No</th>
                  <th scope="col">Mobile Number</th>
                  <th scope="col">Blood Group</th>
                  <th scope="col">City</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {myData && myData.map((item) => (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.clas}</td>
                      <td>{item.roll}</td>
                      <td>{item.mobile_number}</td>
                      <td>{item.blood_group}</td>
                      <td>{item.city}</td>
                      <td>
                        <div className="delete-button">
                        <button
                          onClick={() => {
                            deleteData(item.id);
                          }}
                          className="deleteData"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => {
                            editData(item.id);
                          }}
                          className="editData"
                        >
                          Edit
                        </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
              
            </table>
          </div>
                        <div className="Pagination-center">
            <Pagination total={data.length}
                          recods={recods}
                          update={updatedPaga}
              /></div> 
          </div>
        </div>
       
      </div>


    </div>
  );
}

export default Studentlist;
