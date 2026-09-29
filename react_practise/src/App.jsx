import ProductCard from "./components/ProductCard";
import LikeButton from "./components/LikeButton";
function App() {
   const students = [
    {
      id: 1,
      name: "Ali",
      score: 80
    },
    {
      id: 2,
      name: "Ahmed",
      score: 45
    },
    {
      id: 3,
      name: "Usman",
      score: 65
    },
    {
      id: 4,
      name: "Hamza",
      score: 30
    }
  ];
  return (
    <div>
      <ProductCard
        title="Laptop"
        price={120000}
        category="Electronics"
      />

      <ProductCard
        title="Shoes"
        price={5000}
        category="Fashion"
      />
         <LikeButton />
          <h1>Student Results</h1>

      {students.map((student) => (
        <div key={student.id}>
          <h2>{student.name}</h2>
          <p>Score: {student.score}</p>

          {student.score >= 50 ? (
            <p style={{ color: "green" }}>Pass</p>
          ) : (
            <p style={{ color: "red" }}>Fail</p>
          )}
        </div>
      ))}
    </div>
    
  );
}

export default App;