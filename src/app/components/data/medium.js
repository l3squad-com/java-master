export const questions = {
  questions: [
    // Java Medium - Generics
    {
      id: 1,
      type: "multiple-choice",
      question: "Which of these correctly demonstrates the use of generics in Java?",
      options: [
        "List<int> list = new ArrayList<>();",
        "List<String> list = new ArrayList<>();",
        "List list = new ArrayList<>();",
        "List<> list = new ArrayList<>();"
      ],
      correctAnswers: ["List<String> list = new ArrayList<>();"],
      multipleAnswers: false,
      note: "Generics"
    },
    // Java Medium - Streams
    {
      id: 2,
      type: "fill-in-the-blanks",
      question: "In Java Streams, the __ method is used to transform each element in a stream.",
      blanks: ["map"],
      note: "Streams"
    },
    // Java Medium - Multithreading
    {
      id: 3,
      type: "multiple-choice",
      question: "Which method is used to start a thread in Java?",
      options: ["run()", "start()", "execute()", "begin()"],
      correctAnswers: ["start()"],
      multipleAnswers: false,
      note: "Multithreading"
    },
    // Java Medium - Collections
    {
      id: 4,
      type: "matching",
      question: "Match the Java collection types to their implementations",
      leftItems: ["List", "Set", "Map"],
      rightItems: ["ArrayList", "HashSet", "HashMap"],
      correctMatches: {
        List: "ArrayList",
        Set: "HashSet",
        Map: "HashMap"
      },
      note: "Collections"
    },
    // Java Medium - Interfaces
    {
      id: 5,
      type: "fill-in-the-blanks",
      question: "A Java interface can have __ methods by default.",
      blanks: ["abstract and default"],
      note: "Interfaces"
    },
    // Java Medium - Abstract Classes
    {
      id: 6,
      type: "multiple-choice",
      question: "Which of these statements about abstract classes in Java is true?",
      options: [
        "Abstract classes cannot have concrete methods.",
        "An abstract class can have a constructor.",
        "An abstract class cannot be extended.",
        "Abstract classes must have at least one abstract method."
      ],
      correctAnswers: ["An abstract class can have a constructor."],
      multipleAnswers: false,
      note: "Abstract Classes"
    },
    // Java Medium - Functional Interfaces
    {
      id: 7,
      type: "fill-in-the-blanks",
      question: "The __ annotation is used to indicate a functional interface in Java.",
      blanks: ["@FunctionalInterface"],
      note: "Functional Interfaces"
    },
    // Java Medium - Lambda Expressions
    {
      id: 8,
      type: "multiple-choice",
      question: "Which of these is a valid lambda expression?",
      options: [
        "(x, y) -> x + y",
        "x -> { return x; }",
        "() -> System.out.println(\"Hello\")",
        "All of the above"
      ],
      correctAnswers: ["All of the above"],
      multipleAnswers: false,
      note: "Lambda Expressions"
    },
    // Java Medium - Exception Handling
    {
      id: 9,
      type: "multiple-choice",
      question: "Which exception is thrown when dividing by zero in Java?",
      options: ["ArithmeticException", "NullPointerException", "IOException", "NumberFormatException"],
      correctAnswers: ["ArithmeticException"],
      multipleAnswers: false,
      note: "Exception Handling"
    },
    // Java Medium - File I/O
    {
      id: 10,
      type: "fill-in-the-blanks",
      question: "To read text from a file in Java, you can use the __ class.",
      blanks: ["BufferedReader"],
      note: "File I/O"
    },
    // Java Medium - Annotations
    {
      id: 11,
      type: "multiple-choice",
      question: "Which of these is a built-in annotation in Java?",
      options: ["@Override", "@Entity", "@Service", "@Autowired"],
      correctAnswers: ["@Override"],
      multipleAnswers: false,
      note: "Annotations"
    },
    // Java Medium - Reflection
    {
      id: 12,
      type: "fill-in-the-blanks",
      question: "The __ class in Java is used to access metadata of classes at runtime.",
      blanks: ["Class"],
      note: "Reflection"
    },
    // Java Medium - Polymorphism
    {
      id: 13,
      type: "multiple-choice",
      question: "What type of polymorphism does method overriding represent in Java?",
      options: ["Static Polymorphism", "Dynamic Polymorphism", "Compile-time Polymorphism", "Overloading"],
      correctAnswers: ["Dynamic Polymorphism"],
      multipleAnswers: false,
      note: "Polymorphism"
    },
    // Java Medium - Serialization
    {
      id: 14,
      type: "fill-in-the-blanks",
      question: "A class must implement the __ interface to enable serialization in Java.",
      blanks: ["Serializable"],
      note: "Serialization"
    },
    // Java Medium - JDBC
    {
      id: 15,
      type: "multiple-choice",
      question: "Which of these is used to load a JDBC driver in Java?",
      options: [
        "Class.forName()",
        "DriverManager.load()",
        "Connection.initialize()",
        "JDBC.loadDriver()"
      ],
      correctAnswers: ["Class.forName()"],
      multipleAnswers: false,
      note: "JDBC"
    }
  ]
};
