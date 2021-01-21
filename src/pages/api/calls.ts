import { uuid } from 'uuidv4';
const calls = [
  {
    id: 1,
    class_id: 1,
    url: 'http://localhost:3000/class/1/lesson/1',
    created_at: new Date(),
  },
  {
    id: 2,
    class_id: 1,
    url: 'http://localhost:3000/class/1/lesson/2',
    created_at: new Date(),
  },
  {
    id: 3,
    class_id: 1,
    url: 'http://localhost:3000/class/1/lesson/3',
    created_at: new Date(),
  },
  {
    id: 4,
    class_id: 1,
    url: 'http://localhost:3000/class/1/lesson/4',
    created_at: new Date(),
  },
  {
    id: 5,
    class_id: 1,
    url: 'http://localhost:3000/class/1/lesson/5',
    created_at: new Date(),
  },
  {
    id: 6,
    class_id: 1,
    url: 'http://localhost:3000/class/1/lesson/6',
    created_at: new Date(),
  },
]

export default function handler(req, res) {
  // Get data from your database
  res.status(200).json(calls)
}

// class_id
// url
// date_url
// expire_date_url
// created_at
// updated_at