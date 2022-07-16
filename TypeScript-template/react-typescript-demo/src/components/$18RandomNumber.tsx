// type RandomNumberProps = {
//     value : number
//     isPositive ?: boolean
//     isNegative ?: boolean
//     isZero ?: boolean
// }

type RandomNumberType = {
    value : number
}

type isPositiveType = RandomNumberType & {
    isPositive : boolean
    isNegative ?: never
    isZero ?: never
}
type isNegativeType = RandomNumberType & {
    isPositive ?: never
    isNegative : boolean
    isZero ?: never
}
type isZeroType = RandomNumberType & {
    isPositive ?: never
    isNegative ?: never
    isZero : boolean
}

type RandomNumberProps = isPositiveType | isNegativeType | isZeroType

function RandomNumber({value, isPositive, isNegative ,isZero} : RandomNumberProps) {
  return (
    <div>
        {value} {isPositive && 'Positive'} {isNegative && 'Negative'} {' '} {isZero && 'Zero'}
    </div>
  )
}

export default RandomNumber