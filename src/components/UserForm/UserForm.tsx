import React, { useEffect, useState } from 'react'
import { Button, Form, Toast } from 'react-bootstrap'
import { IoMdWarning } from 'react-icons/io';  

export type User={
    id? : number;
    name : string;
    email : string;
}

type submitProps={
    handleSubmit : (user:User)=>void;
    editingUser : User|null;
    users:User[];
}

const UserForm = ({handleSubmit,editingUser,users}:submitProps) => {

    const[userName, setUserName] = useState("");
    const[userEmail, setUserEmail] = useState("");

    const [toast, setToast] = useState(false);
    const [message, setMessage] = useState("")

    useEffect(()=>{
        if(editingUser){
            setUserName(editingUser.name);
            setUserEmail(editingUser.email)
        }
    },[editingUser]);

    const handlingSubmit = (e:React.FormEvent)=>{
        e.preventDefault();

        console.log(userEmail);
        console.log(userName)

        if(!userName || !userEmail){
            setToast(true);
            setMessage("All Fileds are Required");
            return;
        }
        // let user:User;

        // console.log("lenght: "+users.length)
        // console.log("user: "+users[users.length-1].id)

        const newID = users.length === 0 ? 1 : (users[users.length - 1].id ?? 0) + 1;
        // const newID = users.length==0 ? 1 : users[users.length-1].id 
        
        const user:User = editingUser? {...editingUser, name:userName, email:userEmail} : {id:newID, name:userName, email:userEmail}
        handleSubmit(user);
        setUserName("");
        setUserEmail("");
    };


    return (
        <div className=' border-2 rounded-3 bg-[rgb(233_239_253)] border-black w-50'>
            <h2 className='text-center mt-3 text-3xl'>Registration From</h2>
            <Form onSubmit={handlingSubmit} className='w-60 h-40 my-20 mx-auto '>
                <Form.Group className="mb-3" >
                    <Form.Label>Enter the UserName</Form.Label>
                    <Form.Control  onChange={(e)=>setUserName(e.target.value)} type="text" value={userName} placeholder="Username" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Enter the Email</Form.Label>
                    <Form.Control  type="email" onChange={(e)=>setUserEmail(e.target.value)} value={userEmail} placeholder="example@gmail.com" />
                </Form.Group>

                <div className='w-40 mx-auto text-center'>
                    <Button  variant="primary" type="submit">
                        {editingUser?"Update" : "Register User"}
                    </Button>
                </div>
            </Form>

            <Toast
                show={toast}
                onClose={()=>setToast(false)}
                delay={3000}
                autohide
                className='position-fixed top-0 end-0 m-3 bg-danger text-white shadow'
                >
                <Toast.Header className='bg-danger'>
                    <IoMdWarning className='text-white text-2xl'/>
                    <strong className="me-auto text-white">{message}</strong>
                </Toast.Header>
            </Toast>
        </div>
    )
}

export default UserForm
