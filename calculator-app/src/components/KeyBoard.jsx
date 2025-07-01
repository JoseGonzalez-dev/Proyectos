import React, { useState } from 'react'
import { Button } from './Button'
import { Text, View } from 'react-native'
import { Styles } from '../styles/GlobalStyles'
import { myColors } from '../styles/Colors'

export const KeyBoard = () => {
    const [firstNumber, setFirstNumber] = useState('')
    const [secondNumber, setSecondNumber] = useState('')
    const [operation, setOperation] = useState('')
    const [result, setResult] = useState(null)

    const handleValue = (val) => {
        if (firstNumber.length < 10) {
            setFirstNumber(firstNumber + val) 
        }
    }

    const handleOperation = (val) => {
        setOperation(val)
        setSecondNumber(firstNumber)
        setFirstNumber('')
    } 

    const clear = () => {
        setOperation('')
        setSecondNumber('')
        setFirstNumber('')
        setResult(null)
        alert('Clean view')
    }

    const getResult = () => {
        const number1 = parseFloat(firstNumber) || 0
        const number2 = parseFloat(secondNumber) || 0
        switch (operation) {
            case "+":
                setResult(number2 + number1)
                break;
            case '-':
                setResult(number2 - number1)
                break;
            case '*':
                setResult(number2 * number1)
                break;
            case '/':
                if(number1 !== 0) {
                    setResult(parseFloat((number2 / number1).toFixed(3)))
                } else {
                    alert('No se puede dividir entre 0')
                }
                break;
            default:
                clear()
                setResult(0)
                break;
        }
    }

    const formatNumberWithCommas = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') 
    } 

    const viewResult = () => {
        const displayValue = result !== null ? result : firstNumber || '0' 
        const formattedText = formatNumberWithCommas(displayValue) 

        let fontSize = Styles.screenFirstNumber.fontSize 
        if (formattedText.length > 7) fontSize = 50 
        else if (formattedText.length > 5) fontSize = 70 

        if (formattedText.length > 15) {
            return (
                <Text style={[Styles.screenFirstNumber, { fontSize: 40 }]}>
                    {Number(displayValue).toExponential(6)}
                </Text>
            ) 
        }

        return (
            <Text style={[Styles.screenFirstNumber, { fontSize, color: result !== null ? myColors.results : '#94979489' }]}>
                {formattedText}
            </Text>
        ) 
    } 

    /* const viewResult = () => {
        if(result !== null){
                return <Text style={result < 999999999 ? [Styles.screenFirstNumber, {color: myColors.results}] : [Styles.screenFirstNumber, {fontSize: 60, color: myColors.results}]}>
                    {result?.toString()}
                </Text>
        }

        if(firstNumber && firstNumber.length < 6){
            return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>
        }

        if(firstNumber === '') {
            return <Text style={Styles.screenFirstNumber}>{'0'}</Text>
        }

        if (firstNumber.length > 5 && firstNumber.length < 8) {
            return (
                <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
                {firstNumber}
                </Text>
            ) 
        }

        if (firstNumber.length > 7) {
            return (
                <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>
                {firstNumber}
                </Text>
            ) 
        }
    } */

    return (
        <View style={Styles.viewBottom}>
            <View
                style={{
                    height: 120,
                    width: "90%",
                    justifyContent: "flex-end",
                    alignSelf: "center",
                }}
            >
                <Text style={Styles.screenSecondNumber}>
                    {secondNumber}
                    <Text>{operation}</Text>
                    {firstNumber}
                </Text>
                {viewResult()}
            </View>
            <View style={Styles.row}>
                <Button title={'C'} isGray onPress={clear}/>
                <Button title={'←'} isGray onPress={() => setFirstNumber(firstNumber.slice(0,-1))}/>
                <Button title={'%'} isGray onPress={() => {const number = parseFloat(firstNumber); setFirstNumber(String(number/100))}}/>
                <Button title={'÷'} isGray onPress={() => handleOperation('/')}/>
            </View>
            <View style={Styles.row}>
                <Button title={'7'} onPress={() => handleValue('7')}/>
                <Button title={'8'} onPress={() => handleValue('8')}/>
                <Button title={'9'} onPress={() => handleValue('9')}/>
                <Button title={'X'} isGray onPress={() => handleOperation('*')}/>
            </View>
            <View style={Styles.row}>
                <Button title={'4'} onPress={() => handleValue('4')}/>
                <Button title={'5'} onPress={() => handleValue('5')}/>
                <Button title={'6'} onPress={() => handleValue('6')}/>
                <Button title={'-'} isGray onPress={() => handleOperation('-')}/>
            </View>
            <View style={Styles.row}>
                <Button title={'1'} onPress={() => handleValue('1')}/>
                <Button title={'2'} onPress={() => handleValue('2')}/>
                <Button title={'3'} onPress={() => handleValue('3')}/>
                <Button title={'+'} isGray onPress={() => handleOperation('+')}/>
            </View>
            <View style={Styles.row}>
                <Button title={'+/-'} isGray onPress={() => {const number = parseFloat(firstNumber); setFirstNumber(String(number * -1))}}/>
                <Button title={'0'} onPress={() => handleValue('0')}/>
                <Button title={'.'} isGray onPress={() => {
                    if(firstNumber === '') {
                        setFirstNumber('0.')
                    } else if (!firstNumber.includes('.')){
                        setFirstNumber(firstNumber + '.')
                    }
                }}/>
                <Button title={'='} isBlue onPress={() => getResult()}/>
            </View>
        </View>
    )
}