import React, { useState } from 'react';
import Button from '../../components/Button';

export const Calculator = () => {
  const onClick = () => {
    console.log('clicked');
  };

  return (
    <div className='calculator'>
      <div className='display'>0</div>
      <div className='buttons'>
        <Button color='#d9d9d9' onClick={onClick} name='AC' />

        <Button color='#d9d9d9' onClick={onClick} name=' +/-' />

        <Button color='#d9d9d9' onClick={onClick} name='%' />

        <Button color='#f5913e' onClick={onClick} name='÷' />

        <div className='button-row'>
          <Button color='#333333' onClick={onClick} name='7' />

          <Button color='#333333' onClick={onClick} name='8' />

          <Button color='#333333' onClick={onClick} name='9' />

          <Button color='#f5913e' onClick={onClick} name='×' />
        </div>
        <div className='button-row'>
          <Button color='#333333' onClick={onClick} name='4' />

          <Button color='#333333' onClick={onClick} name='5' />

          <Button color='#333333' onClick={onClick} name='6' />

          <Button color='#f5913e' onClick={onClick} name='-' />
        </div>
        <div className='button-row'>
          <Button color='#333333' onClick={onClick} name='1' />

          <Button color='#333333' onClick={onClick} name='2' />

          <Button color='#333333' onClick={onClick} name='3' />

          <Button color='#f5913e' onClick={onClick} name='+' />
        </div>
        <div className='button-row'>
          <Button color='#333333' onClick={onClick} name='0' />

          <Button color='#333333' onClick={onClick} name='.' />

          <Button color='#f5913e' onClick={onClick} name='=' />
        </div>
      </div>
    </div>
  );
};
