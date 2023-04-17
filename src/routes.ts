import express, { Request, Response } from "express";

const router = express.Router();

class Test {
    show(req: Request, res: Response){
        return res.json({oi: "Olá"});
    }
}

const testController = new Test();

router.get("/", testController.show)

export default router;