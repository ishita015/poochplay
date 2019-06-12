export interface Tournament {
    $key?: string;
    cid: string;
    cId: string;
    course: string;
    endDate: number;
    startDate: number;
    eventName: string;
    holesCount: number;
    holesPart: number;
    image: string;
    info: string;
    isClosed: boolean;
    leaderboard: any;
    proAm: boolean;
    teamPlay: number;
    tee: string;
    type: number;
}
