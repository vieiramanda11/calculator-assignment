import React, { useState } from 'react';
import Button from '../../components/Button';

export const Calculator = () => {
  const [value, setValue] = useState<string>('0');
  const [previousValue, setPreviousValue] = useState<string>('0');
  const [operation, setOperation] = useState<string>('');

  const handleNumberClick = (num: string) => {
    if (value === '0') {
      setValue(num);
    } else {
      setValue(value + num);
    }
  };

  const handleOperationClick = (op: string) => {
    setPreviousValue(value);
    setOperation(op);
    setValue('0');
  };

  const handleClearClick = () => {
    setValue('0');
    setPreviousValue('0');
    setOperation('');
  };

  const handlePlusMinusClick = () => {
    setValue((prevValue) => {
      if (prevValue.startsWith('-')) {
        return prevValue.substr(1);
      } else {
        return '-' + prevValue;
      }
    });
  };

  const handleEqualsClick = () => {
    const newValue = parseFloat(value);
    const previous = parseFloat(previousValue);

    switch (operation) {
      case '+':
        setValue((previous + newValue).toString());
        break;
      case '-':
        setValue((previous - newValue).toString());
        break;
      case '×':
        setValue((previous * newValue).toString());
        break;
      case '÷':
        setValue((previous / newValue).toString());
        break;
      case '%':
        setValue(((previous / 100) * newValue).toString());
        break;
      default:
        setValue(value);
    }

    setPreviousValue('0');
    setOperation('');
  };

  const handleDecimalClick = () => {
    // to be done
  };

  return (
    <div className='calculator'>
      <div className='display'>{value}</div>
      <div className='buttons'>
        <Button color='#d9d9d9' onClick={handleClearClick} name='AC' />
        <Button color='#d9d9d9' onClick={handlePlusMinusClick} name=' +/- ' />
        <Button
          color='#d9d9d9'
          onClick={() => handleOperationClick('%')}
          name='%'
        />
        <Button
          color='#f5913e'
          onClick={() => handleOperationClick('÷')}
          name='÷'
        />
        <div className='button-row'>
          <Button
            color='#333333'
            onClick={() => handleNumberClick('7')}
            name='7'
          />
          <Button
            color='#333333'
            onClick={() => handleNumberClick('8')}
            name='8'
          />
          <Button
            color='#333333'
            onClick={() => handleNumberClick('9')}
            name='9'
          />
          <Button
            color='#f5913e'
            onClick={() => handleOperationClick('×')}
            name='×'
          />
        </div>
        <div className='button-row'>
          <Button
            color='#333333'
            onClick={() => handleNumberClick('4')}
            name='4'
          />
          <Button
            color='#333333'
            onClick={() => handleNumberClick('5')}
            name='5'
          />
          <Button
            color='#333333'
            onClick={() => handleNumberClick('6')}
            name='6'
          />
          <Button
            color='#f5913e'
            onClick={() => handleOperationClick('-')}
            name='-'
          />
        </div>
        <div className='button-row'>
          <Button
            color='#333333'
            onClick={() => handleNumberClick('1')}
            name='1'
          />
          <Button
            color='#333333'
            onClick={() => handleNumberClick('2')}
            name='2'
          />
          <Button
            color='#333333'
            onClick={() => handleNumberClick('3')}
            name='3'
          />
          <Button
            color='#f5913e'
            onClick={() => handleOperationClick('+')}
            name='+'
          />
        </div>
        <div className='button-row'>
          <Button
            color='#333333'
            onClick={() => handleNumberClick('0')}
            name='0'
          />

          <Button color='#333333' onClick={handleDecimalClick} name='.' />

          <Button
            color='#f5913e'
            onClick={() => handleEqualsClick()}
            name='='
          />
        </div>
      </div>
    </div>
  );
};
