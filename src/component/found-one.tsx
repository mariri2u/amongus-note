import {
  CrewIconColors, 
  Status
 } from "../const/type"
import CrewIconStatus from "./crew-icon-status"

interface Props {
  members: CrewIconColors[]
}

function FoundOne (props: Props) {
  return (
    <>
      {props.members.map(color => 
        <CrewIconStatus color={color} status={Status.NONE}/>
      )}
    </>
  )
}

export default FoundOne
