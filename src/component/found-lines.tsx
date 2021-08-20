import { Box, FormControl, IconButton, InputLabel, Select } from "@material-ui/core"
import { AddCircleOutline, RemoveCircleOutline } from "@material-ui/icons"
import { useState } from "react"
import { buttonStyles, formStyles } from "../const/styles"
import { 
  AirshipPassages,
  AirshipRooms,
  CrewIconColors,
  FOUND_GROUP,
  Maps,
  MiraHQPassages,
  MiraHQRooms,
  PolusPassages,
  PolusRooms,
  Sabotage,
  SkeldPassages,
  SkeldRooms,
  Timeline
} from "../const/type"
import FoundOne from "./found-one"

interface Props {
  map: Maps
  members: CrewIconColors[]
}

function FoundLines (props: Props) {
  const [ length, setLength ] = useState(1)
  const [ resetKey, setResetKey ] = useState(0)
  const list: any[] = []
  const [ rooms, passages ] = (() => {
    switch (props.map) {
      case Maps.SKELD:
        return [ SkeldRooms, SkeldPassages ]
      case Maps.MIRA_HQ:
        return [ MiraHQRooms, MiraHQPassages ]
      case Maps.POLUS:
        return [ PolusRooms, PolusPassages ]
      case Maps.AIRSHIP:
        return [ AirshipRooms, AirshipPassages ]
      default:
        return [ SkeldRooms, SkeldPassages ]
      }
  })()
  const renderOne = (index: number) => {
    return (
      <Box component='div' display='flex' alignItems='center'>
        <FormControl style={formStyles}>
          <InputLabel>盤面</InputLabel>
          <Select native defaultValue='' key={resetKey}>
            <option value='' />
            <optgroup label={FOUND_GROUP.TIMELINE}>
              {Timeline.map(item => 
                <option value={item.id}>{item.label}</option>
              )}
            </optgroup>
            <optgroup label={FOUND_GROUP.SABOTAGE}>
              {Sabotage.map(item => 
                <option value={item.id}>{item.label}</option>
              )}
            </optgroup>
            <optgroup label={FOUND_GROUP.ROOM}>
              {rooms.map(item => 
                <option value={item.id}>{item.label}</option>
              )}
            </optgroup>
            <optgroup label={FOUND_GROUP.PASSAGE}>
              {passages.map(item => 
                <option value={item.id}>{item.label}</option>
              )}
            </optgroup>
          </Select>
        </FormControl>
        <FoundOne
          key={resetKey}
          members={props.members}
        />
        <span style={buttonStyles}>
          {index === length - 1 ? (
            <IconButton
              size='small'
              aria-label='追加'
              onClick={() => {
                setLength(length + 1)
              }}
            >
              <AddCircleOutline />
            </IconButton>
          ) : (
            <></>
          )}
          {index === 0 && length > 1 ? (
            <IconButton
              size='small'
              aria-label='削除'
              onClick={() => {
                setResetKey(resetKey + 1)
                setLength(1)
              }}
            >
              <RemoveCircleOutline />
            </IconButton>
          ) : (
            <></>
          )}
        </span>
      </Box>
    )
  }

  for (let i = 0; i < length; i++) {
    list.push(renderOne(i))
  }
  return (
    <>
      {list}
    </>
  )
}

export default FoundLines
