import type { Request, Response } from "express";

export const listUserscontroller = (request: Request, response: Response ) => {
    response.send({
        ok: true
    })
}