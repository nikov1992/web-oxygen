import { Router } from 'express';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

import {methods as autenthication} from "../controllers/auth.controller.js"

const router = Router() // lo ejecuto
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


router.post("/register" , autenthication.register) 

router.post("/login" , autenthication.login) 

router.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname,"../../public/index.html"));
});

router.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname,"../../public/login.html"));
});


router.get("/loginUser", (req, res) => {
    res.sendFile(path.join(__dirname,"../../public/loginUser.html"));
});

export default router;







