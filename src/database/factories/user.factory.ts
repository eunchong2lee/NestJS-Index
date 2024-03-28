import { setSeederFactory } from 'typeorm-extension';
import { User } from '../../modules/user/entities/user.entity';

export const UserFactory = setSeederFactory(User, (faker) => {
  const user = new User();
  user.username = faker.person.fullName();
  user.email = faker.internet.email(user.username);

  return user;
});
