import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Astronauta } from './schemas/astronautas.schema';
@Injectable()
export class AstronautasService {
    constructor (
        @InjectModel(Astronauta.name) private astronautaModel:Model<Astronauta> 
    ){}

    async create(astronauta:any){
        const createdAstronauta = new this.astronautaModel(astronauta)
        return createdAstronauta.save()
    }
}
