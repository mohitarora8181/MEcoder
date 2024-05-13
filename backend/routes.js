import express from "express"
const routes = express.Router();
import { question } from "./model.js";

routes.get("/",async (req,res)=>{
    const questions = await question.find();
    res.json({success:"true",questions});
})

routes.post("/new",async (req,res)=>{
    const body = req.body;
    console.log(body);
    try{
        await question.create(body);
        res.status(201).json({success:true,message:"Question added successfully"});
    }catch(error){
        console.log(error);
        res.status(500).json({success:false,error:error._message})
    }
});


// const addCoded = ()=>{
//     var questions = [
//         "Write a function to reverse a string in JavaScript.",
//         "Implement a function to check if a given string is a palindrome in Python.",
//         "Create a program to find the factorial of a number in C++.",
//         "Develop a Python script to count the occurrences of each word in a text file.",
//         "Write a Java program to find the largest element in an array.",
//         "Implement a queue using stacks in Java.",
//         "Write a Python program to find the Fibonacci sequence up to a certain number.",
//         "Create a function in JavaScript to remove duplicates from an array.",
//         "Develop a C program to find the sum of digits of a number.",
//         "Write a Python script to read a CSV file and display its contents.",
//         "Implement binary search algorithm in C++.",
//         "Create a Java program to sort an array using bubble sort algorithm.",
//         "Write a JavaScript function to find the longest word in a string.",
//         "Develop a Python program to generate a random password.",
//         "Implement a linked list in C.",
//         "Create a Python script to parse JSON data from a URL.",
//         "Write a Java program to count the number of vowels in a string.",
//         "Develop a C++ program to calculate the area of a triangle.",
//         "Write a JavaScript function to check if a given number is prime.",
//         "Create a Python program to merge two sorted lists into a single sorted list.",
//         "Implement a stack data structure in Java.",
//         "Write a program in C to reverse a linked list.",
//         "Develop a Python script to download a file from a URL.",
//         "Create a Java program to find the factorial of a large number using BigInteger.",
//         "Write a JavaScript function to check if two strings are anagrams."
//     ]


//     questions.forEach(async (e)=>{
//         await question.create({content:e,level:"Easy"});
//     })
// }

// addCoded();

export default routes;