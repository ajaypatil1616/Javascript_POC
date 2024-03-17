document.getElementsByTagName("ul")[0].firstElementChild.style.color = "red";

document.getElementsByTagName("ul")[0].lastElementChild.style.color = "yellow";

Array.from(document.getElementsByTagName("li")).forEach((element) => {
    element.style.backgroundColor="aqua"
    element.style.padding = "5px"
    element.style.borderRadius = "5px"
})