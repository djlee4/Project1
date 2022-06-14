import React from 'react'
import { IInfo } from "../Interfaces";

interface Props {
    list: IInfo;
    completeList(fullNameToDelete: string): void;
}

const InfoList = ({ list, completeList }: Props) => {
    return <div className="list">
        <div className="content">
            <span>{list.fullName}</span>
            <span>{list.email}</span>
            <span>{list.phoneNumber}</span>
        </div>
        <div>
            <button className="btn1" type="button" onClick={() => { completeList(list.fullName) }}>Delete</button>
        </div>
    </div>
};

export default InfoList