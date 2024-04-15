# BMI Calculator (Body Mass Index)

This project was developed as part of the Programming discipline for the Specialization Course in Automated Software Testing.

## About the Project

The aim of this project is to create a BMI (Body Mass Index) calculator in JavaScript. BMI is a measure that uses a person's height and weight to determine if they are at a healthy weight.

## Computational Thinking

### Decomposition:

- Define age, weight, and height.
- Calculate the BMI using the formula: BMI = weight / (height \* height).
- Check classification based on the result.

### Pattern Recognition:

- Every BMI result falls within a classification.

### Abstraction:

- Only calculate for ages between 20 and 60 years.

### Algorithmic Thinking:

1.  Check if the age is within the range of 20 to 60 years.
    - If it is, calculate BMI.
    - Otherwise, display an error message.
2.  Calculate the BMI according to the formula (weight / height \* height).
3.  Check BMI and return the corresponding classification.

## Features

- **BMI Calculator:** The `bmi` function calculates the BMI based on the provided weight and height, and returns the BMI value along with its classification (e.g., "Underweight", "Normal Weight", "Overweight", "Obesity").
- **Unit Tests:** Unit tests have been added using equivalence partitioning and boundary value analysis techniques to ensure that the `bmi` function is working correctly in various scenarios. The tests were performed using the Jest library.

## How to Use

1. Clone this repository to your local machine.
2. Install project dependencies by running the command `npm install`.
3. Open the `index.js` file to view the implementation of the `bmi` function.
4. Run the unit tests using the command `npm test`.

## Contributions

Contributions are welcome! Feel free to send pull requests to improve this project. If you have suggestions, problems, or questions, please open an issue so we can discuss them.

## License

This project is licensed under the [MIT License](LICENSE).
