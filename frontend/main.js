
window.addEventListener('DOMContentLoaded',(event) =>{
    getVisitCount();
})

const functionAPi = '';

const getVisitCount = () => {
    let count = 0;
    fetch(functionAPi).then(response => {
        return response.json()
    }).then(response => {
        console.log("website called");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}