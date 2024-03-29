import db from '../configs/db';

export const login_user = async (req, res) => {
  const { email, password } = req.body;
  const loggedUser = await db.user.findOne({
    where: {
      email,
      password,
    },
  });

  if (loggedUser) {
    res.statusCode = 200;
    res.send({
      result: 'OK',
      sessionId: '123-456-ABC',
      name: loggedUser.name + ' ' + loggedUser.surname,
      department: loggedUser.department,
      isAdmin: loggedUser.isAdmin,
      id: loggedUser.id,
    });
  } else res.send({ result: 'Error', message: 'User not found!' });
};

export const register_user = async (req, res) => {
  const { name, surname, email, department, phone, password } = req.body;

  const registeredUser = await db.user.create({
    name,
    surname,
    department,
    email,
    phone,
    password,
  });

  res.send({ result: 'OK', createdAt: registeredUser.createdAt });
};
