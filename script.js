var image = {
  name: 'Kotek',
  src: 'http://imgur.com/n8OYCzR.png'
};

var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    img: 'tu zdjecie'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img:'tu zdjecie'
  },
  {
    id: 3,
    title: 'American Gangster',
    desc: 'Film o amrykańskim gangsterze',
    img:'tu zdjecie'
  },
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('p',{},movie.img)
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

  ReactDOM.render(element, document.getElementById('app'));