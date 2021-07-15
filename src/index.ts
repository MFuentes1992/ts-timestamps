import app from "./server";

const port = "3000";
app.listen(port, () => {
    console.log(`App => http://localhost:${port}/api/`);
})



