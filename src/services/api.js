export function loadLists() {
  return [
    { 
      title: 'Tarefas', 
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Estudar módulo 01 de NodeJS',
          labels: ['#7159c1'],
          user: 'https://media.licdn.com/dms/image/D4D03AQHuB6tYfD7cQQ/profile-displayphoto-shrink_400_400/0/1672767121722?e=1679529600&v=beta&t=qtmMDXzSTuxlAv6q7j8MB3_ZwY0N7Ptf_MOiB8HcWWA'
        },
        {
          id: 2,
          content: 'Estudar módulo 02 de JavaScript',
          labels: ['#7159c1'],
          user: 'https://media.licdn.com/dms/image/D4D03AQHuB6tYfD7cQQ/profile-displayphoto-shrink_400_400/0/1672767121722?e=1679529600&v=beta&t=qtmMDXzSTuxlAv6q7j8MB3_ZwY0N7Ptf_MOiB8HcWWA'
        },
        {
          id: 3,
          content: 'Estudar módulo 03 de ReactJS',
          labels: ['#7159c1'],
          user: 'https://media.licdn.com/dms/image/D4D03AQHuB6tYfD7cQQ/profile-displayphoto-shrink_400_400/0/1672767121722?e=1679529600&v=beta&t=qtmMDXzSTuxlAv6q7j8MB3_ZwY0N7Ptf_MOiB8HcWWA'
        },
      ]
    },
    { 
      title: 'Fazendo', 
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Desenvolvendo interface Web',
          labels: ['#54e1f7'],
          user: 'https://media.licdn.com/dms/image/D4D03AQHuB6tYfD7cQQ/profile-displayphoto-shrink_400_400/0/1672767121722?e=1679529600&v=beta&t=qtmMDXzSTuxlAv6q7j8MB3_ZwY0N7Ptf_MOiB8HcWWA'
        },
        {
          id: 6,
          content: 'Configurando Server Side',
          labels: ['#54e1f7'],
          user: 'https://media.licdn.com/dms/image/D4D03AQHuB6tYfD7cQQ/profile-displayphoto-shrink_400_400/0/1672767121722?e=1679529600&v=beta&t=qtmMDXzSTuxlAv6q7j8MB3_ZwY0N7Ptf_MOiB8HcWWA'
        }
      ]
    },
    { 
      title: 'Pausado', 
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Refatorando código em TypeScript',
          labels: ['#7159c1'],
          user: 'https://media.licdn.com/dms/image/D4D03AQHuB6tYfD7cQQ/profile-displayphoto-shrink_400_400/0/1672767121722?e=1679529600&v=beta&t=qtmMDXzSTuxlAv6q7j8MB3_ZwY0N7Ptf_MOiB8HcWWA'
        },
        {
          id: 8,
          content: 'Automatizando testes em React',
          labels: ['#54e1f7'],
          user: 'https://media.licdn.com/dms/image/D4D03AQHuB6tYfD7cQQ/profile-displayphoto-shrink_400_400/0/1672767121722?e=1679529600&v=beta&t=qtmMDXzSTuxlAv6q7j8MB3_ZwY0N7Ptf_MOiB8HcWWA'
        },
        {
          id: 9,
          content: 'Ajustes na biblioteca unform',
          labels: ['#54e1f7'],
        }
      ]
    },
    { 
      title: 'Concluído', 
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Desenvolvimento de interface de Login',
          labels: ['#54e1f7'],
        },
        {
          id: 12,
          content: 'Devenvolver Navbar e Sidebar',
          labels: ['#54e1f7'],
        },
        {
          id: 13,
          content: 'Subir alterações via Git',
          labels: ['#7159c1'],
        }
      ]
    },
  ];
}