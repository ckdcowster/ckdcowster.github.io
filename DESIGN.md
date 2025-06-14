# Design Thoughts
- **DRY (Don't Repeat Yourself)**  
Avoid code duplication. 
Reuse code through functions, classes, or modules to improve maintainability.
- **KISS (Keep It Simple, Stupid)**  
Design systems as simply as possible. 
Avoid unnecessary complexity.
- **Easy to understand**  
Clear names for everything.  
Comments are clear and useful, and mostly explain why instead of what.  
- **Separation of Concerns**  
Divide a program into distinct sections, each addressing a separate concern or functionality.
- **High Cohesion and Low Coupling**  
High Cohesion: Related functions are kept together.  
Low Coupling: Components are independent and changes in one don’t heavily affect others.  
- **Package-Oriented Design**  
Organize code into "small", cohesive packages.  
Each package should have a clear purpose and minimal public API.
- **Encapsulation**  
Hide internal state and require all interaction to be performed through an object's methods.
- **Composition Over Inheritance**  
Favor composing objects with desired behaviour over inheriting from a base class.
- **Dependency Injection**  
An object’s dependencies are provided from the outside rather than the object creating them itself.  
This makes the code more flexible, testable, and easier to maintain.
- **Minimalism in Public APIs**  
Define small, focused interfaces.
Keep exported functions, types, and variables to a minimum.  
Use lowercase names for Unexported identifiers.
- **Avoid Global State**  
Prefer passing dependencies explicitly rather than relying on global variables.
- **Idiomatic Error Handling**  
Handle error first.
- **Narrow scope**  
Compilers can more easily optimize memory and register usage when variable lifetimes are short and well-defined.  
Developers don’t have to keep track of a variable across a large block of code,  
Reduces the risk of variable shadowing and makes it easier to detect.
- **Efficient code**  
Avoid making multiple (temporary) copies of variables.  
Prefer to pass by reference/pointer for large data.
- **Variable Declaration**  
  + Use := (short variable declaration) when:
    + You're declaring and initializing a variable in a local scope (e.g., inside a function).  
    + The type can be inferred from the value.  
  + Use var when:  
    + You need to declare a variable without initializing it.  
    + You're declaring a package-level variable.  
    + You want to specify the type explicitly.  
    + You're using a zero value intentionally.
