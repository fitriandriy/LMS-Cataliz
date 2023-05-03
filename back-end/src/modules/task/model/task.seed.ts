export const taskSeed = [
  {
    deadline: new Date(),
    name: "Example name 1",
    description: "Example desc 1",
    section_id: "section_id 1",
    criteria: [
      {
        name: "Example criteria name 1",
        status: false
      }
    ],
    createdAt: new Date(),
  },
  {
    deadline: new Date(),
    name: "Example name 2",
    description: "Example desc 2",
    section_id: "section_id 2",
    criteria: [
      {
        name: "Example criteria name 2",
        status: true
      }
    ],
    createdAt: new Date(),
  },
  {
    deadline: new Date(),
    name: "Example name 3",
    section_id: "section_id 3",
    description: "Example desc 3",
    criteria: [
      {
        name: "Example criteria name 3",
        status: false
      }
    ],
    createdAt: new Date(),
  },
];
