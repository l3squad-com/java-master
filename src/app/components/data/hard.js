export const questions = {
  questions: [
    // Java Hard - Generics
    {
      id: 1,
      type: "multiple-choice",
      question: "What is the wildcard '?' used for in Java Generics?",
      options: [
        "To represent any type",
        "To restrict type parameters",
        "To declare raw types",
        "To enable type safety"
      ],
      correctAnswers: ["To represent any type"],
      multipleAnswers: false,
      note: "Generics"
    },
    // Java Hard - Streams
    {
      id: 2,
      type: "fill-in-the-blanks",
      question: "The __ method in Java Streams is used to combine multiple elements into a single result.",
      blanks: ["reduce"],
      note: "Streams"
    },
    // Java Hard - Concurrency
    {
      id: 3,
      type: "multiple-choice",
      question: "Which of these classes is used to manage a pool of threads in Java?",
      options: ["Thread", "ExecutorService", "ThreadGroup", "Runnable"],
      correctAnswers: ["ExecutorService"],
      multipleAnswers: false,
      note: "Concurrency"
    },
    // Java Hard - Advanced Collections
    {
      id: 4,
      type: "matching",
      question: "Match the advanced collection types to their descriptions",
      leftItems: ["ConcurrentHashMap", "TreeSet", "PriorityQueue"],
      rightItems: [
        "Thread-safe map",
        "Sorted set",
        "Elements ordered by priority"
      ],
      correctMatches: {
        ConcurrentHashMap: "Thread-safe map",
        TreeSet: "Sorted set",
        PriorityQueue: "Elements ordered by priority"
      },
      note: "Advanced Collections"
    },
    // Java Hard - Memory Management
    {
      id: 5,
      type: "fill-in-the-blanks",
      question: "The __ space in JVM is used to store metadata about classes.",
      blanks: ["Metaspace"],
      note: "Memory Management"
    },
    // Java Hard - Reflection
    {
      id: 6,
      type: "multiple-choice",
      question: "Which method is used to create a new instance of a class using reflection?",
      options: ["newInstance()", "newObject()", "createInstance()", "reflectInstance()"],
      correctAnswers: ["newInstance()"],
      multipleAnswers: false,
      note: "Reflection"
    },
    // Java Hard - Functional Programming
    {
      id: 7,
      type: "fill-in-the-blanks",
      question: "The __ interface in Java is a functional interface representing a predicate (boolean-valued function).",
      blanks: ["Predicate"],
      note: "Functional Programming"
    },
    // Java Hard - Serialization
    {
      id: 8,
      type: "multiple-choice",
      question: "What happens if a non-serializable class contains a reference to a serializable class?",
      options: [
        "Serialization succeeds without issues",
        "Serialization fails with an exception",
        "The serializable field is ignored",
        "Only the serializable field is serialized"
      ],
      correctAnswers: ["Serialization fails with an exception"],
      multipleAnswers: false,
      note: "Serialization"
    },
    // Java Hard - Advanced Streams
    {
      id: 9,
      type: "fill-in-the-blanks",
      question: "The __ method in Java Streams can be used to produce a collection from a stream.",
      blanks: ["collect"],
      note: "Advanced Streams"
    },
    // Java Hard - Class Loaders
    {
      id: 10,
      type: "multiple-choice",
      question: "Which class loader is responsible for loading the Java API classes?",
      options: ["System ClassLoader", "Extension ClassLoader", "Bootstrap ClassLoader", "Custom ClassLoader"],
      correctAnswers: ["Bootstrap ClassLoader"],
      multipleAnswers: false,
      note: "Class Loaders"
    },
    // Java Hard - Multithreading
    {
      id: 11,
      type: "fill-in-the-blanks",
      question: "The __ keyword ensures visibility and ordering of variables in multithreaded programs.",
      blanks: ["volatile"],
      note: "Multithreading"
    },
    // Java Hard - JDBC Transactions
    {
      id: 12,
      type: "multiple-choice",
      question: "Which method is used to roll back a transaction in JDBC?",
      options: ["rollback()", "undo()", "reset()", "revert()"],
      correctAnswers: ["rollback()"],
      multipleAnswers: false,
      note: "JDBC Transactions"
    },
    // Java Hard - Advanced Exception Handling
    {
      id: 13,
      type: "fill-in-the-blanks",
      question: "A __ block in Java ensures that resources are closed after usage.",
      blanks: ["try-with-resources"],
      note: "Advanced Exception Handling"
    },
    // Java Hard - Advanced Polymorphism
    {
      id: 14,
      type: "multiple-choice",
      question: "Which of these demonstrates runtime polymorphism in Java?",
      options: [
        "Overriding a method in a subclass",
        "Overloading a method",
        "Using generics",
        "Casting objects"
      ],
      correctAnswers: ["Overriding a method in a subclass"],
      multipleAnswers: false,
      note: "Advanced Polymorphism"
    },
    // Java Hard - Garbage Collection
    {
      id: 15,
      type: "fill-in-the-blanks",
      question: "In Java, the __ method of System class can be used to suggest garbage collection.",
      blanks: ["gc"],
      note: "Garbage Collection"
    }
  ]
};
