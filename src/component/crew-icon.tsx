import { iconStyles } from "../const/styles"
import { CrewIconColors, Status } from "../const/type"

interface Props {
  color: CrewIconColors
  status: Status
  onClick?: () => void
}

function CrewIcon (props: Props) {
  const prefix = props.status === Status.LIVE ? '' : 'dead'
  const iconRaw = props.status === Status.NONE ?
    require(`../assets/icons/batsu.png`) :
    require(`../assets/icons/au${props.color}${prefix}.png`)
  const icon = iconRaw.default
  console.log(props.status)
  return (
    <>
      <img
        src={icon}
        alt={props.color}
        style={iconStyles}
        onClick={props.onClick}
      />
    </>
  )
}

export default CrewIcon
