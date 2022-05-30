import { useState, useEffect } from 'react'


export default function useTheme() {

  const [currentTheme, setTheme] = useState("dark");
  const themeElement = document.documentElement.getAttribute("data-theme")

  let posX = currentTheme === "dark" ? 0 : 25

  function handleToggleTheme() {

    if(themeElement === null || currentTheme === "dark") {
        posX = 25
        setTheme("light")
    }
    if(currentTheme === "light") {
        posX = 0
        setTheme("dark");
    }

  }

  useEffect(() => {


    document.getElementById(
      "swithcher"
    ).style.transform = `translateX(${posX}px)`
    document.documentElement.setAttribute("data-theme", currentTheme)


  }, [currentTheme, posX])
  

    return { currentTheme, handleToggleTheme }
}