import React from 'react';
import {  Button, Input } from "antd";


export default function ConfirmaMatricula(){
 return (
    <div className="flex flex-col bg-gray-500 items-center mx-auto p-4 gap-2 ">
     <Input/>
     <Button type="primary">Confirmar</Button>
    </div>
 
 );   
}