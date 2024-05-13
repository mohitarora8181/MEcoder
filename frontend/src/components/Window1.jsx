import React, {useState } from 'react'

const Window1 = () => {

    const questions = [
        "Write a function to reverse a string in JavaScript.",
        "Implement a function to check if a given string is a palindrome in Python.",
        "Create a program to find the factorial of a number in C++.",
        "Develop a Python script to count the occurrences of each word in a text file.",
        "Write a Java program to find the largest element in an array.",
        "Implement a queue using stacks in Java.",
        "Write a Python program to find the Fibonacci sequence up to a certain number.",
        "Create a function in JavaScript to remove duplicates from an array.",
        "Develop a C program to find the sum of digits of a number.",
        "Write a Python script to read a CSV file and display its contents.",
        "Implement binary search algorithm in C++.",
        "Create a Java program to sort an array using bubble sort algorithm.",
        "Write a JavaScript function to find the longest word in a string.",
        "Develop a Python program to generate a random password.",
        "Implement a linked list in C.",
        "Create a Python script to parse JSON data from a URL.",
        "Write a Java program to count the number of vowels in a string.",
        "Develop a C++ program to calculate the area of a triangle.",
        "Write a JavaScript function to check if a given number is prime.",
        "Create a Python program to merge two sorted lists into a single sorted list.",
        "Implement a stack data structure in Java.",
        "Write a program in C to reverse a linked list.",
        "Develop a Python script to download a file from a URL.",
        "Create a Java program to find the factorial of a large number using BigInteger.",
        "Write a JavaScript function to check if two strings are anagrams."
    ];
    return (
        <div style={{ userSelect: "none", overflowY: "scroll", height: "100%", backgroundColor: '#f0f0f0' }} onResize={() => console.log("resize")}>
            <div style={{ padding: '20px', borderRadius: '10px' }}>
                <h2 style={{ color: '#333' }}>Practical Coding Questions:</h2>
                <ol style={{ paddingLeft: '20px', listStyle: 'none' }}>
                    {questions.map((question, index) => (
                        <CodingQuestion key={index} question={question} />
                    ))}
                </ol>
            </div>
        </div>
    )
}


const CodingQuestion = ({ question }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <li style={{ marginBottom: '10px',padding:"5px" }}>
            <label style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                {question}
            </label>
        </li>
    );
};



export default Window1
