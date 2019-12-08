 export interface ICompetition{
    id:any;
    area: IArea;
    name:string;
    emblemUrl:string;
    plan:string;
    currentSeason:ICurrentSeason;
    numberOfAvailableSeasons:number;
    lastUpdated:Date;

  }
       export interface IArea{
            id:any;
            name:string
          }
        
          export interface ICurrentSeason{
            id:any;
            startDate:Date;
            endDate:Date;
            currentMatchday:number;
            winner:any;
          }