const students = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    grades: [85, 92, 78, 89, 95],
    image: "https://picsum.photos/150",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    age: 21,
    grades: [75, 88, 94, 77, 82],
    image: "https://picsum.photos/150",
  },
  {
    firstName: "Michael",
    lastName: "Johnson",
    age: 22,
    grades: [90, 86, 75, 91, 87],
    image: "https://picsum.photos/150",
  },
  {
    firstName: "Emily",
    lastName: "Brown",
    age: 19,
    grades: [78, 92, 88, 76, 80],
    image: "https://picsum.photos/150",
  },
  {
    firstName: "David",
    lastName: "Lee",
    age: 20,
    grades: [85, 79, 93, 88, 76],
    image: "https://picsum.photos/150",
  },
  {
    firstName: "Sarah",
    lastName: "Wilson",
    age: 21,
    grades: [92, 85, 77, 89, 91],
    image: "https://picsum.photos/150",
  },
  {
    firstName: "Christopher",
    lastName: "Anderson",
    age: 22,
    grades: [76, 88, 90, 85, 92],
    image: "https://picsum.photos/150",
  },
  {
    firstName: "Olivia",
    lastName: "Martinez",
    age: 20,
    grades: [88, 75, 86, 93, 80],
    image: "https://picsum.photos/150",
  },
  {
    firstName: "William",
    lastName: "Taylor",
    age: 19,
    grades: [94, 82, 91, 77, 85],
    image: "https://picsum.photos/150",
  },
  {
    firstName: "Ava",
    lastName: "Garcia",
    age: 21,
    grades: [89, 91, 80, 78, 87],
    image: "https://picsum.photos/150",
  },
];
console.log(students);

const root = document.getElementById("root");
// console.log(root);
// const img = document.createElement("img"); //<img/>
// img.setAttribute("src", students[0].image); //<img src="https://picsum.photos/150" />
// img.setAttribute("class", "picture");

// <div class="student">
//   <img src="https://picsum.photos/150" alt="" />
//   <p>John Doe</p>
//   <p>30</p>
// </div>;
const studentDiv = document.createElement("div"); // <div></div>
root.appendChild(studentDiv);
