import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 3555,
  username: 'postgres',
  password: 'pg123',
  database: 'postgres',
  autoLoadEntities: true,
  synchronize: true,
  entities: ['dist/*/entities/.entity.js'],
};
