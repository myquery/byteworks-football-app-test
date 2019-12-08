export interface ITeam{
    id:any;
    area: IArea;
    name:string;
    shortname:string;
    tla:string;
    address:string;
    phone:any;
    website:string;
    email:string;
    founded: Date;
    clubColors:string;
    venue:any;
    squad:ISquad[];
    lastUpdated:Date;
  }
  
  export interface ISquad{
    id:any;
    name:string;
    position:string;
    dateOfBirth:Date;
    countryOfBirth:string;
    nationality:string;
    role:string;
}
export interface IArea{
    id:any;
    name:string
  }