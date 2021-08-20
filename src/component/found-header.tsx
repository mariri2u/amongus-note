import {
  Box
} from "@material-ui/core"
import { 
  headerStyles,
  infoTextStyles
} from "../const/styles"
import { 
  CrewIconColors,
  Status,
  Maps
} from "../const/type"
import CrewIcon from "./crew-icon"

interface Props {
  map: Maps
  members: CrewIconColors[]
}

function FoundHeader (props: Props) {
  return (
    <Box component='div' display='flex' alignItems='center' style={headerStyles}>
      {props.members.map(color => 
        <CrewIcon color={color} status={Status.LIVE}/>
      )}
      <span style={infoTextStyles}>{props.members.length} / 15</span>
    </Box>
  )
}

export default FoundHeader
