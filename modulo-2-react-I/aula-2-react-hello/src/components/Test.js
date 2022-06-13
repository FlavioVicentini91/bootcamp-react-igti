import React from 'react'

export default function Test({number, string, visible, objeto, objeto: {nome, cidade}}) {
    
    return (
    <div className='text-center'>
        Testando PROPS
        <ul>
            <li>Props do tipo: {typeof number} e o valor: {number}</li>
            <li>Props do tipo: {typeof string} e o valor: {string}</li>
            <li>Props do tipo: {typeof visible} e o valor: {visible}</li>
            <li>Props do tipo: {typeof objeto} e o valor: nome: {nome} e cidade: {cidade}</li>
        </ul>
    </div>   
  )
};

