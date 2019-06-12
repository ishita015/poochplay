export interface Tee {
    $key?: string;
    color: string;
    name: string;
}

export interface Course {
    $key?: string;
    name: string;
    holes: number;
    tees: {
        [key: string]: Tee;
    };
}

export interface Club {
    $key?: string;
    avatar: string;
    avatar_thumb: string;
    background: string;
    registerDate: number;
    city: string;
    country: string;
    courses: {
        [key: string]: Course;
    };
    email: string;
    info: string;
    isVerified: boolean
    location: {
        lat: number;
        lon: number;
    };
    name: string;
    state: string;
    type: number;
    uid: string;
    username: string;
}
