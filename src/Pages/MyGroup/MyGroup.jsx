import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../assets/Contexts/Context';

const MyGroup = () => {

    const {user} = useContext(AuthContext)
    const allGroups = useLoaderData()

    const userGroupColletion = Array.isArray(user?.groupCollection)
    ? user.groupCollection
    : [];

    const userGroup = []
    for(let i of userGroupColletion){
        for(let j of allGroups){
            if(i === j._id){
                userGroup.push(j)
            }
        }
    }

    console.log(userGroup);

    return (
        <div>
            <h2>I am my group</h2>
        </div>
    );
};

export default MyGroup;