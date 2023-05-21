import express, { request, response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv' ;
import methodOverride from "method-override"
import  DoctorRouter from './routes/Doctor.js' ;
dotenv.config();
mongoose.connect(process.env.mongoConnectionUrl);

import doctorModel from './Database/doctorModel.js';
import { engine } from 'express-handlebars';
const task = express();
task.use(methodOverride('_method'));
task.use(express.urlencoded({extended:true}));
task.engine('handlebars', engine());
task.set('view engine', 'handlebars');
task.set('views', './Timplates/layout');
task.use(express.static('public'));
task.use('/doctor',DoctorRouter);
task.listen(process.env.port);





 
  
     

