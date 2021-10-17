
export class Repository {
  constructor(
    public name: string,
    public description: string,
    public created_at: Date,
    public html_url: string,
  ) {
  }
}