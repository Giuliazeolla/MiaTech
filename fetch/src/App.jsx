import { useEffect } from "react"
import { useState } from "react"

const App = () => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const Url = "https://jsonplaceholder.typicode.com/posts"

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const response = await fetch(Url, { method: "GET" });
        if (response.ok) {
          const posts = await response.json();
          setData(posts);
        }

      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [Url]);

  const table = (data) => {
    if (!Array.isArray(data) || data.length === 0) {
      return (`Nessun dato disponibile`);
    }
    const keys = Object.keys(data[0]);
    
    return (
      <table>
        <thead>
          <tr>
            {
              keys.map((key) => (
                <th key={key}>{key}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            data.map((item) => (
              <tr key={item.id}>
                {keys.map((key) => (
                  <td key={key}>{item[key]}</td>
                ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    )
  }

  return (
    <div>
      {table(data)}
    </div>
  )
}

export default App
