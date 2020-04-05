const users = [];

function userJoin(id, username, room) {
  const user = {
    id,
    username,
    room,
  };
  users.push(user);

  return user;
}

getCurrentUser = (id) => {
  return users.find((user) => user.id === id);
};

userLeave = (id) => {
  return users.splice(
    users.findIndex((user) => user.id === id),
    1
  )[0];
};

getRoomUsers = (room) => {
  return users.filter((user) => user.room === room);
};

module.exports = {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
};
