import React from 'react'

type PolymorphicOwnComponentProps<E extends React.ElementType>= {
    size ?: 'sm' | 'md' | 'lg'
    color ?: 'primary' | 'secondary'
    children : React.ReactNode
    as ?: E
} 

type PolymorphicComponentProps<E extends React.ElementType> = PolymorphicOwnComponentProps<E> &
Omit<React.ComponentProps<E>, keyof PolymorphicOwnComponentProps<E>>

function PolymorphicComponent<E extends React.ElementType = 'div'>({size,color,children,as } : PolymorphicComponentProps<E>) {
  const Component = as || 'div'
  return (
    <>
        <Component className={`class-with-${size}-${color}`}>{children}</Component>
    </>
  )
}

export default PolymorphicComponent