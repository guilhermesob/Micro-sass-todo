import type { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export const listUserController = async ( reques: Response, response: Response) => {
    const users = await prisma.user.findMany()
    response.send(users)
}

export const findOneUserController = async (request: Request, response: Response) => {
    const { userId } = request.params

    const user = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })

    if(!user) {
        return response.status(404).send({
            error: 'Not Found'
        })
    }

    response.send(user)
}