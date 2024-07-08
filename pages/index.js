import { useState } from "react"
import { Button, Flex, Progress, Space } from "antd"


export default function Home() {
  const uid2 = require("uid2")
  const nbr = 40

  const [currentToken, setCurrentToken] = useState("")
  const [currentStep, setCurrentStep] = useState(0)
  const [show, setShow] = useState(true)


  const reset = () => {
    setShow(true)
    setCurrentToken("")
    setCurrentStep(0)
  }

  const generate = async () => {
    for (let i = 0; i < nbr; i++) {
      const token = uid2(20)

      try {
        await navigator.clipboard.writeText((i + 1) + "/ " + token)
        setCurrentToken(token)
        setCurrentStep(i + 1)
        setShow(false)
      } catch (error) {
        reset()
      }

      await new Promise(resolve => setTimeout(resolve, 500))
    }

    reset()
  }


  return (
    <main>
      <Flex align="center" justify="center" className="min-hv-100 container text-center">
        <Space direction="vertical">
          {
            show ?
              <Button shape="round" onClick={generate}>Nettoyer</Button>
            :
              <>
                <Progress type="dashboard" format={() => currentStep + "/" + nbr} percent={(currentStep/nbr)*100} />
                <div className="fw-bold">{ currentToken }</div>
              </>
          }
        </Space>
      </Flex>
    </main>
  )
}
