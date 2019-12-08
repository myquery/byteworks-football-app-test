export interface IStanding{
    season:ISeason;
    filter:IFilter;
    standing:IStand[];
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