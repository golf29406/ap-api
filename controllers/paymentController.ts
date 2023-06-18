import { Request, Response } from 'express';
import provinces from '../json/provinces.json';
import districts from '../json/districts.json';
import subdistricts from '../json/subdistricts.json';
import geography from '../json/geography.json';
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

export async function findAll(req: Request, res: Response) {
    try {
        //const payments = await prisma.payments.findMany();
        let perPage: number = Number(req.query.perPage ? req.query.perPage : 5)
        let currentPage: number = Number(req.query.currentPage)
        let searchQuery: string = String(req.query.numberPayment ? req.query.numberPayment : '')
        let payments:any;
        let totalPayments:any;
        let totalPages:any
        if(searchQuery){
            totalPayments = await prisma.payments.count({
                where: {
                    numberPayment: {
                        contains: searchQuery,
                    },
                },
            });
            totalPages = Math.ceil(totalPayments / perPage);
            payments = await prisma.payments.findMany({
                where: {
                    numberPayment: {
                        contains: searchQuery,
                    },
                },
                skip: (currentPage - 1) * perPage,
                take: perPage,
            });
        }else{
            totalPayments = await prisma.payments.count();
            totalPages = Math.ceil(totalPayments / perPage);
            payments = await prisma.payments.findMany({
                skip: (currentPage - 1) * perPage,
                take: perPage,
            });
        }
        res.status(200).json({ payments, totalPages })
    } catch (error) {
        console.log('error', error)
        res.status(400).json({ message: 'Failed to fetch payments' })
    } finally {
        await prisma.$disconnect();
    }
}

export async function index(req: Request, res: Response) {
    const { numberPayment,
        moo,
        village,
        soi,
        road,
        province,
        district,
        subDistrict,
        zipcode } = req.body;
    let provincesFilter = provinces.filter((obj: any) => obj.provinceCode == province)
    let districtsFilter = districts.filter((obj: any) => obj.districtCode == district)
    let subdistrictsFilter = subdistricts.filter((obj: any) => obj.subdistrictCode == subDistrict)
    let address = `หมู่บ้าน/อาคาร ${village}` + ' ' + `หมู่ ${moo}` + ' ' + soi + ' ' + road + ' ' + `อำเภอ/เขต ${districtsFilter[0].districtNameTh} ` + `ตำบล/แขวง ${subdistrictsFilter[0].subdistrictNameTh} ` + `จังหวัด ${provincesFilter[0].provinceNameTh} `;
    try {
        let payment = await prisma.payments.create({
            data: {
                numberPayment,
                address,
                zipcode
            },
        });
        res.status(200).json({ message: 'Successfully to create payment', payment });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create payment' });
    } finally {
        await prisma.$disconnect();
    }
}
