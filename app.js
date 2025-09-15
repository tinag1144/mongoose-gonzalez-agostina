import express from 'express';
import "dotenv/config";
import { connectDB } from './src/config/database.js';
import { routes } from './src/routes/index.js';

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

//rutas
app.use("/api", routes);


app.listen(PORT, async () => { 
    await connectDB();
    console.log(`Servidor corriendo en el puerto: http://localhost:${PORT}`);
});
app.get('/', (req, res) => {
    res.send('Server ready');
});