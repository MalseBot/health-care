/** @format */

import React from 'react';
import { getPatientById } from '@/lib/patientAction';
import {
	ArrowUpRight,
	Edit2Icon,
	EyeIcon,
	LocationEdit,
	Mars,
	PhoneIcon,
	UserCircleIcon,
	Venus,
} from 'lucide-react';
import {
	getAppointments,
	getRecentAppointments,
} from '@/lib/appointmentAction';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import Link from 'next/link';

const Page = async () => {
	const patientData = await getPatientById('1');
	const { name, gender, age, phone, address, id } = patientData!;
	const patientAppointments = await getAppointments(id);
	const recentVisit = await getRecentAppointments(id);
	const recentVisitDate =
		recentVisit.values().next().value?.createdAt.toDateString() ||
		'No recent visit';
	return (
		<>
			<section className='flex p-10 justify-start flex-col shadow-2xl rounded-3xl w-2/3 gap-y-5 bg-accent/20 border-border/50 m-5 border'>
				<div className='flex flex-row font-bold capitalize text-text justify-start gap-5 '>
					<div className='grid grid-cols-4 grid-rows-2 items-center '>
						<div className='row-span-2 flex justify-center items-center'>
							<UserCircleIcon
								width={40}
								height={40}
								className=' text-border'
							/>
						</div>
						<h3 className='text-3xl col-span-3'>{name}</h3>
						<p className='text-text/75 font-semibold text-md col-span-3'>
							Name
						</p>
					</div>
					<div className='grid grid-cols-2 items-center'>
						<div className='row-span-2 flex justify-center items-center'>
							{gender === 'female' ? (
								<Venus
									width={40}
									height={40}
									className=' text-border'
								/>
							) : (
								<Mars
									width={40}
									height={40}
									className=' text-border'
								/>
							)}
						</div>
						<h3 className='text-3xl'>{gender}</h3>
						<p className='text-text/75 font-semibold text-md'>Gender</p>
					</div>
					<div className='grid grid-cols-2 items-center '>
						<div className='row-span-2 flex justify-center items-center'>
							<ArrowUpRight
								width={40}
								height={40}
								className=' text-border'
							/>
						</div>
						<h3 className='text-3xl'>{age}</h3>
						<p className='text-text/75 font-semibold text-md'>Age</p>
					</div>
				</div>
				<div className='flex gap-5 font-semibold capitalize text-text/80 justify-between'>
					<div className='grid grid-cols-4 grid-rows-2 items-center'>
						<PhoneIcon className=' row-span-2 text-border' />
						<h3 className=' col-span-3'>{phone}</h3>
						<p className=' col-span-3 opacity-60'>Phone number</p>
					</div>
					<div className='grid grid-cols-3 items-center'>
						<LocationEdit className=' row-span-2 text-border' />
						<h3 className=' col-span-2'>{address}</h3>
						<p className='col-span-2 opacity-60'>Address</p>
					</div>
					<div className='grid grid-cols-3 items-center'>
						<LocationEdit className=' row-span-2 text-border' />
						<h3>{recentVisitDate}</h3>
						<p className='col-span-2 opacity-60'>recent visit</p>
					</div>
					<h3>upcoming visit</h3>
				</div>
			</section>
			<section className='flex  p-10 justify-start flex-col shadow-2xl rounded-3xl w-3/4 gap-y-5 text-text bg-accent/20 border-border/50 m-5 border'>
				<h3 className='text-3xl font-bold uppercase'>Visits</h3>
				<Table>
					<TableHeader className=' w-full'>
						<TableRow className='text-text/80 text-lg text-center'>
							<TableHead className='w-[100px]'>Issue</TableHead>
							<TableHead>Treatment</TableHead>
							<TableHead>Visit Date</TableHead>
							<TableHead className='text-right'>Fee Paid</TableHead>
							<TableHead className='w-[100px] text-center'>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{patientAppointments.map((appointment) => (
							<TableRow
								key={appointment.id}
								className='hover:bg-accent/50 text-md transition-all '>
								<TableCell className='text-md font-semibold'>
									{appointment.issue}
								</TableCell>
								<TableCell>{appointment.treatment}</TableCell>
								<TableCell>{appointment.createdAt.toDateString()}</TableCell>
								<TableCell className='text-right'>
									{appointment.price}جنية
								</TableCell>
								<TableCell className='text-right flex gap-2 justify-evenly'>
									<Link href={`appointment/${appointment.id}`}>
										<EyeIcon className='text-secondary transform active:text-primary' />
									</Link>
									<Link href={`appointment/edit/${appointment.id}`}>
										<Edit2Icon className='text-secondary transform active:text-primary' />
									</Link>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</section>
		</>
	);
};

export default Page;
