import { useState } from 'react'


export default function useScroll(type, docClass) {

    const [index, setIndex] = useState(0)

    const handleRight = (total) => {
        let limit = type === 'home' ? Math.floor(total / 2) - 1 : Math.round(total / 2) + 5
        if (index < limit) {
          let n = index + 1;
          setIndex(n);
          document.getElementById(
            docClass
          ).style.transform = `translateX(-${n * (170 + 40)}px)`;
        }
      }
      const handleLeft = () => {
        if (index > 0) {
          let n = index - 1;
          setIndex(n);
          document.getElementById(
            docClass
          ).style.transform = `translateX(-${n * (170 + 40)}px)`;
        }
      }


    return { index, handleLeft, handleRight }
}  