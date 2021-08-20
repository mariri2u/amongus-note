import { useState } from "react"
import { CrewIconColors, Status } from "../const/type"
import CrewIcon from "./crew-icon"

interface Props {
  color: CrewIconColors
  status: Status
}

function CrewIconStatus (props: Props) {
  const [ status, setStatus ] = useState(props.status)
  const onStatusChange = () => {
    console.log(status)
    switch (status) {
      case Status.NONE:
        setStatus(Status.LIVE)
        break
      case Status.LIVE:
        setStatus(Status.DEAD)
        break
      case Status.DEAD:
        setStatus(Status.NONE)
        break
      default:
        setStatus(Status.NONE)
        break
    }
  }
  console.log(status)
  return (
    <>
      <CrewIcon
        color={props.color}
        status={status}
        onClick={onStatusChange}
      />
    </>
  )
}

export default CrewIconStatus
