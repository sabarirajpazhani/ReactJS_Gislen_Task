import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import UserForm from './UserForm';
import type { User } from './UserForm';
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import { MdRestore } from 'react-icons/md';

const UserList = () => {
    const[users, setUsers]=useState<User[]>([]).sort();
    const[editingUser, setEditingUsers] = useState<User | null>(null);
    const[deletedUser, setDeletedUser] = useState<User[]>([]);

    const handleSubmit=(user:User)=>{
        if(editingUser){
            setUsers(users.map((u)=>u.id == user.id ? user : u));
        }
        else{
            setUsers([...users, user]);
        }
    }


    const deletedUsers =(user:User)=>{
        const deletedID = user.id;
        setDeletedUser([...deletedUser,user]);
        setUsers(users.filter((user)=>user.id!=deletedID));
    }


    const restoreUser = (user:User)=>{
        const restoreID = user.id;
        setDeletedUser(deletedUser.filter((user)=>user.id!=restoreID));
        setUsers([...users,user]);
    }

    return (

        <>
        <UserForm 
            handleSubmit={handleSubmit}
            editingUser = {editingUser}
            users={users}
        />
        <div className='border bg-[rgb(247_232_231)] border-dark border-2 rounded-3 w-50'>
        <h1 className='text-center mt-3 text-3xl'>Users Data</h1>

        <div className='p-2'>
            <Table striped className='border border-dark border-1' bordered hover>
            <thead>
                <tr>
                <th>ID</th>
                <th>User Name</th>
                <th>User Email</th>
                <th className='text-center'>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user,index)=>(
                    <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <div className='text-center '>
                            <button className='text-green-800 text-2xl mr-3' onClick={()=>setEditingUsers(user)}><FaEdit/></button>
                            <button className='text-red-500 text-2xl' onClick={()=>deletedUsers(user)}><FaTrash/></button>

                        </div>
                    </td>
                    </tr>
                ))}
            </tbody>
            </Table>
        </div>

        {/* Deleted Users */}
        <h1 className='text-center mt-3 text-3xl'>Deleted Users</h1>

        <div className='p-2'>
            <Table striped className='border border-dark border-1' bordered hover>
            <thead>
                <tr>
                <th>ID</th>
                <th>User Name</th>
                <th>User Email</th>
                <th className='text-center'>Action</th>
                </tr>
            </thead>
            <tbody>
                {deletedUser.map((user,index)=>(
                    <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <div className='text-center '>
                            <button className='text-green-800 text-2xl mr-3' title='Restore User' onClick={()=>restoreUser(user)}><MdRestore/></button>
                        </div>
                    </td>
                    </tr>
                ))}
            </tbody>
            </Table>
        </div>
        </div>
        </>
    )
}

export default UserList
