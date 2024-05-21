export class Github {
    name: string;
    login: string;
    avatar_url: string;
    created_at: string;
    location: string;
    bio: string;
    public_repos: string;
    public_gists: string;
    html_url: string;
    followers:string;

constructor( 
    name: string,
    login: string,
    avatar_url: string,
    created_at: string,
    location: string,
    bio: string,
    public_repos: string,
    public_gists: string,
    html_url: string,
    followers:string){

        this.name=name;
        this.login = login;
        this.avatar_url=avatar_url;
        this.created_at=created_at;
        this.location=location;
        this.bio=bio;
        this.public_repos=public_repos;
        this.public_gists=public_gists;
        this.html_url=html_url;
        this.followers=followers;
    }
}