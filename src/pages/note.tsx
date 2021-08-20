import { useState } from "react";
import { Paper, Typography } from "@material-ui/core";
import { containerStyles, subTitleStyles, titleStyles } from "../const/styles";
import FoundAll from "../component/found-all";
import { CrewIconColors, Maps } from "../const/type";
import GameInfo from "../component/game-info";

function Note () {
  const [ map, setMap ] = useState(Maps.SKELD)
  const [ members, setMembers ] = useState([] as CrewIconColors[])
  return (
    <Paper style={containerStyles}>
      <Typography style={titleStyles}>AmongUs メモ帳</Typography>
      <GameInfo
        map={map}
        members={members}
        onChangeMap={(m: Maps) => { setMap(m) }}
        onChangeMember={(m: CrewIconColors[]) => { setMembers(m) }}
      />
      <Typography style={subTitleStyles}>盤面メモ</Typography>
      <FoundAll
        map={map}
        members={members}
      />
    </Paper>
  )
}

export default Note
