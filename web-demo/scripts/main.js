const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World!";

const docJson = {
    PropertiesList: {Defendant: "John Doe", DOB: "12/5/2004", 
        "Count Number": "8", "Offense Date": "12/7/2024", 
        Conduct: "No good", Victim: "Ronald Roe"}
};

const jsonString = JSON.stringify(docJson);


const downloadButton = document.querySelector("button");

function downloadJSON(){
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.json";
    a.click();

}


downloadButton.onclick = () => {
    downloadJSON();
}


//variables:
// let myVariable;