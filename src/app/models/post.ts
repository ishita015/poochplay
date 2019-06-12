export interface Post {
    author: string;
    text: string;
    date: number;
    type: string;
    commentsCount?: number;
    likesCount?: number;
    liked?: boolean;
    photo?: {
        url: string;
        width: number;
        height: number;
    };
    video?: {
        url: string;
        width: number;
        height: number;
    };
    shared?: {
        pid: string;
        uid: string;
    };
    mentioned?: {
        [key: string]: {
            type: number;
            username: string;
        };
    };
    $key: string;
}
