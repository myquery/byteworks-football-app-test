export interface IMatch{
    head2head: IHead2head[];
    match: IMatchFixture[];
}

export interface IHead2head{
    numberOfMatches:number;
    totalGoals: number;
    homeTeam: ITeamStat;
    awayTeam:ITeamStat;
}

export interface ITeamStat{
    wins:number;
    draws:number;
    losses:number;
}

export interface IMatchFixture{
    id:any;
    competition:ICompete;
    season:ISeason;
    utcDate:Date;
    status:string;
    minute:any;
    attendance:any;
    venue:string;
    matchday:any;
    stage:string;
    group:string;
    lastUpdated:Date;
    homeTeam:ITeamStand;
    awayTeam:ITeamStand;
    score:IScore;
    goals:IGoals[];
    bookings:IBookings[];
    substitutions:ISubstitutions[];
    referees:IReferees[]


}

export interface ITeamStand{
    id:any;
    name:string;
    coach:ICoach;
    captain:ICaptain;
    lineup:ILineUp[];
    bench:ILineUp[];

}
export interface ICoach{
    id:any;
    name:string;
    countryOfBirth:any;
    nationality:any;
}
export interface ICaptain{
    id:any;
    name:string;
    shirtNumber:number;

}
export interface ILineUp{
    id:any;
    name:string;
    position:string;
    shirtNumber:number
}

export interface IScore{
    winner:string;
    duration:string;
    fullTime:IScoreTime;
    halfTime:IScoreTime;
    extraTime:IScoreTime;
    penalties:IScoreTime;
}

export interface IScoreTime{
    homeTeam:any;
    awayTeam:any
}

export interface IGoals{
    minute:number;
    extraTime:any;
    type:string;
    team:ICompete;
    scorer:ICompete;
    assist:any;

}

export interface IBookings{
    minute:number;
    team:ICompete;
    player:ICompete;
    card:string;
}

export interface ISubstitutions{
    minute:number;
    team:ICompete;
    playerOut:ICompete;
    playerIn:ICompete;
}

export interface IReferees{
    id:any;
    name:string;
    nationality:string;
}

export interface ICompete{
    id:any;
    name:string;
}
export interface ISeason{
    id:any;
    startDate:Date;
    endDate:Date;
    currentMatchday:number;
    availableStages:string[];
}