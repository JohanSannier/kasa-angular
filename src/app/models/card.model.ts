export class card {
  constructor(
    public id: string,
    public title: string,
    public cover: string,
    public pictures: string[],
    public description: string,
    public host: { name: string; picture: string },
    public rating: string,
    public location: string,
    public equipments: string[],
    public tags: string[]
  ) {}
}
