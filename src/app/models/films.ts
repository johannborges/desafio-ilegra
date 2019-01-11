export class Films {
    public characters: Array<any>;
    public created: string;
    public director: string;
    public edited: string;
    public episode_id: number;
    public opening_crawl: string;
    public planets: Array<any>;
    public producer: string;
    public release_date: string;
    public species: Array<any>;
    public starships: Array<any>;
    public title: string;
    public url: string;
    public vehicles: Array<any>;

    constructor(
        characters: Array<any>,
        created: string,
        director: string,
        edited: string,
        episode_id: number,
        opening_crawl: string,
        planets: Array<any>,
        producer: string,
        release_date: string,
        species: Array<any>,
        starships: Array<any>,
        title: string,
        url: string,
        vehicles: Array<any>
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
