'use client';

import React, { useState } from 'react';
import {  Button, ConfigProvider, Input, Typography  } from "antd";
import type { GetProps } from 'antd';


export default function ConfirmaMatricula(){
   
 
 return (
   <ConfigProvider
   theme={{
     token: {
       // Seed Token
       colorPrimary: '#FED403',
       borderRadius: 2,

       // Alias Token
       colorBgContainer: '#FFFBE9',
     },
   }}>
      <div className="flex bg-blue-200 items-center justify-center min-h-screen mx-auto p-4   ">
         <div className='flex flex-col bg-blue-950 items-center justify-center p-6 gap-4 rounded-lg'>
            <img src="https://logo.uninassau.edu.br/img/svg/uninassau_n.svg" alt="logo Uninassau azul com texto b" />
            <h3  className='text-white'>Sua matricula</h3>
            <Input className='w-full' maxLength={8}/>
            <Button  className='text-black hover:text-black'  type="primary">Confirmar</Button>
         </div>

      </div>
      </ConfigProvider>
   
 
 );   
}