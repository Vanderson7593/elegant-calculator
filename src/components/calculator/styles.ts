import styled from '@emotion/styled'
import { ContainerProperties } from './types'

export const CalculatorContainer = styled.div<ContainerProperties>`
  display: flex;
  margin: 5% auto;
  height: 740px;
  width: 380px;
  border-radius: 30px;
  padding: 0px 2%;

  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14),
    0px 4px 18px 3px rgba(0, 0, 0, 0.12);

  background-color: ${({ groundColor }) => groundColor};
`
