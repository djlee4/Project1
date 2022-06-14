import { info } from 'console';
import React, { FC, useState, ChangeEvent, useRef } from 'react';
import { setConstantValue } from 'typescript';
import './App.css';
import InfoList from './Components/Infolist';
import { IInfo } from './Interfaces'


const App: FC = () => {

  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [list, setList] = useState<IInfo[]>([]);


  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "fullName") {
      setFullName(event.target.value)
    }
    else if (event.target.name === "email") {
      setEmail(event.target.value)
    }
    else if (event.target.name === "phoneNumber") {
      setPhoneNumber(event.target.value)
    }
  };

  const addNewInfo = (): void => {
    const newInfo = { fullName: fullName, email: email, phoneNumber: phoneNumber };
    setList([...list, newInfo]);
    setFullName("")
    setEmail("")
    setPhoneNumber("")
  }

  //delete function
  const completeList = (fullNameToDelete: string): void => {
    setList(list.filter((list) => {
      return list.fullName != fullNameToDelete
    }))
  };


  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input type="text" placeholder="Name" name="fullName" value={fullName} onChange={handleChange} />
          <input type="text" placeholder="Email" name="email" value={email} onChange={handleChange} />
          <input type="text" placeholder="Phone Number" name="phoneNumber" value={phoneNumber} onChange={handleChange} />
        </div>
        <button onClick={addNewInfo}>Add Information</button>
      </div>
      <div className="list">
        {list.map((list: IInfo, key: number) => {
          return <InfoList key={key} list={list} completeList={completeList} />;
        })}
      </div>
    </div>
  );
};

export default App;


