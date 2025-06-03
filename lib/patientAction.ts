"use server";
import prisma from "@/lib/prisma";

export async function getPatientById(id: string) {
    const patient = await prisma.patient.findFirst({where: {id: id}})
    return patient;

}