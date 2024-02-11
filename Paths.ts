interface ILink {
  name: string;
  path: string;
}
class CPaths {
  private links: ILink[] = [
    {name: 'main', path: '/'},
    {name: 'profile', path: '/profile/qwedsa10'},
    {name: 'messages', path: '/messages'},
    {name: 'friends', path: '/friends'}
  ];
  public getLinks(): ILink[] {
    return this.links;
  }
}
export const paths = new CPaths;