window.onload = () => {
    const paragraphElement = document.createElement('p');
    paragraphElement.setAttribute('id', 'introduction')
    paragraphElement.innerText = 'Hello! Welcome to my first solo API project as a student at Code Chrysalis!';
    document.body.appendChild(paragraphElement);

    const nextParagraphElement = document.createElement('p');
    nextParagraphElement.setAttribute('id', 'introduction')
    nextParagraphElement.innerHTML = '<a href=https://github.com/tlightk/apisoloproject>Click here to see my project!</a>';
    document.body.appendChild(nextParagraphElement);
};