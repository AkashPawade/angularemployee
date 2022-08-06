
create database akashp;
use akashp;
show tables;

select * from product;
select * from product_category;

create table product(
id int primary key,
categoryid int,
datecreated date,
description text,
imageurl text,
lastupdated date,
name varchar(255),
sku varchar(255),
unitprice int,
unitsinstock int,
foreign key (categoryid) references product_category(categoryid)
);

create table product_category(
categoryid int primary key,
categoryname varchar(255)
);

insert into product_category values(1,"clothes");
insert into product values(1,1,"10-10-10","wear it","https://www.dreamstime.com/royalty-free-stock-photo-blue-jeans-image10328995","11-11-11","jean","ab1",100,100);
