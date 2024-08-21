'use client';

import React, { useRef, useState } from 'react';
import {  Button, ConfigProvider, Input, Typography  } from "antd";
import type { GetProps } from 'antd';
import { Alef } from 'next/font/google';
import { useRouter } from 'next/router';


export default function ConfirmaMatricula(){
  const maxLength = 8
  const router = useRouter();
  //Armazena um valor para o input 
  const [inputValue, setInputValue] = useState('')
  const [isError, setIsError] = useState(false)

  // Cria a referência para o input
  const inputRef = useRef(null);
 // Função para navegar para a página LeitorDeQRCode
 const navigateToLeitorDeQRCode = () => {
  router.push('/LeitorDeQRCode'); // Certifique-se de que o caminho está correto
};
  //Mudança de estado do input
  const handleInputChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      setInputValue(value);
    }
  }

  // Função para lidar com o clique no botão
  const handleButtonClick = () => {
    if (inputValue.length < maxLength) {
      setIsError(true); // Se o valor for menor que maxLength, mostra erro
      inputRef.current.focus({
        cursor: 'end',
      });
    } else {
      setIsError(false); // Se o valor for igual ao maxLength, remove o erro
      navigateToLeitorDeQRCode();
      alert('Ok: Valor aceito.');
    }
  };

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
      <div className="flex bg-blue-200 items-center justify-center min-h-screen mx-auto p-4 h-screen  ">
         <div className='flex flex-col bg-blue-950 items-center justify-center p-6 gap-4 rounded-lg w-96 h-5/6'>
            <img src="https://logo.uninassau.edu.br/img/svg/uninassau_n.svg" width={240} alt="logo Uninassau azul com texto b" />
            <h3  className='text-white'>Sua matricula</h3>
            {isError ? (
              <Input 
         
              status='error'
              className='w-full' 
              maxLength={maxLength}
              value={inputValue}
              onChange={handleInputChange}
              ref={inputRef} 
              />
          
            ): (
              <Input 
                 className='w-full' 
              maxLength={maxLength}
              value={inputValue}
              onChange={handleInputChange}
              ref={inputRef} 
              />
            )
          
            }

            {isError && <span className='text-red-500 text-xs'> Porfavor verifique se você digitou os 8 dígitos da sua matrícula</span>}
           
  
            <Button className='text-black w-full'  type="primary" onClick={handleButtonClick}>Confirmar</Button>

            
         </div>

      </div>
      </ConfigProvider>
   
 
 );   
}

/* ONCLICK se (value input < maxlength) {
error} else {
ok} */