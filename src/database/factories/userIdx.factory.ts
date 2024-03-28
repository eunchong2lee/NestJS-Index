import { setSeederFactory } from 'typeorm-extension';
import { UserIdx } from '../../modules/user/entities/userIdx.entity';

export const UserFactory = setSeederFactory(UserIdx, (faker) => {
  const userIdx = new UserIdx();
  userIdx.username = faker.person.fullName();
  userIdx.email = faker.internet.email(userIdx.username);

  return userIdx;
});
