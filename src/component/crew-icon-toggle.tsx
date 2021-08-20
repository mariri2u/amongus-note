import { CrewIconColors, Status } from "../const/type"
import CrewIcon from "./crew-icon"

interface Props {
  color: CrewIconColors
  status: Status
  onChange: (color: CrewIconColors, status: Status) => void
}

function CrewIconToggle (props: Props) {
  const onStatusChange = () => {
    switch (props.status) {
      case Status.DEAD:
        props.onChange(props.color, Status.LIVE)
        break
      case Status.LIVE:
        props.onChange(props.color, Status.DEAD)
        break
      default:
        props.onChange(props.color, Status.LIVE)
        break
    }
  }
  return (
    <>
      <CrewIcon
        color={props.color}
        status={props.status}
        onClick={onStatusChange}
      />
    </>
  )
}

export default CrewIconToggle
