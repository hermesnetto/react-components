export default {
  title: 'Um título bacana',
  isLate: true,
  isExpired: true,
  fields: ['Este é o subtitulo'],
  labels: [{
    title: 'User Story',
    color: 'rgb(224, 43, 237)',
  }, {
    title: 'Product Review',
    color: 'rgb(0, 204, 255)',
  }],
  stats: {
    pipe: new Date('2017/10/24 18:00'),
    phase: new Date('2017/10/24 18:00'),
    updated: new Date('2017/10/24 18:00'),
  },
  picture: `
    https://lh3.googleusercontent.com/HICx2vhme87R3FjAoJc3ht7N9IiCbkY5Ph4NuZUuDAhEHBCVzgiufpnAIv2-fXYhpqv77D4Qzg=s640-h400-e365
  `,
  parents: [
    'Card parent name 1',
    'Card parent name 2',
  ],
  assignees: {
    more: 1,
    name: 'Flavio Muniz',
    picture: `
      https://gravatar.com/avatar/49b0d093674fe784cf3084c0e7fc414f.png?s=128&amp;d=http://dev.pipefy.com:3000/images/user-avatar-default.png
    `,
  },
};
