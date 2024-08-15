import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import { Container } from "@mui/material";
import Head from "next/head";
import { AppBar, Button, Toolbar, Typography, Box, Grid } from "@mui/material";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Head>
        <title>Flashcard SaaS</title>
        <meta name="description" content="Create Flashcard from your text" />
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Flashcard SaaS
          </Typography>
          <SignedOut>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography variant="h2">Welcome to Flashcard SaaS</Typography>
        <Typography variant="h5">
          {" "}
          The easiest way to make flashcards from your text
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Get Started
        </Button>
      </Box>
      <Box sx={{ my: 6 }}>
        <Typography variant="h4">Features</Typography>
        <Grid contained spacing={4}>
          <Grid items xs={12} md={4}>
            {" "}
            <Typography variant="h6">Easy Text Input</Typography>
            <Typography>
              Simply imput your text and let our software do the rest. Creating
              flashcards has never been easeir.
            </Typography>
          </Grid>
          <Grid items xs={12} md={4}>
            {" "}
            <Typography variant="h6">Smart Flashcards</Typography>
            <Typography>
              Our AI intelligently breaks down your text into concise
              flashcards, perfect for studying.
            </Typography>
          </Grid>
          <Grid items xs={12} md={4}>
            {" "}
            <Typography variant="h6">Accessible Anywhere</Typography>
            <Typography>
              Access your flashcards from any device, at any time. Study on the
              go with ease.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ my: 6, textAlign: "center" }}>
        <Typography variant="h4">Pricing</Typography>
        <Grid contained spacing={4}>
          <Grid items xs={4} md={4}>
            {" "}
            <Typography variant="h6">Easy Text Input</Typography>
            <Typography>
              Simply imput your text and let our software do the rest. Creating
              flashcards has never been easeir.
            </Typography>
          </Grid>
          <Grid items xs={4} md={4}>
            {" "}
            <Typography variant="h6">Smart Flashcards</Typography>
            <Typography>
              Our AI intelligently breaks down your text into concise
              flashcards, perfect for studying.
            </Typography>
          </Grid>
          <Grid items xs={4} md={4}>
            {" "}
            <Typography variant="h6">Accessible Anywhere</Typography>
            <Typography>
              Access your flashcards from any device, at any time. Study on the
              go with ease.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
