import { Grid, Typography } from "@mui/material"
import List from "./list"

const UserList = () => {

   return (
      <Grid container padding={10} spacing={6} xs={12}>
         <Grid item xs={12}>
            <Typography variant="h3">Cadastro de Usuários</Typography>
         </Grid>
         <Grid item xs={12}>
            <List/>
         </Grid>
      </Grid>
   )
}

export default UserList