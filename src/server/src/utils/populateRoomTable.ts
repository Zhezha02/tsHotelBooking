import room from '../graphql/resolvers/room'

export default async function (amount: number) {
    for (let i: number = 1; i <= amount;) {
    try {
      const createdRoom = await room.createRoom ({
        roomInput:
          {
            number: i, description: `desc ${i}`
          }
      })
      createdRoom && ++i;
    } catch (e) {
      console.log('Cant create rooms ', e);
      break;
    }
  }
};

