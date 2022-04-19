import destructuringHero from '../destructuringHero';

test('should return key', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 7,
        name: 'Тройной выстрел',
        icon: 'http://...',
        description: 'Тройной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
      },
    ],
  };

  const result = [
    { description: 'Двойной выстрел наносит двойной урон' },
    { description: 'Тройной выстрел наносит двойной урон' },
    { description: 'Описание недоступно' },
  ];

  expect(result).toEqual(destructuringHero('description', character));
});
