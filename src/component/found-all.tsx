import {
  CrewIconColors,
  Maps
} from "../const/type"
import FoundHeader from "./found-header"
import FoundLines from "./found-lines"

interface Props {
  map: Maps
  members: CrewIconColors[]
}

function FoundAll (props: Props) {
  return (
    <>
      <div>
        <FoundHeader
          map={props.map}
          members={props.members}
        />
      </div>
      <div>
        <FoundLines
          map={props.map}
          members={props.members}
        />
      </div>
    </>
  )
}

export default FoundAll
