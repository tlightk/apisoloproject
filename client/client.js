window.onload = () => {
    const paragraphElement = document.createElement('p');
    paragraphElement.setAttribute('id', 'introduction')
    paragraphElement.innerText = 'Hello! Welcome to my first solo API project as a student at Code Chrysalis!';
    document.body.appendChild(paragraphElement);
};