import type { Request, Response } from "express";

export const listUsersController = (request: Request, response: Response ) => {
    response.send({
        ok: true
    })
}