//Header component with the course name
const Header = ({ course }) => <h1>{course.name}</h1>;

//crate the Part component, which will be part of the Content, taking both name and num. of exercises from array
const Part = ({ part }) => (<p> {part.name} {part.exercises} </p>)

//Content component simply includes the Part component
const Content = ({ parts }) =>
  parts.map((part) => <Part key={part.id} part={part} />);

//calculate total of ex. using the reduce method, with an initial value of 0
const Total = ({ parts }) => {
    const sum = parts.reduce((accumulator, newValue) => accumulator + newValue.exercises, 0) 
    return <p>Total number of exercises: {sum} </p>;
}

//the Course component will have to contain the other parts: Header, Content and Total
const Course = ({ course }) => (
  <>
    <Header course={course} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </>
);

export default Course;
