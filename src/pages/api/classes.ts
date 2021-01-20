import { uuid } from 'uuidv4';
const classe = [
  {
    id: 1,
    name: 'EBEP - 2020',
    students: [
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
    ],
  },
  {
    id: 2,
    name: 'EBEP - 2020',
    students: [
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
    ],
  },
  {
    id: 3,
    name: 'EBEP - 2020',
    students: [
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
    ],
  },
  {
    id: 4,
    name: 'EBEP - 2020',
    students: [
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
    ],
  },
  {
    id: 5,
    name: 'EBEP - 2020',
    students: [
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
      {
        id: uuid(),
        name: 'Gabriel Pereira Oliveira'
      },
    ],
  },
]

export default function handler(req, res) {
  // Get data from your database
  res.status(200).json(classe)
}
