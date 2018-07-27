import { Router } from 'express';
import Movies from '../controllers/movies'


let router = Router();

router
.get('/:id?', (req, res, next) => {
    let id = req.params.id;
    if (id) {
      Movies.read(id).then((Movie) => {
        res.json(Movie);
      }).catch((err) => {
        console.log(err);
      })
    } else {
      Movies.readAll().then((Movies) => {
        res.json(Movies);
      }).catch((err) => {
        console.log(err);
      })
    }
  })
  .post('/', (req, res, next) => {
    let { title, director, poster } = req.body;
    Movies.create(title, director, poster).then((Movie) => {
      res.json(Movie);
    }).catch((err) => {
      console.log(err);
    })
  })
  .put('/:id?', (req, res, next) => {
    let id = req.params.id;
    let { title, director, poster } = req.body;
    Movies.update(id, title, director, poster).then((Movie) => {
      res.json(Movie);
    }).catch((err) => {
      console.log(err);
    })
  })
  .delete('/:id?', (req, res, next) => {
      let id = req.params.id
      Movies.destroy(id).then((Movie) => {
          res.json(Movie);
      }).catch((err) => {
          console.log(err)
      })
  });

export default router;