export default function App() {
  return (
    <div>
      <input
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
    </div>
  );
}
