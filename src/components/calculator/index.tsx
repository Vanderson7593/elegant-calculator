import { useThemeContext } from '@context/theme-context'
import { Box, Button, Grid, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import Switch from '@material-ui/core/Switch'
import { FC, useState } from 'react'
import { CalculatorContainer } from './styles'
import { OperationFunc, Operations, EModes } from './types'

const CALCULATOR_OPERATIONS = {
  DIVIDE: (prevValue, nextValue) => prevValue / nextValue,
  MULTIPLY: (prevValue, nextValue) => prevValue * nextValue,
  ADDICTION: (prevValue, nextValue) => prevValue + nextValue,
  SUBTRACT: (prevValue, nextValue) => prevValue - nextValue,
  EQUALS: (prevValue, nextValue) => nextValue
} as Record<string, OperationFunc>

const Calculator: FC = () => {
  const { palette } = useTheme()
  const { updateThemeMode } = useThemeContext()
  const [value, setValue] = useState<number | null>(null)
  const [operator, setOperator] = useState<string | null>(null)
  const [displayValue, setDisplayValue] = useState<string>('0')
  const [waitingForOperand, setWaitingForOperand] = useState<boolean>(false)

  const handleThemeSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) updateThemeMode(EModes.Dark)
    else updateThemeMode(EModes.Light)
  }

  const clearAll = () => {
    setDisplayValue('0')
    setValue(null)
    setOperator(null)
    setWaitingForOperand(false)
  }

  const clearLastChar = () => {
    setDisplayValue(displayValue.substring(0, displayValue.length - 1) || '0')
  }

  const togglePlusMinusSign = () => {
    const newValue = parseFloat(displayValue) * -1
    setDisplayValue(String(newValue))
  }

  const handlePercent = () => {
    const currentValue = parseFloat(displayValue)

    if (currentValue === 0) return

    const fixedDigits = displayValue.replace(/^-?\d*\.?/, '')
    const newValue = parseFloat(displayValue) / 100

    setDisplayValue(String(newValue.toFixed(fixedDigits.length + 2)))
  }

  const handleDot = () => {
    if (!/\./.test(displayValue)) {
      setDisplayValue(displayValue + '.')
      setWaitingForOperand(false)
    }
  }

  const handleDigit = (digit: number) => {
    if (waitingForOperand) {
      setDisplayValue(String(digit))
      setWaitingForOperand(false)
    } else {
      setDisplayValue(displayValue === '0' ? String(digit) : displayValue + digit)
    }
  }

  const performOperation = (nextOperator: string) => {
    const inputValue = parseFloat(displayValue)

    if (value == null) {
      setValue(inputValue)
    } else if (operator) {
      const currentValue = value || 0
      const newValue = CALCULATOR_OPERATIONS[operator](currentValue, inputValue)

      setValue(newValue)
      setDisplayValue(String(newValue))
    }

    setWaitingForOperand(true)
    setOperator(nextOperator)
  }

  return (
    <CalculatorContainer groundColor={palette.background.paper}>
      <Grid container direction="column">
        <Grid container justify="center">
          <Grid item>
            <Switch onChange={handleThemeSwitch} color="primary" />
          </Grid>
        </Grid>
        <Box mt={1} />

        <Grid item container justify="space-around">
          <Grid item>
            <Typography>
              <Box fontWeight="fontWeightBold">Standard calculator</Box>
            </Typography>
          </Grid>
        </Grid>

        <Box mt={15} mr={3}>
          <Grid container direction="column" item alignItems="flex-end">
            <Grid item>
              <Typography variant="h2">
                <Box fontWeight="fontWeightBold">{displayValue}</Box>
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box mt={5} />
        <Grid container justify="space-between">
          <Grid item>
            <Button onClick={clearAll}>c</Button>
          </Grid>
          <Grid item>
            <Button onClick={handlePercent}>&#xFE6A;</Button>
          </Grid>
          <Grid item>
            <Button onClick={togglePlusMinusSign}>&#177;</Button>
          </Grid>
          <Grid item>
            <Button color="secondary" onClick={() => performOperation(Operations['divide'])}>
              &#xF7;
            </Button>
          </Grid>
        </Grid>

        <Grid container justify="space-between">
          <Grid item>
            <Button onClick={() => handleDigit(7)}>7</Button>
          </Grid>
          <Grid item>
            <Button onClick={() => handleDigit(8)}>8</Button>
          </Grid>
          <Grid item>
            <Button onClick={() => handleDigit(9)}>9</Button>
          </Grid>
          <Grid item>
            <Button color="secondary" onClick={() => performOperation(Operations['multiply'])}>
              x
            </Button>
          </Grid>
        </Grid>

        <Grid container justify="space-between">
          <Grid item>
            <Button onClick={() => handleDigit(4)}>4</Button>
          </Grid>
          <Grid item>
            <Button onClick={() => handleDigit(5)}>5</Button>
          </Grid>
          <Grid item>
            <Button onClick={() => handleDigit(6)}>6</Button>
          </Grid>
          <Grid item>
            <Button color="secondary" onClick={() => performOperation(Operations['subtract'])}>
              &minus;
            </Button>
          </Grid>
        </Grid>

        <Grid container justify="space-between">
          <Grid item>
            <Button onClick={() => handleDigit(1)}>1</Button>
          </Grid>
          <Grid item>
            <Button onClick={() => handleDigit(2)}>2</Button>
          </Grid>
          <Grid item>
            <Button onClick={() => handleDigit(3)}>3</Button>
          </Grid>
          <Grid item>
            <Button color="secondary" onClick={() => performOperation(Operations['addiction'])}>
              &#43;
            </Button>
          </Grid>
        </Grid>

        <Grid container justify="space-between">
          <Grid item>
            <Button onClick={clearLastChar}>&#x22A0;</Button>
          </Grid>
          <Grid item>
            <Button onClick={() => handleDigit(0)}>0</Button>
          </Grid>
          <Grid item>
            <Button onClick={handleDot}>.</Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => performOperation(Operations['equals'])}
            >
              &#61;
            </Button>
          </Grid>
        </Grid>
        <Box mt={5} />
        <Grid>
          <Typography variant="body2" align="center">
            <Box>designed by Ana Clara</Box>
          </Typography>
          <Typography>
            <Box textAlign="center" fontWeight="fontWeightBold">
              developed by Vanderson Telema
            </Box>
          </Typography>
        </Grid>
      </Grid>
    </CalculatorContainer>
  )
}

export default Calculator
