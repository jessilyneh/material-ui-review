import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Card } from "@mui/material";
import {CardMedia} from "@mui/material";
import {CardContent} from "@mui/material";
import {CardActions} from "@mui/material";
import Link from "@mui/material/Link";
import flower from "./purple-flower.jpg";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        MUI
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function App() {
  return (
    <>
    <CssBaseline />
    <AppBar position="relative" color="secondary">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
        Meu album
        </Typography>
      </Toolbar>
    </AppBar>
    <main>
      <div>
      <Container maxWidth="sm" style={{marginTop:"10px"}}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Meu album
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Algumas das fotos que eu tenho fotografado no meu tempo livre.
            </Typography>
            <div>
              <Grid container spacing={2} justifyContent="center" style={{marginBottom:"30px"}}>
                <Grid item>
                  <Button variant="contained" color="secondary" >
                    Baixar gratuitamente
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="secondary">
                    Entrar em contato
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
      </div>
      <Container maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                  component="img"
                  height="194"
                  image={flower}
                  alt="flor lilás"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Flor Lilás
                    </Typography>
                    <Typography>
                    Este é um cartão de mídia. Você pode usar esta seção para descrever o conteúdo.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="secondary">
                      Ver
                    </Button>
                    <Button size="small" color="secondary">
                      Editar
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    </main>
    <footer style={{marginTop:"15px", marginBottom:"10px"}}>
        <Typography variant="h6" align="center" gutterBottom>
          Meu Album
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Este projeto foi feito para voces perderem o ranço de Material UI e inspirado em um template do próprio Material UI.
        </Typography>
        <Copyright />
      </footer>
    </>
  );
}

export default App;
