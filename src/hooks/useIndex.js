import { useState } from 'react'


export function useIndex() {

    const [index, setIndex] = useState(0)

    return { index, setIndex }
} 