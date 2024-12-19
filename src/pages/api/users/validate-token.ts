export default function handler(req, res) {
  const response = {
    code: 200,
    data: {
      uid: 2,
    },
    message: 'Token validado con exito',
  };
  res.status(200).json(response);
}
