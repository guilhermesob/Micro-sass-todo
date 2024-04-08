import type { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export const listUserController = async ( reques: Response, response: Response) => {
    const users = await prisma.user.findMany()
    response.send(users)
}

export const findOneUserController = async (request: Request, response: Response) => {
    const { userId } = request.params
    const { name, email} = request.body

    if(!name || ! email){
        return response.send({
            error: 'Name or Email is invalid'
        })
    }


    const userEmailAlreadyExists = await prisma.user.findUnique({
        where: {
            email
        },
        select{
            id: true
        }
    })

    if(!userEmailAlreadyExist) {
        return response.status(400).send({
            error: 'Email already in use'
        })
    }

    const user = await prisma.user.create({
        data: {
            name,
            email
        }
    })

    response.send(user)
}