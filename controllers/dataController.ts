import { Request, Response } from 'express';
import provinces from '../json/provinces.json';
import districts from '../json/districts.json';
import subdistricts from '../json/subdistricts.json';
import geography from '../json/geography.json';

export function getProvinces(req:Request, res:Response) {
  res.status(200).json(provinces);
}

export function getDistricts(req:Request, res:Response) {
  let { provinceCode } = req.query;
  if(provinceCode){
    let districtsFilter = districts.filter((obj:any) => obj.provinceCode == provinceCode)
    res.status(200).json(districtsFilter);
  }else{
    res.status(400).json({ 'message': 'Not found districts.'});
  }
}

export function getSubDistricts(req:Request, res:Response) {
  let { districtCode } = req.query;
  if(districtCode){
    let subDistrictsFilter = subdistricts.filter((obj:any) => obj.districtCode == districtCode)
    res.status(200).json(subDistrictsFilter);
  }else{
    res.status(400).json({ 'message': 'Not found subdistricts.'});
  }
}

export function getGeography(req:Request, res:Response) {
  let { subdistrictCode } = req.query;
  if(subdistrictCode){
    let geographyFilter = geography.filter((obj:any) => obj.subdistrictCode == subdistrictCode)
    res.status(200).json(geographyFilter);
  }else{
    res.status(400).json({ 'message': 'Not found geography.'});
  }
}