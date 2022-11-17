//JS example
const  jsContainerElement = document.getElementById("javascript__container");
const  jsHeadingElement = document.createElement("h1");
jsHeadingElement.innerText = "Assignment1 Javascript";
jsContainerElement.appendChild(jsHeadingElement);

//React example
const  reactHeadingElement = React.createElement("h1", null, "Assignment1 React");
const  reactRoot = ReactDOM.createRoot(document.getElementById("react__container"));
reactRoot.render(reactHeadingElement);