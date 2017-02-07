import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AgendaData } from './agenda-data';
import { AgendaRow } from './agenda-row';
import { AgendaDay } from './agenda-day';
import { AgendaDayApi } from './agenda-day-api';
import { Observable } from 'rxjs/Observable';
import { DAYS, TD_TYPES } from '../../app.constant';


@Injectable()
export class AgendaService {

    constructor(public http: Http) {

    }

    private getDefaultCellsForSpecificTime(time: number, totalRooms: number): AgendaData[] {
        let i = 1, 
            ad: AgendaData[] = [];

        while(i <= totalRooms) {
            ad.push(new AgendaData(i, TD_TYPES[TD_TYPES.GAP].toLowerCase(), time))
            i++;
        }

        return ad;
    }

    private concatCellsWithDefaultOnes(arr: AgendaData[], totalRooms: number) {
        if(arr[0].type === TD_TYPES[TD_TYPES.PRESENTATION].toLowerCase()) {
            let gapsArray = this.getDefaultCellsForSpecificTime(arr[0].timeStart, totalRooms);
            return [...arr, ...gapsArray];
        }

        return arr;
    }

    private distinctByTime(arr: AgendaData[]): Observable<AgendaData[]> {
        return Observable.from(this.sortByRoom(arr)).distinctUntilChanged((a, b) => a.room === b.room).toArray();
    }

    private sortByRoom(arr: AgendaData[]): AgendaData[] {
        return arr.sort((a,b) => a.room - b.room);
    }

    private transformAgenda(agenda: AgendaData[], totalRooms: number): Observable<AgendaRow[]> {
        return Observable.from(agenda)
            .groupBy(ad => ad.timeStart)
            .flatMap(group => group.reduce((acc, curr) => 
                [...acc, curr], Array<AgendaData>())
            )
            .map(p => this.concatCellsWithDefaultOnes(p, totalRooms))
            .flatMap(p => this.distinctByTime(p))
            .map(pg => new AgendaRow(pg[0].timeStart, pg))
            .toArray();
    }

    getAgenda(): Observable<AgendaDay[]> {
         let day:string;
         let totalRooms: number;
         
         return this.http.get("/assets/mock-data/mock-agenda.json")
            .map(res => res.json().agenda as AgendaDayApi[])
            .flatMap(res => Observable.from(res))
            .flatMap(a => { 
                day = a.day; 
                totalRooms = a.totalRooms; 
                return this.transformAgenda(a.agenda, a.totalRooms);
            })
            .map(agenda => new AgendaDay(day, agenda, totalRooms))
            .toArray();
            

    }

    createDaysNameArray(days: number): Observable<string[]> {
        let daysArray: string[] = [], 
            i = 1;
        
        while(i <= days) {
            daysArray.push("day " + DAYS[i].toLowerCase());
            i++;
        }

        return Observable.of(daysArray);
        
    }

}
