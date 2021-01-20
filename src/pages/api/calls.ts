import { uuid } from 'uuidv4';
const classe = [
  {
    id: 1,
    class_id: 1,
    url: 'http://localhost:3000/class/1/lesson/1',
  },
  {
    id: 2,
    class_id: 1,
    url: 'http://localhost:3000/class/1/lesson/2',
  },
  {
    id: 3,
    class_id: 1,
    url: 'http://localhost:3000/class/1/lesson/3',
  },
  {
    id: 4,
    class_id: 1,
    url: 'http://localhost:3000/class/1/lesson/4',
  },
  {
    id: 5,
    class_id: 1,
    url: 'http://localhost:3000/class/1/lesson/5',
  },
  {
    id: 6,
    class_id: 1,
    url: 'http://localhost:3000/class/1/lesson/6',
  },
]

export default function handler(req, res) {
  // Get data from your database
  res.status(200).json(classe)
}

// class_id
// url
// date_url
// expire_date_url
// created_at
// updated_at