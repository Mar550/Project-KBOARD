import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router';
import Sidebar from './components/Sidebar/Sidebar';

const Protected = (props) => {
    let Cmp=props.Cmp
    const history = useHistory();
    useEffect(() => {
        if(!localStorage.getItem('user-info')) {
            history.push("/register")
            {/* push to you are not logged */}
        }
    }, [])
    return (
        <div>
            <Cmp/>
        </div>
    )
}
export default Protected;