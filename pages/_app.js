import "@styles"
import { useEffect } from "react"
import { ConfigProvider } from "antd"
import Home from "@pages"


export default function App() {
  useEffect(() => {
    document.title = "Plume"
    document.body.classList.add("appcb")
  }, [])


  return (
    <ConfigProvider
      componentSize="large"
      theme={{
        token: {
          fontSize: 18,
          fontFamily: "Open Sans"
        }
      }}
    >
      <Home />
    </ConfigProvider>
  )
}
