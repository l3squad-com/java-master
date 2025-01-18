export const questions = {
  questions: [
    // Java Basics - Syntax
    {
      id: 1,
      type: "fill-in-the-blanks",
      question: "In Java, every application starts with the __ method.",
      blanks: ["main"],
      note: "Syntax"
    },
    // Java Basics - Data Types
    {
      id: 2,
      type: "multiple-choice",
      question: "Which data type is used to create a variable that holds decimal numbers?",
      options: ["int", "float", "String", "boolean"],
      correctAnswers: ["float"],
      multipleAnswers: false,
      note: "Data Types"
    },
    // Java Basics - Variables
    {
      id: 3,
      type: "fill-in-the-blanks",
      question: "To declare a constant in Java, use the __ keyword.",
      blanks: ["final"],
      note: "Variables"
    },
    // Java Basics - Loops
    {
      id: 4,
      type: "fill-in-the-blanks",
      question: "A __ loop is used to execute a block of code a known number of times.",
      blanks: ["for"],
      note: "Loops"
    },
    // Java Basics - Conditionals
    {
      id: 5,
      type: "fill-in-the-blanks",
      question: "The __ keyword is used in Java to execute one block of code out of multiple options.",
      blanks: ["switch"],
      note: "Conditionals"
    },
    // Java Basics - Arrays
    {
      id: 6,
      type: "multiple-choice",
      question: "Which of these correctly initializes an array in Java?",
      options: ["int arr = {1, 2, 3};", "int[] arr = new int[3];", "int arr[] = [1, 2, 3];", "int arr(3);"],
      correctAnswers: ["int[] arr = new int[3];"],
      multipleAnswers: false,
      note: "Arrays"
    },
    // Java Basics - OOP Concepts
    {
      id: 7,
      type: "multiple-choice",
      question: "Which of these is NOT a principle of Object-Oriented Programming?",
      options: ["Encapsulation", "Polymorphism", "Inheritance", "Compilation"],
      correctAnswers: ["Compilation"],
      multipleAnswers: false,
      note: "OOP"
    },
    // Java Basics - Access Modifiers
    {
      id: 8,
      type: "fill-in-the-blanks",
      question: "The __ access modifier makes a member accessible only within its own class.",
      blanks: ["private"],
      note: "Access Modifiers"
    },
    // Java Basics - Exception Handling
    {
      id: 9,
      type: "multiple-choice",
      question: "Which block is always executed in exception handling?",
      options: ["try", "catch", "finally", "throw"],
      correctAnswers: ["finally"],
      multipleAnswers: false,
      note: "Exception Handling"
    },
    // Java Basics - Inheritance
    {
      id: 10,
      type: "fill-in-the-blanks",
      question: "In Java, a class can extend another class using the __ keyword.",
      blanks: ["extends"],
      note: "Inheritance"
    },
    // Java Basics - Interfaces
    {
      id: 11,
      type: "fill-in-the-blanks",
      question: "To implement an interface in Java, use the __ keyword.",
      blanks: ["implements"],
      note: "Interfaces"
    },
    // Java Basics - Keywords
    {
      id: 12,
      type: "multiple-choice",
      question: "Which of the following is a valid Java keyword?",
      options: ["include", "virtual", "static", "define"],
      correctAnswers: ["static"],
      multipleAnswers: false,
      note: "Keywords"
    },
    // Java Basics - Constructors
    {
      id: 13,
      type: "fill-in-the-blanks",
      question: "Constructors in Java must have the same name as the __.",
      blanks: ["class"],
      note: "Constructors"
    },
    // Java Basics - String Handling
    {
      id: 14,
      type: "fill-in-the-blanks",
      question: "Strings in Java are immutable and are part of the __ package.",
      blanks: ["java.lang"],
      note: "String Handling"
    },
    // Java Basics - Collections
    {
      id: 15,
      type: "matching",
      question: "Match the collection types with their characteristics",
      leftItems: ["List", "Set", "Map"],
      rightItems: ["Allows duplicate values", "Does not allow duplicate values", "Stores key-value pairs"],
      correctMatches: {
        List: "Allows duplicate values",
        Set: "Does not allow duplicate values",
        Map: "Stores key-value pairs"
      },
      note: "Collections"
    }
  ]
};
