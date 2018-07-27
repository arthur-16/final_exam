-- READ ALL Actors
drop procedure if exists spGetAllActors;
delimiter //
create procedure spGetAllActors()
begin

select * from Actors;

end //
delimiter ;
-- READ INDIVIDUAL Actor
drop procedure if exists spGetActors;
delimiter //
create procedure spGetActors(p_id int)
begin

select * from Actors
where id = p_id;

end //
delimiter ;
-- CREATE Actoir
drop procedure if exists spCreateActors;
delimiter //
create procedure spCreateActors(p_name varchar(256))
begin

insert into Actors(name)
values(p_name);
select last_insert_id() as id;
end //
delimiter ;
-- UPDATE Actor
drop procedure if exists spUpdateActors;
delimiter //
create procedure spUpdateActors(p_id int, p_name varchar(256))
begin

UPDATE Actors
set
    name = coalesce(p_name, name)
where id = p_id;

end //
delimiter ;
-- DELETE Actor
drop procedure if exists spDeleteActor;
delimiter //
create procedure spDeleteActor(p_id int)
begin

delete from Actors
where id = p_id;

end //
delimiter ;