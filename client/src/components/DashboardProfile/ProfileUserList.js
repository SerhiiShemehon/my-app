import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { AuthContext } from '../../context/auth';

import * as Constants from '../../constants';
import { Input } from '../Form';

function ProfileUserList() {
    const [users, setUsers] = useState([]);
    const [filterUsers, setFilterUsers] = useState([]);
    const { user } = useContext(AuthContext);
    const fetchData = async () => {
        try {
            const res = await axios(Constants.URL_LIST);
            const data = await res.data;
            const allUsers = data.filter((item) => item._id !== user._id);
            setUsers(allUsers);
            setFilterUsers(allUsers);
            console.log(allUsers);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleChange = (e) => {
        const val = e.target.value;
        if (val.length) {
            const newUsers = users.filter((item) =>
                item.fullName.includes(val)
            );
            setFilterUsers(newUsers);
        } else {
            setFilterUsers(users);
        }
    };

    const columns = [
        {
            name: 'ID',
            selector: (row) => row._id,
        },
        {
            name: 'Full Name',
            selector: (row) => row.fullName,
        },
        {
            name: 'Email',
            selector: (row) => row.email,
        },
    ];

    return (
        <>
            <Input
                onChange={handleChange}
                type="search"
                placeholder="Search"
                name="search"
                className="user-search"
            />
            <DataTable columns={columns} data={filterUsers} />
        </>
    );
}

export default ProfileUserList;
