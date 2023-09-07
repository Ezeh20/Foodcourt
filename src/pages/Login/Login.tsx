import Container from "../../components/Container"
import Navigation from "../../components/Navigation"
import { constants } from "./constant"
const { HEADING, SUB_HEADING } = constants

export const Login = () => {
  return (
   <>
      <Navigation />
        <Container>
          <div>
            <h1>{HEADING}</h1>
            <span>{SUB_HEADING}</span>
          </div>
          <div></div>
       </Container>
   </>
  )
}
