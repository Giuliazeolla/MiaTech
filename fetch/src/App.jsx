/*import { useState } from "react"
import { useFetch } from "./hooks/useFetch"

const API_URL = "https://jsonplaceholder.typicode.com/posts"

const App = () => {
  const [url] = useState(API_URL);
  const { data, error, loading, } = useFetch(url);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {
              data && Object.keys(data[0]).map((key) => (
                <th key={key}>{key}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            data && data.map((item) => (
              <tr key={item.id}>
                {Object.keys(item).map((key) => (
                  <td key={key}>{item[key]}</td>
                ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default App
