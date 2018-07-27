-- -- procedures for MOVIES TABLE
-- READ ALL Movies
drop procedure if exists spGetAllMovies;
delimiter //
create procedure spGetAllMovies()
begin

select * from Movies;

end //
delimiter ;
-- READ INDIVIDUAL Movie
drop procedure if exists spGetMovies;
delimiter //
create procedure spGetMovies(p_id int)
begin

select * from Movies
where id = p_id;

end //
delimiter ;
-- CREATE Movie
drop procedure if exists spCreateMovies;
delimiter //
create procedure spCreateMovies(p_title varchar(256), p_director varchar(256), p_poster varchar(100))
begin

insert into Movies(title, director, poster)
values(p_title, p_director, p_poster);
select last_insert_id() as id;
end //
delimiter ;
-- UPDATE Movie
drop procedure if exists spUpdateMovie;
delimiter //
create procedure spUpdateMovie(p_id int, p_title varchar(256), p_director varchar(256), p_poster varchar(100))
begin

UPDATE Movies
set
    title = coalesce(p_title, title),
    director = coalesce(p_director, director),
    poster = coalesce(p_poster, poster)
where id = p_id;

end //
delimiter ;
-- DELETE Movie
drop procedure if exists spDeleteMovie;
delimiter //
create procedure spDeleteMovie(p_id int)
begin

delete from Movies
where id = p_id;

end //
delimiter ;

