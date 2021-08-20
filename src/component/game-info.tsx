import { FormControl, InputLabel, MenuItem, Select, Typography } from "@material-ui/core"
import { formStyles, subTitleStyles } from "../const/styles"
import { CrewIconColors, MapItems, Maps, Status } from "../const/type"
import CrewIconToggle from "./crew-icon-toggle"

interface Props {
  map: Maps
  members: CrewIconColors[]
  onChangeMap: (m: Maps) => void
  onChangeMember: (m: CrewIconColors[]) => void
}

function GameInfo (props: Props) {
  const onMemberChange = (color: CrewIconColors, status: Status) => {
    const newmember = [ ...props.members ]
    if (status === Status.LIVE) {
      newmember.push(color)
      props.onChangeMember(newmember)
    } else {
      props.onChangeMember(newmember.filter(mem => mem !== color))
    }
  }
  return (
    <>
      <Typography style={subTitleStyles}>マップ設定</Typography>
      <FormControl style={formStyles}>
        <InputLabel>マップ</InputLabel>
        <Select defaultValue={props.map} onChange={(e: any) => {
          props.onChangeMap(e.target.value)
        }}>
          {MapItems.map(item =>
            <MenuItem value={item.id}>{item.label}</MenuItem>
          )}
        </Select>
      </FormControl>
      <Typography style={subTitleStyles}>参加者設定</Typography>
      {Object.values(CrewIconColors).map(color => 
        <CrewIconToggle
          color={color}
          status={props.members.includes(color) ? Status.LIVE : Status.DEAD}
          onChange={onMemberChange}
        />
      )}
    </>
  )
}

export default GameInfo
