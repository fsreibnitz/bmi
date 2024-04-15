
const bmiClassification = [
    { 
        name: "Underweight",
        bmiMin:0,
        bmiMax:18.49 
    },
    { 
        name: "Healthy Weight",
        bmiMin:18.50,
        bmiMax: 24.99,
    },
    { 
        name: "Overweight",
        bmiMin:25,
        bmiMax: 29.99,
    },
    { 
        name: "Obesity",
        bmiMin:30,
        bmiMax: 999,
    }

]

function bmi(age,weight, heightInMeters){
    if (age <20 || age>60){
        return "Error: This software only calculates BMI for ages between 20 and 60 years."
    }

    const calc =(weight / (heightInMeters * heightInMeters)).toFixed(2)
    console.log("IMC= ", calc, "weight",weight,"heightInMeters",heightInMeters)
    for (let i = 0; i < bmiClassification.length; i++) {
        if (calc >= bmiClassification[i].bmiMin && calc <= bmiClassification[i].bmiMax) {
            return { 
                bmiName: bmiClassification[i].name,
                value: calc  
            };
        }
    }
    
}
module.exports = bmi;