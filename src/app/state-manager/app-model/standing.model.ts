export interface IStanding{
    competition: ICompetition[];
    season:ISeason;
    filter:IFilter;
    standings:IStand[];
}

export interface ISeason{
    id:any;
    startDate:Date;
    endDate:Date;
    currentMatchday:any;
}

export interface IFilter{

}

export interface IStand{
    stage:string;
    type:string;
    group:string;
    table:ITable[]
}

export interface ITable{
    position:number;
    team:ITeamStand;
    playedGames:number;
    won:number;
    draw:number;
    lost:number;
    points:number;
    goalsFor:number;
    goalsAgainst:number;
    goalDifference:number;
}

export interface ITeamStand{
    id:any;
    name:string;
    crestURI:string;
}

export interface ICompetition{
    id:any;
    area: IArea;
    code:string;
    name:string;
    plan:string;
    lastUpdated:Date;

  }
export interface IArea{
id:any;
name:string
 }
        
  