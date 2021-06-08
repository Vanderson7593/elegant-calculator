export interface ContainerProperties {
  groundColor: string
}
export const Operations = {
  divide: 'DIVIDE',
  multiply: 'MULTIPLY',
  addiction: 'ADDICTION',
  subtract: 'SUBTRACT',
  equals: 'EQUALS'
} as const

export type OperationFunc = (prevValue: number, nextValue: number) => number

export enum EModes {
  Light = 'light',
  Dark = 'dark'
}
