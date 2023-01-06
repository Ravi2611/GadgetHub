import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'JRavi Raj',
    email: 'raj@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Ravi Rishu',
    email: 'rishu@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users