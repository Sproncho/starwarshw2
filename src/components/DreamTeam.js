import React from 'react';
import {friends} from "../utils/constants";
import Friend from "./Friend";

const DreamTeam = () => {
    return (
        <section className="float-end w-50 row border mx-1 mt-1">
            <h2 className="col-12 text-center">Dream Team</h2>
            {friends.map((f, i) => <Friend key={i} pos={i+1} friend={f}/>)}
        </section>
    );
};

export default DreamTeam;