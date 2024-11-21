import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



function Addstudent() {
    const[id,setId]=useState("")
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[clas,setClas]=useState("")
    const[roll,setRoll]=useState("")
    const[mobile_number,setMobile_number]=useState("")
    const[blood_group,setBlood_group]=useState("")
    const[city,setCity]=useState("")
    const navigate=useNavigate()

    const changeId=(e)=>{
        setId(e.target.value)
    }
    const changeName=(e)=>{
        setName(e.target.value)
    }
    const changeEmail=(e)=>{
        setEmail(e.target.value)
    }
    const changeClas=(e)=>{
        setClas(e.target.value)
    }
    const changeRoll=(e)=>{
        setRoll(e.target.value)
    }
    const changeMobile_number=(e)=>{
        setMobile_number(e.target.value)
    }
    const changeBlood_group=(e)=>{
        setBlood_group(e.target.value)
    }
    const changeCity=(e)=>{
        setCity(e.target.value)
    }
    const sendData=(event)=>{
        event.preventDefault()
        let data={id,name,email,clas,roll,mobile_number,blood_group,city}
        fetch("https://student-data-management-system-backend.onrender.com",{
            method:"POST",
            headers:{'Content-type':"application/json"},
            body:JSON.stringify(data)
        }).then(()=>{
            alert("Posted successfully...!")
            navigate("/")
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div className="container" style={{width:"500px"}}>
            <div className="card">
                <div className="card-titles">
                    <h2 className="text-center">Add Student Data</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={sendData}>
                    <div className="mb-3">
                            <label  className="form-label">ID</label>
                            <input value={id} disabled="disabled" type="number" onChange={changeId} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Student Name</label>
                            <input value={name} type="text" onChange={changeName} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Student Email</label>
                            <input value={email} type="email" onChange={changeEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Student Class</label>
                            <input value={clas} type="text" onChange={changeClas} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Student Roll NO</label>
                            <input value={roll} type="number" onChange={changeRoll} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Student Mobile Number</label>
                            <input value={mobile_number} type="number" onChange={changeMobile_number} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Student Blood Group</label>
                            <input value={blood_group} type="text" onChange={changeBlood_group} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Student City</label>
                            <input value={city} type="text" onChange={changeCity} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="delete-button">
                        <button type="submit" className="add-botten">Add</button>
                        <Link to='/' className="editData">Back</Link>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Addstudent;