import { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { Helmet } from 'react-helmet';

import * as Constants from '../../../constants';
import './Profile.scss';

function Settings() {
    const [users, setUsers] = useState([]);
    const [updatePage, setUpdatePage] = useState(true);

    const fetchData = async () => {
        try {
            const res = await axios(Constants.URL_LIST);
            const data = await res.data;
            setUsers(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [updatePage]);

    const deleteUser = async (id) => {
        try {
            await axios.delete(`${Constants.URL_USER_BASE}${id}`);
            setUpdatePage(!updatePage);
        } catch (error) {
            console.error(error);
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
        {
            name: 'Delete',
            selector: (row) => (
                <button
                    type="button"
                    style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'red',
                        padding: '0',
                        cursor: 'pointer',
                    }}
                    onClick={() => deleteUser(row._id)}
                >
                    Delete
                </button>
            ),
            width: '100px',
        },
    ];

    return (
        <>
            <Helmet>
                <title>Settings | My App</title>
            </Helmet>
            <h1 className="dashboard-title">Settings</h1>
            <h2 className="dashboard-subtitle">Users</h2>
            <DataTable columns={columns} data={users} />
        </>
    );
}

export default Settings;
