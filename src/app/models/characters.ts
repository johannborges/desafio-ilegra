export class Characters {
    public characters: string[];
    public created: string;
    public director: string;
    public edited: string;
    public episode_id: number;
    public opening_crawl: string;
    public planets: string[];
    public producer: string;
    public release_date: string;
    public species: string[];
    public starships: string[];
    public title: string;
    public url: string;
    public vehicles: string[];

    constructor(
        characters: string[],
        created: string,
        director: string,
        edited: string,
        episode_id: number,
        opening_crawl: string,
        planets: string[],
        producer: string,
        release_date: string,
        species: string[],
        starships: string[],
        title: string,
        url: string,
        vehicles: string[]
    ){
        this.characters = characters;
        this.created = created;
        this.director = director;
        this.edited = edited;
        this.episode_id = episode_id;
        this.opening_crawl = opening_crawl;
        this.planets = planets;
        this.producer = producer;
        this.release_date = release_date;
        this.species = species;
        this.starships = starships;
        this.title = title;
        this.url = url;
        this.vehicles = vehicles;
    }
}
