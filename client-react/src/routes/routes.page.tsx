import { useEffect, useState } from "react";

import { Box } from "@material-ui/core";
import { Routes as IRoutes } from "./routes.entity";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import api from "../utils/api";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "60%",
    "justify-content": "center",
    "align-items": "center"
  },
}));

export default function Routes() {
  const classes = useStyles();
  const [routes, setRoutes] = useState<IRoutes[]>([]);
  useEffect(() => {
    api.get("/routes").then((res) => {
      setRoutes(res.data);
    });
  }, []);

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="secondary mailbox folders">
        {routes.map(({ title, startPosition, endPosition }: IRoutes) => (
          <ListItem>
            <ListItemText primary={title} />
            <Box display="flex" flexDirection="column">
              <span>
                StartPosition: LAT: {startPosition.latitude}, LONG:{" "}
                {startPosition.longitude}
              </span>
              <span>
                EndPosition: LAT: {endPosition.latitude}, LONG:{" "}
                {endPosition.longitude}
              </span>
            </Box>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
