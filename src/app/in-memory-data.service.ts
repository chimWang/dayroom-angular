// import { InMemoryDbService } from 'angular-in-memory-web-api';
// import { Hero } from './hero';

// export class InMemoryDataService implements InMemoryDbService {
//   createDb() {
//     const heroes = [
//       { id: 1, name: '曹操' },
//       { id: 2, name: '周瑜' },
//       { id: 3, name: '诸葛亮' },
//       { id: 4, name: '孙悟空' },
//       { id: 5, name: '虞姬' },
//       { id: 6, name: '武则天' },
//       { id: 7, name: '公孙策' },
//     ];
//     return { heroes };
//   }

//   genId(heroes: Hero[]): number {
//     return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
//   }
// }