const bmi = require('./index');

describe("Equivalence Partition for Age Validation ",()=>{

test('Age Validation, lass than 20 must give an Error', () => {
  expect(bmi(19, 88,1.65)).toBe("Error: This software only calculates BMI for ages between 20 and 60 years.");
});
test('Age Validation, greater than 60 must give an Error', () => {
    expect(bmi(61, 88,1.65)).toBe("Error: This software only calculates BMI for ages between 20 and 60 years.");
  });

test('Age Validation, equal to 20, must have BMI 33.06 -> Obesity', () => {
        expect(bmi(20, 90,1.65)).toEqual({bmiName:"Obesity", value: '33.06' });
  });
 
  test('Age Validation, equal to 60 years, must have BMI 22.04 -> Healthy Weight', () => {
    expect(bmi(60, 90,1.65)).toEqual({bmiName:"Obesity", value: '33.06' });
  });
});

describe("Equivalence partitioning and boundary limits to classify IBM", () =>{

  test('BMI < 18.50 -> Underweight (Upper Limit)', () => {
    expect(bmi(30, 57.260, 1.76)).toEqual({ bmiName: "Underweight", value: '18.49' });
  });
  
  test('BMI = 18.50 -> Healthy Weight (Lower Limit)', () => {
    expect(bmi(30,55.360, 1.73)).toEqual({ bmiName: "Healthy Weight", value: '18.50' });
  });
  
  test('BMI < 25 -> Healthy Weight (Upper Limit)', () => {
    expect(bmi(30, 54.73, 1.48)).toEqual({ bmiName: "Healthy Weight", value: '24.99' });
  });
  
  test('BMI = 25 -> Overweight (Lower Limit)', () => {
    expect(bmi(30, 92.16, 1.92)).toEqual({ bmiName: "Overweight", value: '25.00' });
  });
  
  test('BMI = 29.99 (Upper Limit Overweight)', () => {
    expect(bmi(30, 83.63, 1.67)).toEqual({ bmiName: "Overweight", value: '29.99' });
  });
  
  test('BMI = 30 (Lower Limit Obesity)', () => {
    expect(bmi(30, 90.84, 1.74)).toEqual({ bmiName: "Obesity", value: '30.00' });
  });
  
  test('BMI >= 30 -> Obesity (Upper Limit)', () => {
    expect(bmi(30, 99.75, 1.75)).toEqual({ bmiName: "Obesity", value: '32.57' });
  });
  
  


});
  


