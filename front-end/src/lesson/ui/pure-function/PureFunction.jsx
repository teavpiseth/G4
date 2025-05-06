function App() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Form Submitted!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
