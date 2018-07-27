import connection from '../config/db';
import { resolve } from 'dns';

const Movies = {
    readAll: function readAll() {
        return new Promise((resolve, reject) => {
          connection.query(`call spGetAllMovies()`, (err, result) => {
            if(err) {
              reject(err);
            }
            resolve(result[0]);
          });
        })
    },
    read: function read(id) {
        return new Promise((resolve, reject) => {
          connection.query(`call spGetMovies(${id})`, (err, result) => {
            if(err) {
              reject(err);
            }
            resolve(result);
          });
        })
      },
      create: function create(title, director, poster) {
        return new Promise((resolve, reject) => {
          connection.query(`call spCreateMovies('${title}','${director}','${poster}')`, (err, result) => {
            if(err) {
              reject(err);
            }
            resolve(result);
          });
        })
      },
      update: function update(id, title, director, poster) {
        return new Promise((resolve, reject) => {
          connection.query(`call spUpdateMovie(${id},'${title}','${director}','${poster}')`, (err, result) => {
            if(err) {
              reject(err);
            }
            resolve(result);
          });
        })
      },
      destroy: function destroy(id) {
        return new Promise((resolve, reject) => {
          connection.query(`call spDeleteMovie(${id})`, (err, result) => {
            if(err) {
              reject(err);
            }
            resolve(result);
          })
        })
      }

};

export default Movies;
