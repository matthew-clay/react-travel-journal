import Header from "./component/Header";
import Blog from "./component/Blog";
import data from "./data";

function App() {
  const blogs = data.map((item) => {
    return <Blog key={item.id} item={item} />;
  });

  return (
    <div className="App">
      <Header />
      <main className="blogs-container">{blogs}</main>
    </div>
  );
}

export default App;
