function cutText(text) {

    let currentText = text
    let textSize = currentText.length

    if(textSize > 300) {
        currentText = text.slice(0, 300)
    }

    return currentText
}

export default cutText