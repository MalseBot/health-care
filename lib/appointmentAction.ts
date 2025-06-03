/** @format */

'use server';
import prisma from '@/lib/prisma';

export async function getAppointments(id: string) {
	const patient = await prisma.appointment.findMany({ where: { patientId: id  } });
	return patient;
}

export async function getRecentAppointments(id: string) {
	const patient = await prisma.appointment.findMany({
		where: { patientId: id },
		orderBy: { createdAt: 'desc' },
		take: 1,
		select:{createdAt:true}
	});
	return patient;
}